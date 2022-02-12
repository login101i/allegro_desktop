import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};

	width: ${(props) => (props.width ? props.width : "80%")};
	margin-bottom: 100px;
	margin-top: 16px;
	justify-content: center;
`;

const PageWidth = ({ row, children, width }) => {
	return (
		<Container row={row} width={width}>
			{children}
		</Container>
	);
};

export default PageWidth;
