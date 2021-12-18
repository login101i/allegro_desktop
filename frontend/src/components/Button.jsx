import React from "react";

import styled from "styled-components";

const ButtonContainer = styled.button`
	height: 42px;
	background: var(--allegroColor);
	color: white;
	cursor: pointer;
	outline: none;
	color: white;
	text-align: center;
	font-weight: 500;
	letter-spacing: 2px;
	text-transform: uppercase;
	line-height: 44px;
	padding: 0 13px;
	border: none;
	outline: none;
`;

const Button = ({ title }) => {
	return <ButtonContainer>{title}</ButtonContainer>;
};

export default Button;
{
}
