import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const { id, icon, name, description } = props.service;
    const history = useHistory()

    return (
        <Col className="service">
            <img src={icon} alt="" />
            <h2 className="sub-title">{name}</h2>
            <p>{description.slice(0, 80)}...</p>
            <button onClick={() => history.push(`servicedetails/${id}`)} className="btn-regular">Learn More</button>
        </Col>
    );
};

export default Service;