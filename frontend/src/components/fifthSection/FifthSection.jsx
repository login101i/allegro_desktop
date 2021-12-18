import React from "react";
import styled from "styled-components";

import Left from "./Left";
import Right from "./Right";

import PsiSmak from "../../assets/pictures/PsiSmak.png";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	position: relative;
	height: 650px;
	background-color: white;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const BackgroundImage = styled.img`
	width: 100%;
	object-fit: contain;

	position: absolute;
	top: -130px;
	left: 0;
	right: 0;
`;

const RowContainer = styled.div`
	position: absolute;
	top: 250px;
	left: 0px;
	width: 100%;
	height: 380px;
	display: flex;
	justify-content: space-between;
`;

const FifthSection = () => {
	return (
		<Container>
			<BackgroundImage src={PsiSmak} />
			<RowContainer>
				<Left />
				<Right />
			</RowContainer>
		</Container>
	);
};

export default FifthSection;
