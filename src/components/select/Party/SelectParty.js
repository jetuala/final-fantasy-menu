import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SelectParty.css';
import { deletePartyMember } from '../../../store/store';

// This component is different from the main Party component. Probably will just contain pictures of party members

const SelectParty = () => {
    const party = useSelector(state => state.party.party)
    const dispatch = useDispatch();

    function deleteFromParty(id, name) {
        if (window.confirm("Delete " + name + " from party?")) {
            dispatch(deletePartyMember(id));
        } else {
            return;
        }
    }

    return (
        <div className="window selectParty">
            <ul>
                {party.map(x => {
                    return <li key={x.id} onClick={() => deleteFromParty(x.id, x.name)}><img src={x.pictures[0].url} /> {x.name}</li>})}
            </ul>
        </div>
    )
}

export default SelectParty;

// function (x.id, x.name) {deleteFromParty(x.id, x.name)}