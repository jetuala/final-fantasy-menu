import React from 'react';
import { connect } from 'react-redux';

// This component is different from the main Party component. Probably will just contain pictures of party members

const Party = (props) => {
    const party = props.party
    return (
        <div>
            <ul>
                {party.map(x => {return <li key={x.id}>Name: {x.name}</li>})}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {party: state.party}
}

export default connect(mapStateToProps)(Party);