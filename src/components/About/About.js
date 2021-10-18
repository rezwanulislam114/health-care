import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import SingleAbout from '../SingleAbout/SingleAbout';
import aboutIntro from '../../images/about/about-intro.svg';
import './About.css'
import reviewBg from '../../images/about/review.png'
import person1 from '../../images/about/person-1.jpg'
import person2 from '../../images/about/person-2.jpg'
import person3 from '../../images/about/person-3.jpg'

const About = () => {
    // data for about section 
    const [abouts, setAbouts] = useState([])
    useEffect(() => {
        fetch('/about.json')
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, [])

    // data for gallary 
    const [gallaries, setGallaries] = useState([])
    useEffect(() => {
        fetch('/gallary.json')
            .then(res => res.json())
            .then(data => setGallaries(data));
    }, [])

    return (
        <div>
            <Container className="mt-5">
                {/* about us section  */}
                <h1 className="title">A Little View What We Do</h1>
                <Row xs={1} md={2} className="d-flex align-items-center mb-5">
                    <Col>
                        <img className="img-fluid p-4" src={aboutIntro} alt="" />
                    </Col>
                    <Col>
                        <Row sx={1} md={2}>
                            {
                                abouts.map(about => <SingleAbout key={about.id} about={about} />)
                            }
                        </Row>
                    </Col>
                </Row>

                {/* image gallary section  */}
                <h1 className="title">Take A Little Idea</h1>
                <div className="gallary my-5">
                    {
                        gallaries.map(item => <div className="gallary-image"><img key={item.id} src={item.img} alt="" /></div>)
                    }
                </div>

                {/* patiant reviews */}
                <div>
                    <Row xs={1} md={2} className="d-flex align-items-center my-5">
                        <Col>
                            <h1 className="title">Thoughts from our best <br /> pacient’s experience</h1>
                            <p>Seeking for verbal of our service quality? Find them here. Everything is transparent and straightforward for your sense of jusitifcation.</p>
                        </Col>
                        <Col>
                            <Carousel variant="dark" className="m-2">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={reviewBg}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="review">
                                        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="text-start">
                                            <img src={person1} alt="" />
                                            <div>
                                                <h3>Macalave Jakes</h3>
                                                <p>Maneger, IFIC Bank</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={reviewBg}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption className="review">
                                        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="text-start">
                                            <img src={person2} alt="" />
                                            <div>
                                                <h3>Jons Harry</h3>
                                                <p>Engineer, Google</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={reviewBg}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className="review">
                                        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="text-start">
                                            <img src={person3} alt="" />
                                            <div>
                                                <h3>Natasha Jarry</h3>
                                                <p>Maneger, XFc Private Company Ltd</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;