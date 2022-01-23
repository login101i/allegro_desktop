import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import { Text, Flex } from "../../components";

import { getProducts } from "../../redux/actions/productActions";

const SecondSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isMedium = useMediaQuery({ maxWidth: screens.lg });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const MainContainer = styled.div`
		display: flex;
		flex-direction: row;
		width: 100vw;
		justify-content: space-between;
		margin-top: 16px;
		height: ${isMobile ? "auto" : "600px"};
	`;

	const FlexRow = styled.div`
		display: flex;
		justify-content: center;
		width: 100%;
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

	const { products } = useSelector((state) => state.products);

	if (isLarge) {
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
	} else if (isMobile) {
		return (
			<>
				<MainContainer>
					<Flex column>
						<Left products={products} />
						<Center products={products} isMobile/>
					</Flex>
				</MainContainer>
			</>
		);
	}
};

export default SecondSection;
