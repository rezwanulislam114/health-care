import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, img, phone } = props.doctor;
    return (
        <div className="doctor">
            <img className="doctor-img" src={img} alt="" />
            <h3 className="sub-title">{name}</h3>
            <p>{phone}</p>
        </div>
    );
};

export default Doctor;