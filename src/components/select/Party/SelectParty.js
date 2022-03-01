import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SelectParty.css';
import { deletePartyMember } from '../../../store/store';

// This component is different from the main Party component. Probably will just contain pictures of party members

const SelectParty = () => {
    const party = useSelector(state => state.party.party)
    const dispatch = useDispatch();

    function deleteFromParty(listItem) {
        dispatch(deletePartyMember(listItem));
    }

    return (
        <div className="window">
            <ul>
                {party.map(x => {
                    return <li className="color" key={x.id} onClick={() => deleteFromParty(x.id)}>Name: {x.name}</li>})}
            </ul>
        </div>
    )
}

export default SelectParty;