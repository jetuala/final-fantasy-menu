import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StatusMain = () => {
    const party = useSelector(state => state.party.party);
    const [ currentMember, setCurrentMember ] = useState(0);
    
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
        <div>
            <FaArrowLeft onClick={() => arrowLeft()} />
            {/* I might put a Home icon in here as well */}
            {party[currentMember].name}
            <FaArrowRight onClick={() => arrowRight()} />
        </div>
    )
}

export default StatusMain;