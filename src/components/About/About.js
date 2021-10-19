import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleAbout from '../SingleAbout/SingleAbout';
import aboutIntro from '../../images/about/about-intro.svg';
import './About.css'
import Review from '../Review/Review';

const About = () => {
    // data for about section 
    const [abouts, setAbouts] = useState([])
    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setAbouts(data.about))
    }, [])

    // data for gallary 
    const [gallaries, setGallaries] = useState([])
    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setGallaries(data.gallary));
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
                        gallaries.map(item => <div key={item.id} className="gallary-image"><img src={item.img} alt="" /></div>)
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
                            <Review />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;