import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px 0px 100px 40px;
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 80%;
	background-color: white;
	padding: 40px 30px;
	background-color: white;
	min-height: 760px;
	width: 1200px;
`;

export const Space = styled.div`
	height: 20px;
	background-color: ${props => props.theme.colors.allegroBackground};
`;
