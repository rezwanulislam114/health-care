import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUs.css'
import contactUsImg from '../../images/contact-us/contact-us.svg'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col className="col-12 col-md-7 px-3 mb-4">
                        <img className="img-fluid" src={contactUsImg} alt="" />
                    </Col>
                    <Col className="col-12 col-md-5 px-3">
                        <div className="d-flex align-items-center mb-5">
                            <i class="fas fa-phone-volume fa-5x me-4 primary-color"></i>
                            <div>
                                <h2 className="fs-2 sub-title mt-0">Phone No.</h2>
                                <p className="fs-5 m-0">+880 1785-998429</p>
                                <p className="fs-5 m-0">+880 1852-877996</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <i class="far fa-envelope fa-4x me-4 primary-color"></i>
                            <div>
                                <h2 className="fs-2 sub-title mt-0">Email</h2>
                                <p className="fs-5 m-0">alphacare@info.com</p>
                                <p className="fs-5 m-0">alpha.care@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <i class="fas fa-map-marker-alt fa-5x me-4 primary-color"></i>
                            <div>
                                <h2 className="fs-2 sub-title mt-0">Address</h2>
                                <p className="fs-5 m-0">House No: 46/A, Road: 3</p>
                                <p className="fs-5 m-0">Promy Socity, Uttarkhan, Dhaka</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col className="col-12 col-md-6 mb-4">
                        <h1 className="title mt-0">Get In Touch With Us</h1>
                        <p>Health is most important thing in our life. If we are not fit, we feel everything bosing. We can consentrate over anything. So for enjoy a peaceful life, you must have to need lead a healthy life. And for this we also must do your body in a regular check up. You can contact us any time.</p>
                        <div>
                            <div className="social-link-contact">
                                <Link to="/home"><i class="fab fa-facebook"></i></Link>
                                <Link to="/home"><i class="fab fa-twitter"></i></Link>
                                <Link to="/home"><i class="fab fa-instagram"></i></Link>
                                <Link to="/home"><i class="fab fa-whatsapp"></i></Link>
                                <Link to="/home"><i class="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <Form className="contact-us-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="number" placeholder="Your Phone No." />
                            <p className="mt-4">Write down your problem here</p>
                            <textarea name="" rows="7"></textarea>
                        </Form>
                        <button className="btn-regular mt-3">Submit</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;