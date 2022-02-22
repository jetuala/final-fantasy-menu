import React from 'react';

import MainParty from '../components/main/Party/MainParty';
import Menu from '../components/main/Menu/Menu';
import Location from '../components/main/Location/Location';
import Time from '../components/main/Time/Time';

import './MainView.css';

const MainView = () => {
    return (
        <div className="container">
            <MainParty />
            <Menu />
            <Location />
            <Time />
        </div>
    )
}

export default MainView;