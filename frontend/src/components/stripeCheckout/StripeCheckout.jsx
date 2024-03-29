import React, { useState, useEffect, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { createPaymentIntent } from '../../utils/stripe';
import { Link, useNavigate } from 'react-router-dom';
import { getUserCart } from '../../redux/actions/cartActions';
const StripeCheckout = ({ history }) => {
	const { isAuthenticated, user } = useSelector(state => state.auth);

	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');

	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	useEffect(() => {
		createPaymentIntent().then(res => {
			console.log('create payment intent', res.data);
			setClientSecret(res.data.clientSecret);
		});
	}, [user]);

	const [total, setTotal] = useState(0);

	useEffect(() => {
		getUserCart().then(res => {
			setTotal(res.data.cartTotal);
		});
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: e.target.name.value,
				},
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
			setTimeout(() => {
				navigate('/invoice');
			}, 2500);
		} else {
			// here you get result after successful payment
			// create order and save in database for admin to process
			// empty user cart from redux store and local storage
			console.log(JSON.stringify(payload, null, 4));
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};

	const handleChange = async e => {
		// listen for changes in the card element
		// and display any errors as the customer types their card details
		setDisabled(e.empty); // disable pay button if errors
		setError(e.error ? e.error.message : ''); // show error message
	};

	const cartStyle = {
		style: {
			base: {
				color: '#32325d',
				fontFamily: 'Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#32325d',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	};

	return (
		<>
			<p className={succeeded ? 'result-message' : 'result-message hidden'}>
				Payment Successful. <Link to='/user/history'>See it in your purchase history.</Link>
			</p>

			<form id='payment-form' className='stripe-form' onSubmit={handleSubmit}>
				<CardElement id='card-element' options={cartStyle} onChange={handleChange} />
				<button className='stripe-button' disabled={processing || disabled || succeeded}>
					<span id='button-text'>{processing ? <div className='spinner' id='spinner'></div> : 'Pay'}</span>
				</button>
				<br />
				{error && (
					<div className='card-error' role='alert'>
						{error}
					</div>
				)}
			</form>

			<div>{total} zł</div>
		</>
	);
};

export default StripeCheckout;
