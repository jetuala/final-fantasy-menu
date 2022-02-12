import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const moogleAPI = "https://www.moogleapi.com/api/v1/characters/search?name=";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('Kain');
    const [listItems, setListItems] = useState([]);
    let results = [{name: "something initial"}];

    useEffect(() => {
        // every time the input changes, this runs. First it should make an API call with the value of the input and put the results into a const
        getCharacterData(searchValue);
        // this isn't working. First off, it's returning a Promise. Then, it's not putting getCharacterData into results, and I don't know why
    }, [searchValue])

    async function getCharacterData() {
        await axios.get(`${moogleAPI}` + searchValue, {
                headers: {'Access-Control-Allow-Origin': '*'}
            })
            .then(res => {
                setListItems(res.data);
            })
            .catch(error => {console.log(error)})
    }

    return (
        <div>
            <input 
                placeholder={'Search...'}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div>
                <ul>
                    {listItems.map((listItem) => {
                        return (
                            <li key={listItem.id}>{listItem.name} {listItem.job} {listItem.age} {listItem.origin}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;