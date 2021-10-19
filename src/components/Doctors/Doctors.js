import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
import doctorIntro from '../../images/doctors/doctor-intro.svg'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./allData.json')
            .then(res => res.json())
            .then(data => setDoctors(data.doctor))
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-fluid p-4" src={doctorIntro} alt="" />
                </Col>
                <Col>
                    <h1 className="title">Why Choose Our Doctors</h1>
                    <p>A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. And a good doctor can help you his best. And you can make you ensure that we provide the best doctor in city. So for better treatment you are welcome <span className="primary-color">Alpha</span>Care.</p>
                </Col>
            </Row>
            <h1 className="title">Take A Look Over Our Doctors</h1>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>
        </Container>
    );
};

export default Doctors;