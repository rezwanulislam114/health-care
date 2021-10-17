import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../images/banner/banner-img.svg'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row xs={1} md={2}>
                    <Col className="d-flex justify-content-center flex-column">
                        <h1>Find a Doctor & <br /> Book Appointment</h1>
                        <p>Since the first days of operation of Medify, our teaming has been focused on building a high-qualities medicals service by AlphaCare.</p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;