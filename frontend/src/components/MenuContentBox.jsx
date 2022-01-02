import React from "react";
import styled from "styled-components";

import { Text } from "./Text";

const Container = styled.div`
	width: 100%;
	margin-bottom: 8px;
	background-color: white;
`;

const MenuContentBox = ({
	title,
	subTitles,
	style,
	onClick,
	color,
	hovered = false,
	borderBottom = false,

	text,
	bold = false
}) => {
	return (
		<Container style={style} onClick={onClick}>
			<Text bold={bold} title={title}>
				{text}
			</Text>
			{subTitles.map((subTitle, i) => (
				<Text
					key={i}
					borderBottom={borderBottom}
					hovered={hovered}
					color={color}
				>
					{subTitle}
				</Text>
			))}
		</Container>
	);
};

export default MenuContentBox;
