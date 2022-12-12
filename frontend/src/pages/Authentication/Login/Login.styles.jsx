import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-columns: ${props => (props.isMobile ? ' repeat(1, 1fr)' : ' repeat(3, 1fr)')};
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 16px;
	height: auto;
	width: 100%;
`;

export const LeftContainer = styled.div`
	grid-area: 1 /1 / 2 / 3;
	padding: 20px;
	background-color: white;
	max-width: 800px;
`;

export const RightContainer = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	background-color: white;
	height: auto;
`;



