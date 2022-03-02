import React, { useState } from 'react';
import './Main.css';
import { ChromePicker } from 'react-color';

const Main = () => {
    const r = document.querySelector(':root');
    const rs = getComputedStyle(r);
    const [currentColor, setcurrentColor] = useState(rs.getPropertyValue("--main-bg-color"));

    const setBkgrndColor = (color) => {
        r.style.setProperty("--main-bg-color", color.hex);
        setcurrentColor(color.hex);
    }

    return (
        <div className="configMain window">
            <p>Set window color:</p>
            <ChromePicker color={currentColor} onChange={setBkgrndColor} />
        </div>
    )
}

export default Main;