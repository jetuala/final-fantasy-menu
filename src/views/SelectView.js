import React from 'react';
import Header from '../components/select/Header/Header';
import Party from '../components/select/Party/Party';
import SearchBar from '../components/select/SearchBar/SearchBar';
import SearchResults from '../components/select/SearchResults/SearchResults';

const SelectView = () => {
    return (
        <div>
            <Header />
            <Party />
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default SelectView;