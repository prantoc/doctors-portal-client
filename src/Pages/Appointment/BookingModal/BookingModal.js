import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';

const BookingModal = ({ show, setShow, handleClose, treatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatment; //apppointment options 
    const date = format(selectedDate, 'PP')
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value
        const slot = form.slot.value
        const patientName = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const booking = {
            appointmentDate: date,
            treatment: name,
            slot,
            patientName,
            phone,
            email,
            price
        }

        fetch(`http://localhost:5000/booking-appointment`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setShow(false)
                    successToast('Your booking is confirmed')
                    refetch()
                }
                else {
                    errorToast(data.message)
                }
            })
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Your selected date"
                                autoFocus
                                name='date'
                                defaultValue={date}
                                readOnly
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example" name='slot'>
                                {slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Full name"
                                defaultValue={user?.displayName}
                                autoFocus
                                name='name'
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                defaultValue={user?.email}
                                disabled
                                autoFocus
                                name='email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                autoFocus
                                name='phone'
                            />
                        </Form.Group>
                        <button className='btn btn-dark my-3 py-2 col-12'>Submit</button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookingModal;