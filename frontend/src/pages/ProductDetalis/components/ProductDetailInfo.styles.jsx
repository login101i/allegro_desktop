import styled from 'styled-components';
import { theme } from '../../../infrastructure/theme';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px;
	width: 94%;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

export const Left = styled.div`
	flex: 3;
	width: 90vw;
	margin: ${props => (props.isMobile ? '30px' : '0px')};
`;

export const MainImage = styled.img`
	width: ${props => (props.isMobile ? '100px' : '100%')};
	height: ${props => (props.isMobile ? '100px' : '400px')};
	object-fit: contain;
	margin-top: 10px;
	background-color: white;
`;
export const ImagesThumbnails = styled.div`
	width: 100%;
	margin-top: 30px;
`;

export const ImageThumb = styled.img`
	height: 80px;
	object-fit: contain;
`;

export const Right = styled.div`
	flex: 2;
	margin-bottom: 16px;
`;
export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${props => props.theme.colors.linkColor};
	text-transform: uppercase;
	font-size: 20px;
	margin-top: 14px;
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 26px;
	white-space: wrap;
`;
export const FromSeller = styled.div`
	margin-bottom: 20px;
`;

export const Raty = styled.div`
	font-size: 14px;
	font-weight: 600;
	display: flex;
	flex-direction: row;
`;

export const GalleryContainer = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	width: 100vw;
	height: 100vh;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: ${props => props.theme.colors.backgroundColorFaded};
	overflow: scroll;
	position: relative;
`;

export const CloseButtonContainer = styled.div`
	position: absolute;
	top: 20px;
	left: 10px;
	color: #d3d3d3;
	z-index: 1112;
`;
export const GalleryLengthIndicator = styled.div`
	position: fixed;
	bottom: 60px;
	left: 20px;

	background-color: ${props => props.theme.colors.darkGrey};
	color: #d3d3d3;
`;

export const GalleryWrapper = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	width: 100vw;
	height: 100vh;
	z-index: 1111;
`;
