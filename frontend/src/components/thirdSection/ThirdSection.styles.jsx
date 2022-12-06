import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 16px;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin: 2px 10px;
	max-width: 130px;
	height: 130px;
	scrollbar-color: green;
	transition: 0.3s ease-in-out;
	padding: 10px 5px;
	&:hover {
		filter: brightness(90%);
	}
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;
