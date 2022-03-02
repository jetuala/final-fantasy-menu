import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './StatusMain.css';
import StatusCharacter from '../StatusCharacter/StatusCharacter';
import { current } from '@reduxjs/toolkit';

const StatusMain = () => {
    const party = useSelector(state => state.party.party);
    const [ currentMember, setCurrentMember ] = useState(0);
    // Need to pass which character was clicked into the above statement
    
    function arrowLeft() {
        if (currentMember === 0) {
            setCurrentMember(party.length - 1);
        } else {
            setCurrentMember(currentMember - 1);
        }
    }

    function arrowRight() {
        if (currentMember === party.length - 1) {
            setCurrentMember(0);
        } else {
            setCurrentMember(currentMember + 1);
        }
    }

    return (
        <div className="statusMain window">
            <FaArrowLeft onClick={() => arrowLeft()} />
            {/* separate Component??? */}
            <StatusCharacter character={party[currentMember]} />
            <FaArrowRight onClick={() => arrowRight()} />
        </div>
    )
}

export default StatusMain;