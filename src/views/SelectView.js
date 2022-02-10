import React from 'react';
import Header from '../components/select/Header/Header';
import Party from '../components/select/Party/Party';
import SearchBar from '../components/select/SearchBar/SearchBar';

const SelectView = () => {
    return (
        <div>
            <Header />
            <Party />
            <SearchBar />
        </div>
    )
}

export default SelectView;