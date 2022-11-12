import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand to="/">Doctors Portal</Navbar.Brand>
                    <Nav className="text-end">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;