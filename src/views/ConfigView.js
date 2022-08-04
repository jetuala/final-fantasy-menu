import React from 'react';
import './ConfigView.css';
import Header from '../components/config/Header/Header';
import Main from '../components/config/Main/Main';
import Responsive from '../components/responsive/Responsive';

const ConfigView = () => {
    return (
        <>
            <div className='black'>
                <div className="configContainer">
                    <Header />
                    <Main />
                </div>
            </div>
            <Responsive />
        </>
    )
}

export default ConfigView;