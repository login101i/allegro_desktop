import React from "react";
import styled from "styled-components";

import LogoWhite from "../../src/assets/pictures/logoWhite.svg";
import { Text } from "./Text";

const Container = styled.div`
	background-color: rgb(60, 80, 82);
	width: 100%;
	position: absolute;
	bottom: 0px;
	left: 0;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	position: relative;
	width: ${(props) => (props.width ? props.width : "70%")};
	left: ${(props) => (props.width  ? "20%" : "15%")};
`;
const Logo = styled.img`
	height: 43px;
`;

const AllegroFooter = ({ width }) => {
	return (
		<Container>
			<Wrapper width={width}>
				<Text color="white">
					Korzystanie z serwisu oznacza akceptację regulaminu
				</Text>
				<Logo src={LogoWhite} alt="Allegro" />
			</Wrapper>
		</Container>
	);
};

export default AllegroFooter;
