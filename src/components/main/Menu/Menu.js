import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className="MainMenu window">
            <ul>
                <li><Link to="/party">Party</Link></li>
                <li><Link to="/status">Status</Link></li>
                <li><Link to="/config">Config</Link></li>
            </ul>
        </div>
    )
}

export default Menu;