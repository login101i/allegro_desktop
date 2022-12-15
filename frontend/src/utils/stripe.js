import axios from 'axios';

export const createPaymentIntent = authtoken =>
	axios.post(
		`/api/v1/create-payment-intent`,
		{},
		{
			headers: {
				Authorization: 'Bearer ' + authtoken,
			},
		},
	);
