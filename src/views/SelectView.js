import React from 'react';
import Header from '../components/select/Header/Header';
import SelectParty from '../components/select/Party/SelectParty';
import SearchBar from '../components/select/SearchBar/SearchBar';

const SelectView = () => {
    return (
        <div>
            <Header />
            <SelectParty />
            <SearchBar />
        </div>
    )
}

export default SelectView;