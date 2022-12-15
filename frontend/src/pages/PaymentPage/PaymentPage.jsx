import { useEffect, useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckout from '../../components/stripeCheckout/StripeCheckout';
import './stripe.css';
import { Wrapper } from './PaymentPage.styles';
import { Text } from '../../components';
import { colors, theme } from '../../infrastructure/theme';
import { CartContext } from '../../context/cart.context';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../components/responsive';

export const PaymentPage = () => {
	const { cart, dispatch } = useContext(CartContext);
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const promise = loadStripe('stripe_public_key');

	return (
		<Wrapper>
			<div className='container p-5 text-center'>
				<h4>Complete your purchase</h4>
				<Elements stripe={promise}>
					<div className='col-md-8 offset-md-2'>
						<StripeCheckout />
					</div>
				</Elements>
			</div>
		</Wrapper>
	);
};
