import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand to="/">Doctors Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/appointment">
                                <Nav.Link>Appointment</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/reviews">
                                <Nav.Link>Reviews</Nav.Link>
                            </LinkContainer>

                            {user?.uid ?
                                <>
                                    <Nav.Link className='fw-bold'>{user.displayName}</Nav.Link>
                                    <Nav.Link onClick={handleLogOut} className="text-dark fw-bold" role='button'>Sign out</Nav.Link>
                                </>
                                :
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;