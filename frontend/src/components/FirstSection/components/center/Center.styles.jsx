import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;

	flex-grow: grow;
	width: ${(props) => (props.isMobile ? "100vw" : "100%")};
	overflow-y: ${(props) => (props.isMobile ? "hidden" : "none")};
	overflow-x: hidden !important;
`;
export const WrapperOption = styled.div`
	display: flex;
	justify-content: space-between;
	background: white;
	width: 100%;
	height: 15%;
	flex: 1;

	padding-bottom: 10px;
`;

export const Carousel = styled.div`
	display: flex;
	transform: translateX(${(props) => -(props.slideIndex * props.distance)}px);
	height: 100%;
	width: 100%;
	transition: all 1.5s ease-in-out;
`;

export const Slide = styled.div`
	// width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	transition: all 1.5s ease-in-out;
`;

export const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
	width: 100%;
	object-fit: cover;
`;

export const Image = styled.img`
	background-image: ${(props) => props.src};
	background-position: center;
	background-size: cover;
	transform: translateX(-18%);
	object-fit: cover;
`;

export const Container = styled.div`
	width: 100vw;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	max-height: ${(props) => (props.isMobile ? "500px" : "60%")};
	justify-content: space-between;
	margin-bottom: ${(props) => (props.isMobile ? "0px" : "16px")};
	max-width: 100% !important;
	overflow-x: hidden !important;
`;

export const Dot = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background-color: ${(props) =>
		props.i === props.slideIndex ? "black" : "grey"};
	margin: 10px 6px;
`;
