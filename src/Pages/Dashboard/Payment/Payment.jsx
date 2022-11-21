import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
//#Strip API Key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const { appointmentDate, slot, price, treatment } = booking;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>Payment for <span className='text-primary fw-bold'>{treatment}</span></h3>
            <p>Please pay <span className='fw-bold'>${price}</span> for your appointment on {appointmentDate} at {slot}</p>
            <div className='shadow-lg p-3 my-3 bg-body rounded col-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;