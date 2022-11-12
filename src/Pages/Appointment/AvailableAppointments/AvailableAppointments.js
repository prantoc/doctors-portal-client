import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
const AvailableAppointments = ({ selectedDate }) => {
    return (
        <>
            <Container className='my-5'>
                <div className="text-center mb-5">
                    <h3 className='primary-color fw-bold'>Available Appointments on {format(selectedDate, 'PP')}</h3>
                </div>
                <Row>
                </Row>
            </Container>

        </>
    );
};

export default AvailableAppointments;