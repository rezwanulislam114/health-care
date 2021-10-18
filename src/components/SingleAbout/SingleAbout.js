import React from 'react';
import './SingleAbout.css'

const SingleAbout = (props) => {
    const { icon, name, description } = props.about;
    return (
        <div className="singleAbout p-4">
            <img className="about-icon" src={icon} alt="" />
            <h2 className="sub-title">{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SingleAbout;