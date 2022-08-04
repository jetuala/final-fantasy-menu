import React from 'react';

import MainParty from '../components/main/Party/MainParty';
import Menu from '../components/main/Menu/Menu';
import Location from '../components/main/Location/Location';
import Time from '../components/main/Time/Time';
import Responsive from '../components/responsive/Responsive';

import './MainView.css';

const MainView = () => {
    return (
        <>
            <div className="black">
                <div className="container">
                    <MainParty />
                    <Menu />
                    <Location />
                    <Time />
                </div>
            </div>
            <Responsive />
        </>

    )
}

export default MainView;