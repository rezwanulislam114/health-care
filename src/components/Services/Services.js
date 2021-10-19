import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./allData.json')
            .then(res => res.json())
            .then(data => setServices(data.services));
    }, [])
    return (
        <Container>
            <h1 className="title">Services We Provide</h1>
            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </Container>
    );
};

export default Services;