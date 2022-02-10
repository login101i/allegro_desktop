import styled from "styled-components";
export const Container = styled.div`


	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	position: relative;
	// height: 700px;
	background-color: white;
	width: 100%;
	position: relative;
	overflow: hidden;
`;
export const BackgroundImage = styled.img`
	width: 100%;
	object-fit: contain;
	position: absolute;
	top: -180px;
	left: 0;
	right: 0;
	height: 600px;
`;
export const Image = styled.img`
	width: 100vw;
`;
