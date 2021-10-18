import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleAbout from '../SingleAbout/SingleAbout';
import aboutIntro from '../../images/about/about-intro.svg';

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
                <Row xs={1} md={2} className="d-flex align-items-center">
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
                <div>
                    {
                        gallaries.map(item => <img key={item.id} src={item.img} alt="" />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default About;