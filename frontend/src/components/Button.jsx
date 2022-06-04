import React from "react";

import styled from "styled-components";

const ButtonContainer = styled.button`
	background-color: ${(props) => (props.background ? props.background : "var(--allegroColor)")};
	color: ${(props) => (props.color ? props.color : "white")}};
	cursor: pointer;
	outline: none;
	text-align: center;
	font-weight: 600;
	letter-spacing: 2px;
	text-transform: uppercase;
	border: ${(props) => (props.outlined ? "1px solid lightGrey" : " none")};
	outline: none;
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	height: 40px;
	line-height: 40px;
	margin: 0;
	overflow: hidden;
	
	width:${(props) => (props.width ? props.width : "auto")};
	border-radius:${(props) => (props.borderRadius ? "20px" : "")};
	font-weight:${(props) => (props.bold ? "900" : "500")};
	display: flex;
	align-items:center;
	justify-content:center;

	&:hover {
		color: ${(props) => props.hovered && "var(--linkColor)"};
		background-color:${(props) => (props.background ? "green" : "blue")}
		transition:0.3s; 
		

	}
`;
const Icon = styled.div`
  width: auto;
`;

const Button = ({
  title,
  background,
  icon,
  children,
  outlined,
  color = "white",
  onClick,
  width = "250px",
  borderRadius,
  style,
  bold,
  hovered,
  height,
  ...rest
}) => {
  return (
    <ButtonContainer
      background={background}
      outlined={outlined}
      color={color}
      onClick={onClick}
      width={width}
      borderRadius={borderRadius}
      style={style}
      bold={bold}
      hovered={hovered}
      height={height}
      {...rest}
    >
      <Icon />
      {title}
      {children}
    </ButtonContainer>
  );
};

export default Button;
