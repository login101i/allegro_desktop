import React from "react";
import styled from "styled-components";
import { Text } from "../..";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px 25px;
	flex: 1;
`;

const Image = styled.img`
	max-width: 132px;
	width: 132px;
	max-height: 132px;
	heigth: 132px;
	margin-bottom: 15px;
`;

export const Item = (props) => {
	const { image, title } = props;

	return (
		<Container>
			<Image src={image} />
			<Text>{title}</Text>
		</Container>
	);
};
