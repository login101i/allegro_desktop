import React from "react";
import styled from "styled-components";

import Text  from "./Text";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	margin-bottom: 8px;
	background-color: white;
	height: auto;
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
	const navigate = useNavigate();
	return (
		<Container style={style}>
			<Text bold={bold} title={title} marginTop="4px">
				{text}
			</Text>
			{subTitles.map((subTitle, i) => (
				<Text
					onClick={() => navigate(subTitle.link)}
					key={i}
					borderBottom={borderBottom}
					hovered
				>
					{subTitle.subTitle ? subTitle.subTitle : subTitle}
				</Text>
			))}
		</Container>
	);
};

export default MenuContentBox;
