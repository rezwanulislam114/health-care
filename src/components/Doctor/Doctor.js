import React from 'react';
import { useHistory } from 'react-router';
import './Doctor.css'

const Doctor = (props) => {
    const { id, name, img, designation } = props.doctor;
    const history = useHistory();

    return (
        <div className="doctor">
            <img className="doctor-img" src={img} alt="" />
            <h3 className="sub-title mb-0">{name}</h3>
            <p><i>{designation}</i></p>
            <button onClick={() => history.push(`/doctordetails/${id}`)} className="btn-regular">See Details</button>
        </div>
    );
};

export default Doctor;