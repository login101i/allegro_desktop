import styled from "styled-components";


export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	width: 94%;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
	border-bottom: 1px solid lightGrey;
`;

export const Left = styled.div`
	flex: 3;
	justify-content: center;
`;
export const TitleL = styled.div`
	fontsize: 30px;
	font-weight: 600;
	font-size: 26px;
`;
export const Ratings = styled.div`
	display: flex;
`;

export const Right = styled.div`
	font-weight: 600;
	flex: 2;
`;
export const TitleR = styled.div`
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.textColor};
`;
export const RightBottom = styled.div`
	color: ${(props) => props.theme.colors.linkColor};
	margin-top: 10px;
`;