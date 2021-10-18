import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        borderBottom: '4px solid #006ba6',
        color: '#006ba6'
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <div className="d-flex align-items-center">
                            <img className="logo" src={logo} alt="" /><span className="primary-color fw-bold">Alpha</span>Care
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-link me-auto">
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <div className="d-flex align-items-center">
                                        <p className="me-4 m-0">{user.displayName}</p>
                                        <button onClick={logOut} className="btn-regular m-0">Sign Out</button>
                                    </div> :
                                    <div className="d-flex align-items-center">
                                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to="/login"> <button className="btn-regular m-0">Login</button> </Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;