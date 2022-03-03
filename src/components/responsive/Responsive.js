import React from 'react';
import './Responsive.css';
import UhUh from './Tom animated.gif';

const Responsive = () => {
    return (
        <div className="window responsive">
            <img src={UhUh} alt="Finger wagging character" />
            <p>We're sorry, this app was not designed to be responsive.</p>
            <p>Please use a screen of 1300px width or above.</p> 
        </div>
    )
}

export default Responsive;