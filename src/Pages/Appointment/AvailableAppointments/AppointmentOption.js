import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOp }) => {
    const { name, slots } = appointmentOp
    return (
        <>
            <Col md={4} sm={12} className="mb-3">
                <Card className='text-center shadow mb-5 bg-body rounded border-0'>
                    <Card.Body>
                        <Card.Title className="mb-3 primary-color">{name}</Card.Title>
                        <Card.Subtitle className="mb-3">{slots.length > 0 ? slots[0] : 'try another day'}</Card.Subtitle>
                        <Card.Text>
                            {slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE
                        </Card.Text>
                        <PrimaryButton>Book Appointment</PrimaryButton>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default AppointmentOption;