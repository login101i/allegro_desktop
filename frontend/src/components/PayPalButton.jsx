import React from "react";
import styled from "styled-components";

import PayPalLogo from "../assets/pictures/PayPalLogo.png";

const Button = styled.button`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.colors.lightBlue};
	width: 176px;
	height: 64px;
	padding: 7px 4px 8px 12px;
	border: none;
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
	position: fixed;
	top: 33vh;
	right: -110px;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	color: white;
	font-size: 14px;
	z-index: 10000;

	&:hover {
		right: 0px;
	}
`;

const Logo = styled.img`
	height: 45px;
	width: 45px;
	margin-right: 12px;
`;
const Container = styled.div`
	top: 33vh;
	right: ${(props) => (props.showPayPal ? "-110px" : "-10px")};
	// visibility: ${(props) => (props.showPayPal ? "visible" : "hidden")};
	transition: 0.6s ease-in-out;
`;

const PayPalButton = ({ showPayPal }) => {
	console.log(showPayPal);
	return (
		<Container showPayPal={showPayPal}>
			<Button>
				<Logo src={PayPalLogo} />
				Zapłać za 30 dni
			</Button>
		</Container>
	);
};

export default PayPalButton;
