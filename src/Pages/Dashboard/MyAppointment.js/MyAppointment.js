import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking-appointments', user?.email],
        queryFn: () => fetch(`https://doctors-portal-server-theta.vercel.app/booking-appointments?email=${user?.email}`, {
            headers: {
                authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
            }
        }).then(res => res.json())
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

                            <th>#</th>
                            <th>Appointment Date</th>
                            <th>Treatment</th>
                            <th>Patient Details</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings && bookings?.map((booking, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{booking.appointmentDate} <br /> ({booking.slot})</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.patientName} <br />{booking.email} <br />{booking.phone}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><Button className='btn btn-sm' variant='primary'>Pay</Button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-success fw-bold'>Paid</span>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

        </>
    );
};

export default MyAppointment;