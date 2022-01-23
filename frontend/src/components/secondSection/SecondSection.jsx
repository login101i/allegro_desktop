import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import { Text, Flex } from "../../components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	justify-content: space-between;
	margin-top: 16px;
	height: ${(props) => (props.isMobile ? "auto" : "600px")};
`;

const Even = styled.div`
	max-width: 33%;
	height: 100%;
	display: flex;
	flex: 1;
`;

const Space = styled.div`
	width: 20px;
	heigth: 200px;
	background-color: transparent;
`;

const SecondSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const { products } = useSelector((state) => state.products);

	if (isLarge) {
		return (
			<>
				<Text title={"Wszystko na Święta"} size={30} marginTop={33} />

				<MainContainer >
					<Even>
						<Left products={products} />
					</Even>

					<Space />

					<Even>
						<Center products={products} />
					</Even>

					<Space />

					<Even>
						<Right />
					</Even>
				</MainContainer>
			</>
		);
	} else if (isMobile) {
		return (
			<>
				<MainContainer isMobile={isMobile}>
					<Flex column>
						<Left products={products} />
						<Center products={products} isMobile />
					</Flex>
				</MainContainer>
			</>
		);
	}
};

export default SecondSection;
