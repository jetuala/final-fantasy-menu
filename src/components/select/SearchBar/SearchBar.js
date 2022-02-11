import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const moogleAPI = "https://www.moogleapi.com/api/v1/characters/search?name=";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('Kain');
    let results = {};

    useEffect(() => {
        results = getCharacterData(searchValue);
    })

    async function getCharacterData() {
        const response = await axios.get(`${moogleAPI}` + searchValue, {
            headers: {'Access-Control-Allow-Origin': '*'}
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {console.log(error)})
    }

    return (
        <div>
            <input 
                placeholder={'Search...'}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchResults props={results} />
            {/* pass down props instead of up through select component */}
        </div>
    )
}

export default SearchBar;