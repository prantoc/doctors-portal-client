import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointments = ({ selectedDate }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');
    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointment-options', date],
        queryFn: () => fetch(`http://localhost:5000/v2/appointment-options?date=${date}`).then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Container className='my-5'>
                <div className="text-center mb-5">
                    <h3 className='primary-color fw-bold'>Available Appointments on {format(selectedDate, 'PP')}</h3>
                </div>
                <Row>
                    {appointmentOption.map(appointmentOp => <AppointmentOption setTreatment={setTreatment} setShow={setShow} key={appointmentOp._id} appointmentOp={appointmentOp}></AppointmentOption>)}
                </Row>

                {treatment &&
                    <BookingModal
                        setShow={setShow}
                        selectedDate={selectedDate}
                        treatment={treatment}
                        handleClose={handleClose}
                        show={show}
                        refetch={refetch}
                    >

                    </BookingModal>}
            </Container>

        </>
    );
};

export default AvailableAppointments;