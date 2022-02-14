import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './SearchBar.css';

const moogleAPI = "https://www.moogleapi.com/api/v1/characters/search?name=";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [listItems, setListItems] = useState([]);
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        getCharacterData(searchValue);
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

    function addToParty(listItem) {
        console.log(listItem.name); // yay this works lol gotta figure out reducers!!!
    }

    return (
        <div>
            <input 
                placeholder={'Search...'}
                onChange={(e) => {
                    if (e.target.value.length < 1) {
                        setListItems([]);
                    } else {
                    setSearchValue(e.target.value.replace(/\s/g, ''))
                }}}
            />
            {/* Unfortunately, the input can be super slow. Look into controlled vs uncontrolled components? or maybe useMemo?? */}
            <div>
                <ul>
                    {listItems.map((listItem) => {
                        return (
                            <li className="searchBarResult" key={listItem.id} onClick={() => addToParty(listItem)}>
                                {listItem.name} {listItem.job} {listItem.age} {listItem.origin}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;