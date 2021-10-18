import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />

            <Container>
                <Row className="basic-info my-5" xs={1} lg={3}>
                    <Col className="info-1 py-2 px-4">
                        <i class="fas fa-phone-volume"></i>
                        <h2 className="sub-title mb-2">Emergency Cases</h2>
                        <p>If you are in emergency, AlphaCare is alawys with you. Here you can get 24/7 hours service. We are alawys try our best to searve you.</p>
                        <h1>+8801785998429</h1>
                    </Col>
                    <Col className="info-2 py-2 px-4">
                        <i class="far fa-calendar-alt"></i>
                        <h2 className="sub-title mb-2">Doctors Timetable</h2>
                        <p>To get your favourit doctors appoinment, you need to connect your doctors assistant, he or she will help you to book a appoinment as your wish list.</p>
                        <h1>+8801785998429</h1>
                    </Col>
                    <Col className="info-3 py-2 px-4">
                        <i class="far fa-clock"></i>
                        <h2 className="sub-title mb-4">Opening Hours</h2>
                        <div className="d-flex justify-content-between mt-3 border-bottom">
                            <h5>Sunday - Thursday</h5>
                            <h5>8:00 am - 10:00 pm</h5>
                        </div>
                        <div className="d-flex justify-content-between mt-3 border-bottom">
                            <h5>Friday</h5>
                            <h5>10:00 am - 5:00 pm</h5>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h5>Saturday</h5>
                            <h5>10:00 am - 8:00 pm</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;