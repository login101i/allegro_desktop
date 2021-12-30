import React from "react";

import styled from "styled-components";

const ButtonContainer = styled.button`
	height: 42px;
	background-color: ${(props) =>
		props.background ? props.background : "var(--allegroColor)"};
	color: ${(props) => (props.color ? props.color : "white")}};
	cursor: pointer;
	outline: none;
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	text-transform: uppercase;
	border: ${(props) => (props.outlined ? "1px solid lightGrey" : " none")};
	outline: none;

	display: flex;
	align-items:center;
	justify-content:center;

	font-family: Open Sans, sans-serif;
	font-size: 14px;
	height: 40 px;
	line-height: 21px;
	line-height: 40px;
	margin: 0;
	overflow: hidden;
	padding: 0px 13px;
	position: relative;
	text-decoration: none;
	text-size-adjust: 100%;
	vertical-align: middle;
	white-space: nowrap;

	width:${(props) => (props.width ? props.width : "auto")};
	border-radius:2px;
`;
const Icon = styled.div``;

const Button = ({
	title,
	background,
	icon,
	children,
	outlined,
	color = "white",
	onClick,
	width = "250px",
	...rest
}) => {
	return (
		<ButtonContainer
			background={background}
			outlined={outlined}
			color={color}
			onClick={onClick}
			width={width}
			{...rest}
		
		>
			<Icon />
			{title}
			{children}
		</ButtonContainer>
	);
};

export default Button;
