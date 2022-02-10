import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const moogleAPI = "http://moogleapi.com/api/v1/characters/";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log(searchValue);
        getCharacterData(searchValue);
    })

    async function getCharacterData() {
        const response = await axios.get(`${moogleAPI}/${searchValue}`)
            .then((response) => {console.log(response)})
            .catch(error => {console.log(error)})
    }

    return (
        <div>
            <input 
                placeholder={'Search...'}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchResults />
            {/* pass down props instead of up through select component */}
        </div>
    )
}

export default SearchBar;