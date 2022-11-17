import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const { data: bookingAppointments = [], isLoading } = useQuery({
        queryKey: ['booking-appointments', user?.email],
        queryFn: () => fetch(`http://localhost:5000/booking-appointments?email=${user?.email}`).then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h3>My Appointments</h3>
            <div className='shadow-lg p-3 my-3 bg-body rounded'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Treatment</th>
                            <th>Patient Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingAppointments.map((booking, i) =>
                            <tr key={i}>
                                <td>{booking.appointmentDate} <br /> ({booking.slot})</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.patientName} <br />{booking.email} <br />{booking.phone}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

        </>
    );
};

export default MyAppointment;