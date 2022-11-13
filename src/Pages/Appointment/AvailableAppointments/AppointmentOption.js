import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AppointmentOption = ({ appointmentOp, setShow, setTreatment }) => {
    const handleShow = () => setShow(true);
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
                        <button onClick={() => { setTreatment(appointmentOp); handleShow(); }} disabled={slots.length === 0} className={`${slots.length === 0 ? 'btn btn-secondary disabled py-2 px-5 mb-4' : 'cs-btn-1 mb-3'}`}>Book Appointment</button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default AppointmentOption;