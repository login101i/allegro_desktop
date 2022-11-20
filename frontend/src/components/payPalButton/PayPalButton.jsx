import { Link } from 'react-router-dom';

import PayPalLogo from '../../assets/pictures/PayPalLogo.png';

const PayPalButton = ({ isPaypalShow, handlePayPalMove, payPalMove }) => {
	return (
		<Container isPaypalShow={isPaypalShow} payPalMove={payPalMove}>
			<Button onClick={handlePayPalMove}>
				<Logo src={PayPalLogo} />
				<Link to='/login'>
					<PayPalText>Zapłać za 30 dni</PayPalText>
				</Link>
			</Button>
		</Container>
	);
};

export default PayPalButton;
