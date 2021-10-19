import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { id } = useParams()
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    const filterService = services.filter(service => service.id === parseInt(id));

    return (
        <Container>
            <div className="service-details">
                <div>
                    <img src={filterService[0]?.icon} alt="" />
                    <h2 className="sub-title">{filterService[0]?.name}</h2>
                    <p>{filterService[0]?.description}</p>
                    <button className="btn-regular">Book A Appointment</button>
                </div>
                <img className="service-details-img" src={filterService[0]?.img} alt="" />
            </div>
        </Container>
    );
};

export default ServiceDetails;