import styled from 'styled-components';

export const Button = styled.div`
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.colors.lightBlue};
	width: 176px;
	height: 64px;
	padding: 7px 4px 8px 12px;
	border: none;
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
	right: -110px;
	cursor: pointer;
	color: white;
	font-size: 14px;
	transition: 0.6s ease-in-out;
`;

export const Logo = styled.img`
	height: 45px;
	width: 45px;
	margin-right: 12px;
	cursor: pointer;
`;
export const Container = styled.div`
	position: fixed;
	top: 32vh;
	z-index: 999;

	right: ${props => (props.payPalMove ? '0px' : '-115px')};
	visibility: ${props => (props.isPaypalShow ? 'visible' : 'hidden')};
	transition: 0.6s ease-in-out;
`;

export const PayPalText = styled.div`
	cursor: pointer;
`;
