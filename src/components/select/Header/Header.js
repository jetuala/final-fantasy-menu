import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="window selectHome">
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
            <div className="window selectHeader">
                Choose party members here.
            </div>
        </>
    )
}

export default Header;