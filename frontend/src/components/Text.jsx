import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
	font-size: 16px;
	font-size: ${(props) => props.size}px;
	margin-top: ${(props) => props.marginTop}px;

	font-family: Roboto, sans-serif;
	text-align left;
	color: ${(props) => (props.color ? props.color : props.theme.colors.textColor)};
	display: flex;

	font-weight: ${(props) => (props.bold ? "600" : "500")};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding:10px;

	border-bottom: ${(props) => props.borderBottom && "1px solid lightGrey"};
	padding: ${(props) => props.borderBottom && "8px"};
	border-width:100%;

	white-space: nowrap;
	width: 100%;
	    text-transform: capitalize;

		
	&:hover {
		color: ${(props) => props.hovered && "var(--linkColor)"};
		cursor:pointer;
	
	}

		
	
`;

const SubTitle = styled.div`
	font-size: 13px;
	color: darkGrey;
	display: flex;
	flex-wrap: wrap;
	white-space: wrap;
`;

export const Text = ({
	title,
	size,
	marginTop = 0,
	bold = false,
	children,
	subTitle = "",
	color,
	borderBottom,
	hovered,
	onClick
}) => {
	return (
		<TextContainer
			size={size}
			marginTop={marginTop}
			bold={bold}
			color={color}
			borderBottom={borderBottom}
			hovered={hovered}
			onClick={onClick}
		>
			{title} {children}
			{subTitle && <SubTitle>{subTitle}</SubTitle>}
		</TextContainer>
	);
};
