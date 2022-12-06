import styled from 'styled-components';

export const ItemsContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0px 2px;
	transition: all 0.5s ease-in-out;
	transform: translateX(${props => props.slideIndex * -450}px);
	white-space: nowrap;
	height: 200px;
	scrollbar-color: green;
	overflow-x: hidden;
`;
