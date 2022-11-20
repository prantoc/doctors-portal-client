import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { successToast } from '../../../toast/Toaster';

const CheckoutForm = ({ booking }) => {
    const { patientName, email, price, _id } = booking;
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [paymentData, setPaymentData] = useState();
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }



        //# payment processing 
        setLoading(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            // setLoading(false)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }

            fetch(`http://localhost:5000/payments`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        successToast('Your Payment has been completed successfully!')
                        setPaymentData(paymentIntent.id)
                        setLoading(false)
                    }
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {cardError && <p className='text-danger fw-bold py-3'>{cardError}</p>}
                <button className='btn btn-sm btn-primary mt-3 ' type="submit" disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
            </form>

            {
                paymentData && <p className='py-3'>Your Transaction id <span className='fw-bold text-dark'>#{paymentData}</span></p>
            }
        </>
    );
};

export default CheckoutForm;