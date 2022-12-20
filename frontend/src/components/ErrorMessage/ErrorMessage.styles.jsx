import styled from 'styled-components';

export const ErrorContainer = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	padding: 20px;
	width: 100vw;
	height: 60px;
	background-color: ${props => props.theme.colors.allegroColor};
	color: white;
	font-size: 16px;
	font-weight: 800;
	transition: 0.6s all ease-in-out;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index:99999;
`;

export const ErrorCloseButton = styled.div`
	font-weight: 800;
	font-size: 20px;
	line-height: 15px;
	margin-left: 15px;
	cursor: pointer;
	transition: var(--transition);

	&:hover {
		transform: rotate(90deg);
	}
`;
