import styled from "styled-components";

export const  Container = styled.div`
	display: flex;
	width: 100vw;
	// justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	background-color: white;
	overflow-x: scroll;
	scrollbar-color: rebeccapurple green;
`;

export const  ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin: 2px 10px;
	max-width: 130px;
	height: 160px;
	scrollbar-color: rebeccapurple green;
`;

export const  Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;
