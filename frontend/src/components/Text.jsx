import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
	font-size: 36;
	font-size: ${(props) => props.size}px;
	margin-top: ${(props) => props.marginTop}px;
	width: 100%;
	font-family: Roboto, sans-serif;
	align-text: left;
	color: ${(props) => props.theme.colors.textColor};
	display: flex;
	align-items: center;
	font-weight: ${(props) => (props.bold ? "600" : "500")};
`;

export const Text = ({ title, size = 14, marginTop = 0, bold = false }) => {
	return (
		<TextContainer size={size} marginTop={marginTop} bold={bold}>
			{title}
		</TextContainer>
	);
};
