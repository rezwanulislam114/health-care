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

            {/* overview section  */}
            <Container fluid className="overview mt-5">
                <Container className="d-flex flex-column flex-md-row text-white justify-content-evenly">
                    <div className="text-center">
                        <h1>22</h1>
                        <h5>Health Section</h5>
                    </div>
                    <div className="text-center">
                        <h1>146</h1>
                        <h5>Different Services</h5>
                    </div>
                    <div className="text-center">
                        <h1>1476</h1>
                        <h5>Successful Surgery</h5>
                    </div>
                    <div className="text-center">
                        <h1>12883</h1>
                        <h5>Satisfied Patienst</h5>
                    </div>
                </Container>
            </Container>

            {/* basic info section  */}
            <Container>
                <Row className="basic-info my-5" xs={1} lg={3}>
                    <Col className="info-1 py-2 px-4">
                        <i className="fas fa-phone-volume"></i>
                        <h2 className="sub-title mb-2">Emergency Cases</h2>
                        <p>If you are in emergency, AlphaCare is alawys with you. Here you can get 24/7 hours service. We are alawys try our best to searve you.</p>
                        <h1>+880 1785-998429</h1>
                    </Col>
                    <Col className="info-2 py-2 px-4">
                        <i className="far fa-calendar-alt"></i>
                        <h2 className="sub-title mb-2">Doctors Timetable</h2>
                        <p>To get your favourit doctors appoinment, you need to connect your doctors assistant, he or she will help you to book a appoinment as your wish list.</p>
                        <h1>+880 1852-877996</h1>
                    </Col>
                    <Col className="info-3 py-2 px-4">
                        <i className="far fa-clock"></i>
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

            {/* subscribe section  */}
            <Container className="mt-5">
                <h1 className="fs-1 sub-title text-center">Subscribe Our Newslatter</h1>
                <input className="subscibe-input" type="email" placeholder="Write Down Your Email" />
            </Container>


        </div>
    );
};

export default Home;