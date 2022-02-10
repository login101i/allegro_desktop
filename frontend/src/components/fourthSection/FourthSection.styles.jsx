import styled from "styled-components";

export const  Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	justify-content: space-between;
	margin-top: 16px;
	background-color: white;
	overflow-x: scroll;
	white-space: nowrap;
`;

export const  Bar = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;

export const  BarTitle = styled.div`
	text-transform: uppercase;
	margin: 0px 10px;
	cursor: pointer;
	transition: 0.15s;
	padding: 13px 2px;
	border-bottom: ${(props) =>
		props.active ? " 3px solid #ff5a00" : " 3px solid transparent"};
	color: ${(props) => (props.active ? "#ff5a00" : "grey")};

	&:hover {
		color: ${(props) => (props.active ? "#ff5a00" : "var(--linkColor)")};
	}
`;

export const  ProductContainer1 = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 10px;
`;
