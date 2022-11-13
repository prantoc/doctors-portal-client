import { format } from 'date-fns';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';

const BookingModal = ({ show, handleClose, treatment, selectedDate }) => {
    const { name, slots } = treatment; //apppointment options 
    const date = format(selectedDate, 'PP')
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                            <Form.Select aria-label="Default select example">
                                {slots?.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Full name"
                                autoFocus
                                name='name'
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoFocus
                                name='email'
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