import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './SelectView.css';
import Header from '../components/select/Header/Header';
import SelectParty from '../components/select/Party/SelectParty';
import SearchBar from '../components/select/SearchBar/SearchBar';
import Responsive from '../components/responsive/Responsive';


const SelectView = () => {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className='black'>
                    <div className="selectContainer">
                        <Header />
                        <SelectParty />
                        <SearchBar />
                    </div>
                </div>
            </DndProvider>
            <Responsive />
        </>
    )
}

export default SelectView;