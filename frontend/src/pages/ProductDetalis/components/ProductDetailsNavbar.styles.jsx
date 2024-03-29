import styled from 'styled-components';
import { Text } from '../../../components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: ${props => (props.isMobile ? '1px' : '20px')};
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
	font-weight: 600;
`;
export const TitleL = styled(Text)`
	font-size: ${props => (props.isMobile ? '18px' : '24px')};
	font-weight: 600;
`;
export const Ratings = styled.div`
	display: flex;
	margin-right: 10px;
	margin-top: 1px;
`;

export const Right = styled.div`
	font-weight: 600;
	flex: 2;
	width:100vw;
`;
export const TitleR = styled.div`
	color: ${props => props.theme.colors.textColor};
`;
export const RightBottom = styled.div`
	color: ${props => props.theme.colors.linkColor};
	margin-top: 10px;
`;
