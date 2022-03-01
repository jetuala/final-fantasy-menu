import React from "react";
import "./Location.css";

const locationList = ['Baron Castle', 'Macalania Woods', 'Jeuno', 'Limsa Lominsa', 'Gridania', 'Lindblum', 'Nibelheim', 'Balamb Garden', 'Costa del Sol', 'Narshe', 'Zanarkand', 'Bhujerba', 'Sylph Cave', 'Cornelia', 'Sector 7 Slums'];

const Location = () => {
    return (
        <div className="Location window">
            <div className="locationtext">{locationList[Math.floor(Math.random() * locationList.length)]}</div>
        </div>
    )
}

export default Location;