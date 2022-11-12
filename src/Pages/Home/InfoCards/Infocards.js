import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import clock from '../../../assets/imgs/icons/clock.svg'
import location from '../../../assets/imgs/icons/marker.svg'
import phone from '../../../assets/imgs/icons/phone.svg'
const Infocards = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={4} sm={12} className="mb-3">
                        <Card className="clock-card">
                            <Card.Body>
                                <Row>
                                    <Col lg={3} md={12} sm={3} className="my-auto mb-3">
                                        <img src={clock} alt="" className='img-fluid' />
                                    </Col>
                                    <Col lg={9} md={12} sm={9}>
                                        <Card.Subtitle className="mb-3">Opening Hours</Card.Subtitle>
                                        <Card.Text>
                                            Lorem Ipsum is simply dummy text of the pri
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12} className="mb-3">
                        <Card className="location-card">
                            <Card.Body>
                                <Row>
                                    <Col lg={3} md={12} sm={3} className="my-auto mb-3">
                                        <img src={location} alt="" className='img-fluid' />
                                    </Col>
                                    <Col lg={9} md={12} sm={9}>
                                        <Card.Subtitle className="mb-3">Visit our location</Card.Subtitle>
                                        <Card.Text>
                                            Brooklyn, NY 10036, United States
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12} className="mb-3">
                        <Card className="clock-card">
                            <Card.Body>
                                <Row>
                                    <Col lg={3} md={12} sm={3} className="my-auto mb-3">
                                        <img src={phone} alt="" className='img-fluid' />
                                    </Col>
                                    <Col lg={9} md={12} sm={9}>
                                        <Card.Subtitle className="mb-3">Contact us now</Card.Subtitle>
                                        <Card.Text>
                                            +000 123 456789
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Infocards;