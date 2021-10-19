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
                        <img className="img-fluid p-3" src={aboutIntro} alt="" />
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
                                        <p className="text-start">Hay, Im Macalave Jakes. Recently I startded to take secvire from this health care. and Im satisfied for their services and their hospitality. You can also try once time.</p>
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
                                        <p className="text-start">One day, i was suffering from a rare desisses. then I go for many hospital. But no doctor could made me cure. then one of my friend said to me about AlphaCare. and now im fine. so, i hope you can easily understand what i want to say.</p>
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
                                        <p className="text-start">Hay, hope you are all fine. My aunty was just reliesed from this hospital, and honestly saying that we are fully satisfied, Here the doctors are also up to mark. So its a suggestion from me to go their for any health issue.</p>
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