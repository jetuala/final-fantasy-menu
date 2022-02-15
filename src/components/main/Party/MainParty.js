import React from 'react';
import { useSelector } from 'react-redux';
import './MainParty.css';

// This is the "main" Party window, not to be confused with the "select" Party window.

const MainParty = () => {
    const party = useSelector(state => state.party.party)
    return (
        <ul>
            {party.map(x => {return <li className="color" key={x.id}>Name: {x.name} Job: {x.job} Age: {x.age}</li>})}
        </ul>
    )
}

export default MainParty;