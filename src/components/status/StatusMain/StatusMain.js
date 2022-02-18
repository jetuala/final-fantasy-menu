import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StatusMain = () => {
    const party = useSelector(state => state.party.party);
    const [ currentMember, setCurrentMember ] = useState(0);
    // hmm... should I use just a local state number? Or a global state number?
    
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
            {party[currentMember].name}
            <FaArrowRight onClick={() => arrowRight()} />
        </div>
    )
}

export default StatusMain;