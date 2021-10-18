import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFoundImg from '../../images/not-found.svg'

const NotFound = () => {
    const history = useHistory();
    return (
        <Container>
            <img className="w-50 d-block mx-auto" src={notFoundImg} alt="" />
            <h1 className="text-center mt-5">Page Not Found.</h1>
            <button onClick={() => history.push("/home")} className="btn-regular mx-auto d-block mt-5">Back to Home</button>
        </Container>
    );
};

export default NotFound;