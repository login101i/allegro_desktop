import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	grid-template-columns: ${(props) =>
		props.isMobile ? " repeat(1, 1fr)" : " repeat(3, 1fr)"};

	grid-template-rows: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: auto;
`;

export const LeftContainer = styled.div`
	grid-area: 1 / 1 / 2 / 3;
	padding: 20px;
	background-color: white;
`;

export const Left1 = styled.div`
	background-color: white;
	background-color: white;
	padding: 0px 20px;
`;

export const Left2 = styled.div`
	background-color: white;
	padding: 0px 20px;
`;

export const RightContainer = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	background-color: white;

	height: auto;
`;
export const Right1 = styled.div`
	grid-area: 1 / 2 / 3 / 3;
	background-color: white;
	flex-grow: 1;
	padding: 20px;
	grid-area: 1 / 2 / 2 / 3;
`;
