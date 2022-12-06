import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	overflow: hidden;
	padding: 20px 10px;
	margin-top: ${props => props.isMobile && '16px'};
`;

export const Title = styled.div`
	font-weight: 600;
	text-align: center;
	font-size: 20px;
	margin-bottom: 30px;
`;

export const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	margin: 15px 0px;
`;
export const ImageContainer = styled.div`
	min-width: 40%;
	max-height: 120px;
`;
export const Image = styled.img`
	max-height: 125px;
	width: 100%;
	object-fit: contain;
	cursor: pointer;
`;

export const SectionInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Description = styled.div`
	text-decoration: uppercase;
	font-size: 14px;
	color: grey;
	flex-wrap: wrap;
`;
