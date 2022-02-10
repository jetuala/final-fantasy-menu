import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/party">Party</Link></li>
                <li><Link to="/status">Status</Link></li>
                <li><Link to="/config">Config</Link></li>
            </ul>
        </div>
    )
}

export default Menu;