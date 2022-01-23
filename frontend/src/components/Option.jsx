import React from "react";
import styled from "styled-components";

const OptionContainer = styled.button`
	transition: 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex: 1;
	text-transform: capitalize;
	border: none;
	outline: none;

	border-top: ${(props) =>
		props.borderTop && !props.borderBottom ? "3px solid lightGrey" : "none"};

	border-bottom: ${(props) =>
		props.borderBottom ? "3px solid lightGrey" : "none"};

	&:hover {
		border-top: ${(props) =>
			props.borderTop && !props.borderBottom
				? "3px solid var(--allegroColor)"
				: "none"};
		border-bottom: ${(props) =>
			props.borderBottom ? "3px solid var(--allegroColor)" : "none"};
	}
`;

const Option = styled.div`
	text-align: center;
	cursor: pointer;
	color: var(--textColor);
	padding: 10px;
	font-size: ${(props) => (props.size ? props.size : "inherit")};
	text-transform: ${(props) => props.upperCase && "uppercase"};

	&:hover {
		color: var(--linkColor);
	}
`;

const OptionComponent = ({
	option,
	onClick,
	size,
	borderBottom,
	borderTop = true,
	upperCase
}) => {
	return (
		<OptionContainer
			onClick={onClick}
			borderBottom={borderBottom}
			borderTop={borderTop}
		>
			{" "}
			<Option size={size} upperCase={upperCase}>
				{option}
			</Option>
		</OptionContainer>
	);
};

export default OptionComponent;
