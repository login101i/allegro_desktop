import styled from 'styled-components';

export const GreyBackground = styled.div`
	min-width: ${props => (props.isMobile ? '100vw' : '1360px')};
	background-color: ${props => props.theme.colors.allegroBackground};
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.isMobile ? 'left' : 'center')};
	justify-content: flex-start;
	position: relative;
	overflow: hidden !important;
	z-index: 999999;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.isMobile ? 'auto' : 'center')};
	justify-content: center;
	min-height: calc(100vh - 152px);
	max-width: ${props => (props.isMobile ? 'auto' : '1600px')};
`;

export const GreyFilter = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 9999999;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(220, 220, 220, 0.5);
	overflow: hidden;
`;
