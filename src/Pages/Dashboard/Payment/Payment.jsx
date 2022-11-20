import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_Strip_PK);
console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, slot, price, treatment } = booking;
    return (
        <div>
            <h3>Payment for <span className='text-primary fw-bold'>{treatment}</span></h3>
            <p>Please pay <span className='fw-bold'>${price}</span> for your appointment on {appointmentDate} at {slot}</p>
            <div className='shadow-lg p-3 my-3 bg-body rounded col-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;