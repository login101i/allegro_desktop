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
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.isMobile ? 'auto' : 'center')};
	justify-content: center;

	max-width: ${props => (props.isMobile ? 'auto' : '1600px')};
`;
