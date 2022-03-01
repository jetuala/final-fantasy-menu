import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="window">
            Select Header
            <Link to="/">
                <FaHome />
            </Link>
        </div>
    )
}

export default Header;