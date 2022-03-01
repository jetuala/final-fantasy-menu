import React, { useState, useEffect } from 'react';
import './Time.css';

const Time = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date(), 1000))

        return function cleanup() {
            clearInterval(timer)
        }
    })
    
    return (
        <div className="Time window">
            <div className="timetext">{date.toLocaleTimeString()}</div>
        </div>
    )
}

export default Time;