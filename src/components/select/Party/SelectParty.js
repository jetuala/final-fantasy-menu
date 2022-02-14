import React from 'react';
import { connect } from 'react-redux';
import './SelectParty.css';

// This component is different from the main Party component. Probably will just contain pictures of party members

const SelectParty = (props) => {
    const party = props.party
    return (
        <div>
            <ul>
                {party.map(x => {return <li className="color" key={x.id}>Name: {x.name}</li>})}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {party: state.party}
}

export default connect(mapStateToProps)(SelectParty);