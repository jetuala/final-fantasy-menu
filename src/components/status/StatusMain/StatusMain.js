import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './StatusMain.css';
import StatusCharacter from '../StatusCharacter/StatusCharacter';

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
            <div className="leftarrow">
                <div className="arrow">
                    <FaArrowLeft onClick={() => arrowLeft()} />
                </div>
            </div>
            {/* separate Component??? */}
            <div className="statusCharacter">
                <StatusCharacter character={party[currentMember]} />
            </div>
            <div className="rightarrow">
                <FaArrowRight className="arrow" onClick={() => arrowRight()} />
            </div>
        </div>
    )
}

export default StatusMain;