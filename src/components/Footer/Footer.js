import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="bg-light border-top pt-4">
            <Container>
                <Row>
                    <Col className="col-md-4 col-12">
                        <div className="d-flex align-items-center mb-3 mt-4">
                            <img src={logo} className="logo" alt="" />
                            <h2><span className="primary-color">Alpha</span>Care</h2>
                        </div>
                        <p>This medical is made for doing something better. We all are alawys trying to doing better day by day. and we think that we can do that. Take care of your self. Stay healthy and live a better life.</p>
                    </Col>
                    <Col className="col-md-6 col-12">
                        <div className="d-flex flex-column flex-md-row">
                            <div className="mt-4 me-4">
                                <h4>Call in emergency</h4>
                                <p className="m-0">+880 1785-998429</p>
                                <p className="m-0">+880 1852-877996</p>
                            </div>
                            <div className="mt-4">
                                <h4>Address</h4>
                                <p className="m-0">House: 46/A, Road: 3</p>
                                <p className="m-0">Promy Socity, Uttarkhan, Dhaka</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3>Find Us On Social Media</h3>
                            <div className="social-link">
                                <Link to="/home"><i class="fab fa-facebook"></i></Link>
                                <Link to="/home"><i class="fab fa-twitter"></i></Link>
                                <Link to="/home"><i class="fab fa-instagram"></i></Link>
                                <Link to="/home"><i class="fab fa-whatsapp"></i></Link>
                                <Link to="/home"><i class="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-md-2 col-12">
                        <div className="quick-link d-flex flex-row flex-lg-column mt-4">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </Col>
                </Row>
                <p className="text-center mt-5">Copyright @ AlphaCare 2021</p>
            </Container>
        </Container>
    );
};

export default Footer;