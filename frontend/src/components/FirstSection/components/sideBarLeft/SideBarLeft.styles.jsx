import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  flex:1
  min-width: 244px;
  height:603px;
  padding:8px 24px 0px 24px;
    background-color:white;
    max-width:300px;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid var(--borderColor);
	justify-content: space-evenly;
	margin-bottom: 10px;
`;
export const HeaderLeft = styled.div`
	cursor: pointer;
	width: 40%;
	display: flex;
	align-items: center;
	border-bottom: ${(props) =>
		props.head ? "3px solid #ff5a00" : "3px solid grey"};

	&:hover {
		color: green;
	}
`;
export const SpanText = styled.span`
	text-transform: uppercase;
	letter-spacing: 1.25px;
	text-align: center;
	width: 100%;
	padding: 10px 5px;
	color: ${(props) =>
		(props.benefits && " #ff5a00") || (props.head && " #ff5a00")};
`;

export const HeaderRight = styled.div`
	cursor: pointer;
	width: 40%;
	display: flex;
	align-items: center;
	border-bottom: ${(props) =>
		props.benefits ? "3px solid #ff5a00" : "3px solid grey"};
	&:hover {
		color: green;
	}
`;
export const CategoriesContainer = styled.div`
	width: 85%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const Category = styled.div`
	padding-left: 16px;
	width: 228px;
	height: 31.2px;
	cursor: pointer;
	transition: 0.15s ease-in-out;
	display: flex;
	justify-content: left;
	align-items: center;
	color: var(--textColor);

	&:hover {
		color: var(--linkColor);
	}
`;
