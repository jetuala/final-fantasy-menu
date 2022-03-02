import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './SelectView.css';
import Header from '../components/select/Header/Header';
import SelectParty from '../components/select/Party/SelectParty';
import SearchBar from '../components/select/SearchBar/SearchBar';

const SelectView = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="selectContainer">
                <Header />
                <SelectParty />
                <SearchBar />
            </div>
        </DndProvider>
    )
}

export default SelectView;