import React from 'react';
import initialState from '../../../store/store';

// This component is different from the main Party component. Probably will just contain pictures of party members

const Party = () => {

    const initialParty = initialState.party;

    return (
        <div>
            <ul>
            {initialParty.map(x => {return <li key={x.key}>Name: {x.name} Job: {x.job} Age: {x.age}</li>})}
            </ul>
        </div>
    )
}

export default Party;