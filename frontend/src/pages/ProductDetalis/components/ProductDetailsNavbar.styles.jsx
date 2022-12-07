import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 20px;
	width: 94%;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	border-bottom: 1px solid lightGrey;
`;

export const Left = styled.div`
	flex: 3;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
`;
export const TitleL = styled.div`
	fontsize: 30px;
	font-weight: 600;
	font-size: 24px;
`;
export const Ratings = styled.div`
	display: flex;
	margin-right: 10px;
	margin-top: 1px;
`;

export const Right = styled.div`
	font-weight: 600;
	flex: 2;
`;
export const TitleR = styled.div`
	text-transform: uppercase;
	color: ${props => props.theme.colors.textColor};
`;
export const RightBottom = styled.div`
	color: ${props => props.theme.colors.linkColor};
	margin-top: 10px;
`;
