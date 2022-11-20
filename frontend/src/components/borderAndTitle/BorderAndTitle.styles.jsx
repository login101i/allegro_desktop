import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	width: 100%;
	border-top: 1px solid var(--borderColor);
	justify-content: space-evenly;
	min-width: 260px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const SpanText = styled.span`
	text-transform: uppercase;
	letter-spacing: 1.25px;
	text-align: center;
	padding: 5px;
	color: var(--linkColor);
	cursor: pointer;
	text-align: center;
`;
