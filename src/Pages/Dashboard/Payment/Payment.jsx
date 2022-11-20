import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(process.env.REACT_APP_Strip_Public);
console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData();
    const { _id, appointmentDate, slot, price, treatment } = booking;
    return (
        <div>
            <h3>Payment for <span className='text-primary fw-bold'>{treatment}</span></h3>
            <p>Please pay <span className='fw-bold'>${price}</span> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;