import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DoctorDetails.css'
import doctorDetailsImg from '../../images/doctors/doctor-details.svg'

const DoctorDetails = () => {
    const { id } = useParams();
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setDoctors(data.doctor))
    }, [])
    const doctor = doctors.filter(doctor => doctor.id === parseInt(id));

    return (
        <Container fluid className="doctor-info">
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <img className="doctor-detail-img" src={doctor[0]?.img} alt="" />
                        <h2 className="sub-title mb-0">{doctor[0]?.name}</h2>
                        <p><i>{doctor[0]?.designation}</i></p>
                        <h5>Contact Info.</h5>
                        <h6>Email: <i className="fw-normal">{doctor[0]?.email}</i> <br />Phone: <i className="fw-normal">{doctor[0]?.phone}</i></h6>
                        <button className="btn-regular mt-4">Book A Appointment</button>
                    </Col>
                    <Col>
                        <img className="img-fluid mt-4" src={doctorDetailsImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DoctorDetails;