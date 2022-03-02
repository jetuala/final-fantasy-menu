import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <div className="window statusHome">
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
            <div className="window statusHeader">
                Status
            </div>
        </>
    )
}

export default Header;