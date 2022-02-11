import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const moogleAPI = "https://www.moogleapi.com/api/v1/characters/search?name=";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('Kain');
    const searchRef = useRef();

    function assignLi(data) {
        data.forEach(({name, job, age}) => {
            return (
                <li>{name} {job} {age}</li>
            )
        }) // HOW DO I GET THIS INTO SEARCHREF??? LOL
    }

    useEffect(() => {
        let results = {};
        results = getCharacterData(searchValue); // make API call and assign response to eventual display component
    })

    async function getCharacterData() {
        await axios.get(`${moogleAPI}` + searchValue, {
                headers: {'Access-Control-Allow-Origin': '*'}
            })
            .then(res => {
                assignLi(res.data);
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
                    <div ref={searchRef}></div>
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;