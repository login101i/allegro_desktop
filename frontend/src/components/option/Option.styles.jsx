import styled from 'styled-components';

export const OptionContainer = styled.div`
	transition: 0.1s;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	flex: 1;
	text-transform: capitalize;
	background-color: white;
	outline: none;
	border: none;
`;

export const Option = styled.div`
	text-align: center;
	cursor: pointer;
	width: auto;
	color: var(--textColor);
	padding: 10px;
	font-size: ${props => (props.size ? props.size : 'inherit')};
	text-transform: ${props => props.upperCase && 'uppercase'};

	&:hover {
		color: var(--linkColor);
	}
`;
