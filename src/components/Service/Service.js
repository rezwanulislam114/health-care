import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { icon, name, description } = props.service;
    return (
        <Col className="service">
            <img src={icon} alt="" />
            <h2 className="sub-title">{name}</h2>
            <p>{description.slice(0, 80)}...</p>
            <button className="btn-regular">Learn More</button>
        </Col>
    );
};

export default Service;