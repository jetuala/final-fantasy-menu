import React from 'react';
import './StatusCharacter.css';

const StatusCharacter = (character, props) => {
    const x = character.character; // whatever lol
    console.log(props);
    return (
        <div className="statusCharacter">
            {x.name}
            {x.age}
            {x.gender}
            {x.race}
            {x.job}
            {x.height} m
            {x.weight} kg
            {x.origin}
            {x.description}
        </div>
    )
}

export default StatusCharacter;