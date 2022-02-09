import React from "react";
import styled from "styled-components";

import LogoWhite from "../../src/assets/pictures/logoWhite.svg";
import { Text } from "../components";

const Container = styled.div`
	background-color: rgb(60, 80, 82);
	width: 100vw;
	position: absolute;
	bottom: 0px;
	left: 0;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => (props.isMobile ? "2px" : "20px")};

	left: ${(props) => (props.isMobile ? "3%" : "20%")};
	width: 100vw;
`;
const Logo = styled.img`
	height: 43px;
	margin: 5px 20px;
`;

const AllegroFooter = ({ width, isMobile }) => {
	return (
		<Container>
			<Wrapper width={width} isMobile={isMobile}>
				<Text color="white" textAlign="center" wrap="true">
					Korzystanie z serwisu oznacza akceptację regulaminu
				</Text>
				<Logo src={LogoWhite} alt="Allegro" />
			</Wrapper>
		</Container>
	);
};

export default AllegroFooter;
