import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	overflow-y: ${props => (props.isMobile ? 'hidden' : 'none')};
	overflow-x: hidden !important;
	max-width: 925px;
	width: ${props => (props.isMobile ? '100vw' : '')};
`;

export const Container = styled.div`
	display: flex;
	overflow: hidden;
	flex-direction: column;
	height: 58.5%;
	justify-content: space-between;
	margin-bottom: ${props => (props.isMobile ? '0px' : '12px')};
	overflow-x: hidden !important;
	height: ${props => (props.isMobile ? '26%' : '100%')};
	max-height: ${props => (props.isMobile ? '400px' : '60%')};
	background-color: white;
`;

export const Carousel = styled.div`
	display: flex;
	transform: translateX(${props => -(props.slideIndex * props.distance)}px);
	height: 100%;
	width: 100%;
	transition: all 1s ease-in-out;
	height: ${props => (props.isMobile ? '60%' : '100%')};
`;

export const WrapperOption = styled.div`
	display: flex;
	justify-content: space-between;
	background: white;
	flex-direction: column;
	width: 100%;
`;

export const Slide = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const ImgContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const Image = styled.img`
	background-image: ${props => props.src};
	background-position: ${props => props.isMobile && 'center'};
	width: ${props => (props.isMobile ? 'auto' : '100%')};
	height: ${props => (props.isMobile ? '120px' : '100%')};
	object-fit: ${props => (props.isMobile ? 'obtain' : 'cover')};
	animation-name: example;
	animation-duration: ${props => (props.slideIndex ? '10s' : '')};
	animation-iteration-count: infinite;

	@keyframes example {
		0% {
			opacity: 0.2;
		}
		10% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;

export const Dot = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background-color: ${props => (props.i === props.slideIndex ? 'black' : 'grey')};
	margin: 10px 6px;
`;

export const BorderLine = styled.div`
	background-color: var(--allegroColor);
	height: 3px;
	width: 16.67%;
	transform: translateX(${props => props.slideIndex * 100}%);
`;
