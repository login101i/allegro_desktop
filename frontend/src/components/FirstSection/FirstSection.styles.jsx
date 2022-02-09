import styled from "styled-components";

export const MainContainer = styled.div`
	width: 1660px;
	display: grid;
	grid-template-columns: 292px 16px minmax(0, 985px) 16px 292px;
	height: auto;
	margin-top: ${(props) => (props.isMobile ? "0px" : "16px")};
	display: flex;
`;
export const Space = styled.div`
	width: 20px;
`;

