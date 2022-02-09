import styled from "styled-components";

export const GreyBackground = styled.div`
	// min-width: 1360px;
	min-width: ${(props) => (props.isMobile ? "100vw" : "1360px")};

	background-color: ${(props) => props.theme.colors.allegroBackground};
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.isMobile ? "left" : "center")};
	// justify-content: center;
	position: relative;
	overflow-x: hidden !important;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	// align-items: center;
	width: ${(props) => (props.isMobile ? "auto" : "1660px")};
	overflow: hidden;
`;
