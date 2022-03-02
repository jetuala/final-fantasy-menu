import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="configHome window">
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
            <div className="configHeader window">
                Config Header
            </div>
        </>
    )
}

export default Header;