import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
	justify-content: ${(props) => (props.space ? "space-between" : "")};
	justify-content: ${(props) => (props.center ? "center" : "")};

	align-items: ${(props) => (props.align ? "center" : "left")};
	margin: 4px 0px;
	width: ${(props) => (props.fullWidth ? "100%" : "auto")};
	border-top: ${(props) => (props.borderTop ? "1px solid lightGrey " : "")};
`;

const FlexRow = ({
	space,
	style,
	align,
	column,
	fullWidth,
	borderTop,
	center,
	children
}) => {
	return (
		<Container
			style={style}
			space={space}
			align={align}
			column={column}
			fullWidth={fullWidth}
			borderTop={borderTop}
			center={center}
		>
			{children}
		</Container>
	);
};

export default FlexRow;
