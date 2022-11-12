import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const AvailableAppointments = ({ selectedDate }) => {
    return (
        <>
            <Container className='my-5'>
                <div className="text-center mb-5">
                    <h3 className='primary-color fw-bold'>Available Appointments on {format(selectedDate, 'PP')}</h3>
                </div>
                <Row>
                    <Col md={4} sm={12} className="mb-3">
                        <Card className='text-center shadow mb-5 bg-body rounded border-0' style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3 primary-color">Teeth Orthodontics</Card.Title>
                                <Card.Subtitle className="mb-3">8:00 AM - 9:00 AM</Card.Subtitle>
                                <Card.Text>
                                    10 SPACES AVAILABLE
                                </Card.Text>
                                <PrimaryButton>Book Appointment</PrimaryButton>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default AvailableAppointments;