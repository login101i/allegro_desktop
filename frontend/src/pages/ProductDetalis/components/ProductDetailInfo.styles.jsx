import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px;
	width: 94%;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

export const Left = styled.div`
	flex: 3;
	width: 100%;
	margin: ${props => (props.isMobile ? '30px' : '0px')};
`;

export const MainImage = styled.img`
	width: ${props => (props.isMobile ? '50vw' : '100%')};
	max-height: 200px;
	object-fit: contain;
	margin-top: 40px;
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
`;
export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: ${props => props.theme.colors.linkColor};
	text-transform: uppercase;
	font-size: 20px;
`;

export const Title = styled.div`
	fontsize: 30px;
	font-weight: 600;
	font-size: 26px;
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
