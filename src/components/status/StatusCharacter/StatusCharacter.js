import React from 'react';
import './StatusCharacter.css';

const StatusCharacter = (character) => {
    const x = character.character; // whatever lol
    return (
        <div className="statusCharacter statusCharacterContainer">
            <div className="statCol1">
                <img src={x.pictures[0].url} alt={x.name} />
                <h3>{x.name}</h3>
                <p>Age: {x.age}</p>
                <p>Gender: {x.gender}</p>
                <p>Race: {x.race}</p>
                <p>Job: {x.job}</p>
                <p>Height: {x.height} m</p>
                <p>Weight: {x.weight} kg</p>
                <p>Game of Origin: {x.origin}</p>
            </div>
            <div className="statCol2">
                {x.description}
            </div>
        </div>
    )
}

export default StatusCharacter;