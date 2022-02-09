import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { Left } from "./components/left/Left";
import { Center } from "./components/center/Center";
import { Right } from "./components/right/Right";
import { screens } from "../responsive";
import { Text, Flex } from "../../components";
import { MainContainer, Even, Space } from "./SecondSection.styles";

const SecondSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const { products } = useSelector((state) => state.products);

	if (isMobile) {
		return (
			<MainContainer isMobile={isMobile}>
				<Flex column>
					<Left products={products} />
					<Center products={products} isMobile />
				</Flex>
			</MainContainer>
		);
	} else
		return (
			<>
				<Text title={"Wszystko na Święta"} size={30} marginTop={33} />
				<MainContainer>
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
};

export default SecondSection;
