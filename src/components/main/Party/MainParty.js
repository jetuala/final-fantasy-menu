import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MainParty.css';

// This is the "main" Party window, not to be confused with the "select" Party window.

const MainParty = () => {
    const party = useSelector(state => state.party.party)
    return (
        <ul>
            {party.map(x => {
                return (
                    <li className="color" key={x.id}>
                        <Link to={"/status"}>Name: {x.name} Job: {x.job} Age: {x.age}</Link>
                    </li>
                )}
            )}
        </ul>
    )
}

export default MainParty;