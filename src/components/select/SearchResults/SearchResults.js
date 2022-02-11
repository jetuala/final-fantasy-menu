import React from 'react';

const SearchResults = (results) => {
    console.log(results);
    // It's trying to render this component before it gets the response back from the API!!! DUH
    return (
        <div>
            Search Results
        </div>
    )
}

export default SearchResults;