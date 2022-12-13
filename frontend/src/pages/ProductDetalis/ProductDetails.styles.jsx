import styled from 'styled-components';

export const Container = styled.div`
	margin: ${props => (props.isMobile ? '10px' : ' 20px 0px 100px 40px')};
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: white;
	padding: ${props => (props.isMobile ? '10px' : ' 40px')};
	margin-bottom: 60px;
	background-color: white;
	max-width: ${props => (props.isMobile ? '95vw' : '1100px')};
	overflow: hidden;
	margin-bottom: ${props => (props.isMobile ? '75px' : '90px')};
	min-height: 500px;
	width:1000px;
	background-color: white;
`;

export const Space = styled.div`
	height: 20px;
	background-color: ${props => props.theme.colors.allegroBackground};
	border: 2px solid green;
`;
