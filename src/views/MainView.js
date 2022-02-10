import React from 'react';

import Party from '../components/main/Party/Party';
import Menu from '../components/main/Menu/Menu';
import Location from '../components/main/Location/Location';
import Time from '../components/main/Time/Time';

const MainView = () => {
    return (
        <div>
            <Party />
            <Menu />
            <Location />
            <Time />
        </div>
    )
}

export default MainView;