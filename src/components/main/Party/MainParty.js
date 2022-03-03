import React from 'react';
import { useSelector } from 'react-redux';
import './MainParty.css';

// This is the "main" Party window, not to be confused with the "select" Party window.

function Character({ img, name, job, age }) {
    return (
        <div className="character">
            {/* Link doesn't completely work in this context either. It disables the Drag and Drop. */}
            <img src={img} alt={name} /> 
            <div className="col1">
                {name} <br/>
                Job: {job}
            </div> 
            <div className="col2">
                Age: {age}
                <progress value="100" max="100">100</progress>
            </div>
        </div>
    )
}

const MainParty = () => {
    const party = useSelector(state => state.party.party);

    return (
        <div className="mainPartyWindow window">
            
                {party.map((x) => {
                    return (
                        <Character key={x.id} img={x.pictures[0].url} name={x.name} job={x.job} age={x.age} />
                    )}
                )}
            
        </div>
    )
}

export default MainParty;