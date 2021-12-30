import React from "react";
import styled from "styled-components";

const Header = styled.div`
	display: flex;
	width: 100%;
	border-top: 1px solid var(--borderColor);
	justify-content: space-evenly;
	min-width: 260px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const SpanText = styled.span`
	text-transform: uppercase;
	letter-spacing: 1.25px;
	text-align: center;
	padding: 5px;
	color: var(--linkColor);
	cursor: pointer;
	text-align: center;
`;

const BorderAndTitle = (props) => {
	return (
		<>
			{props.border ? (
				<Header>
					<SpanText>{props.title || "Zobacz więcej"} </SpanText>
				</Header>
			) : (
				<SpanText>{props.title || "Zobacz więcej"} </SpanText>
			)}
		</>
	);
};

export default BorderAndTitle;
