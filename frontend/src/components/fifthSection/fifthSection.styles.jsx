import styled from 'styled-components';
export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	margin-top: 16px;
	height: 100%;
	background-color: white;
	width: 100%;
	overflow: hidden;
	border: 2px solid green;
`;
export const BackgroundImage = styled.img`
	width: 100%;
	object-fit: contain;
	height: 600px;
`;
export const Image = styled.img`
	width: 100vw;
`;
