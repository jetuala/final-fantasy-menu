import React from 'react';
import './ConfigView.css';
import Header from '../components/config/Header/Header';
import Main from '../components/config/Main/Main';

const ConfigView = () => {
    return (
        <div className="configContainer">
            <Header />
            <Main />
        </div>
    )
}

export default ConfigView;