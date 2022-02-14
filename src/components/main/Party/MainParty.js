import React from 'react';
import { connect } from 'react-redux';
import './MainParty.css';

// This is the "main" Party window, not to be confused with the "select" Party window.

const MainParty = (props) => {
    const party = props.party;

    return (
        <ul>
            {party.map(x => {return <li className="color" key={x.id}>Name: {x.name} Job: {x.job} Age: {x.age}</li>})}
        </ul>
    )
}

const mapStateToProps = state => {
    return {party: state.party}
}

export default connect(mapStateToProps)(MainParty);