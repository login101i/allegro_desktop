import React from "react";
import styled from "styled-components";

import { Text } from "./Text";

const Container = styled.div`
	width: 100%;
	margin-bottom: 8px;
	background-color: white;
`;

const MenuContentBox = ({ title, subTitles, style, onClick }) => {
	return (
		<Container style={style} onClick={onClick}>
			<Text bold>{title}</Text>
			{subTitles.map((subTitle) => (
				<Text borderBottom hovered>
					{subTitle}
				</Text>
			))}
		</Container>
	);
};

export default MenuContentBox;
