import styled from 'styled-components'

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	height: 100%;
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
	padding-bottom: 10px;
	max-height: 230px;
`;

export const ImageListingsContainer = styled(ImageContainer)`
	width: 25%;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	cursor: pointer;
	max-height: 250px;
`;
