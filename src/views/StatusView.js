import React from 'react';
import Header from '../components/status/Header/Header';
import StatusMain from '../components/status/StatusMain/StatusMain';
import './StatusView.css';
import Responsive from '../components/responsive/Responsive';

const StatusView = () => {
    return (
        <>
            <div className="statusContainer">
                <Header />
                <StatusMain />
            </div>
            <Responsive />
        </>
    )
}

export default StatusView;