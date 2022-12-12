import styled from 'styled-components';

export const Image = styled.div`
	transform: scale(1.15);
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${props => (props.isMobile ? 'center' : 'center')};
	background-color: white;
	min-width: 230px;
`;
