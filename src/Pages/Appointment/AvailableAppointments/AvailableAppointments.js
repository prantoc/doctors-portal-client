import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([])
    useEffect(() => {
        fetch(`appointmentData.json`)
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <>
            <Container className='my-5'>
                <div className="text-center mb-5">
                    <h3 className='primary-color fw-bold'>Available Appointments on {format(selectedDate, 'PP')}</h3>
                </div>
                <Row>
                    {appointmentOption.map(appointmentOp => <AppointmentOption key={appointmentOp._id} appointmentOp={appointmentOp}></AppointmentOption>)}
                </Row>
            </Container>

        </>
    );
};

export default AvailableAppointments;