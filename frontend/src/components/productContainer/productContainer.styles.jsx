import styled from 'styled-components';

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	height: 90%;
	justify-content: flex-start;
	min-width: 220px;
	max-width: ${props => props.isMobile && '200px'};
	align-items: center;
	width: 100%;
`;

export const SectionListingContainer = styled(SectionContainer)`
	border-bottom: 1px solid lightGrey;
`;

export const ImageContainer = styled.div`
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 85%;
	height: ${props => (props.height ? props.height : '10px')};
	min-height: ${props => (props.isMobile ? '60px' : '100px')};
`;

export const ImageListingsContainer = styled(ImageContainer)`
	width: 25%;
	cursor:pointer,
	&:hover {
		filter: brightness(90%);
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	cursor: pointer;
	height: ${props => (props.isMobile ? '120px' : '180px')};
	height: ${props => (props.imageSize ? props.imageSize : '180px')};
`;
