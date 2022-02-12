import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/party">Party</Link></li>
                <li><Link to="/status">Status</Link></li>
                {/* Remember to definitely use e.preventDefault() here to allow for selection of character from Party window!! */}
                <li><Link to="/config">Config</Link></li>
            </ul>
        </div>
    )
}

export default Menu;