import React from 'react';
import initialState from '../../../store/store';

const Party = () => {
    
    const initialParty = initialState.party;
    console.log(initialParty); // Yay! This works! Now you gotta work on updating state from the moogleAPI :)

    return (
        <ul>
            {initialParty.map(x => {return <li key={x.key}>Name: {x.name} Job: {x.job} Age: {x.age}</li>})}
        </ul>
    )
}

export default Party;