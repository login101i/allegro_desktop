import React from "react";
import styled from "styled-components";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import { Text } from "../Text";

import { useDispatch, useSelector } from "react-redux";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-top: 16px;
	height: 500px;

`;

const FlexCol = styled.div`
	display: flex;
	flex-direcion: column;
	width: 100%;
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

const SecondSection = ({ title }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isMedium = useMediaQuery({ maxWidth: screens.lg });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const dispatch = useDispatch();
	
	const { loading, products, productsCount } = useSelector(
		(state) => state.products
	);

	if (isLarge) {
		return (
			<>
				<Text title={title} size={30} marginTop={33} />
				<MainContainer>
					<Even>
						<Left products={products} />
					</Even>

					<Space />

					<Even>
						<Center products={products}  />
					</Even>

					<Space />

					<Even>
						<Right />
					</Even>
				</MainContainer>
			</>
		);
	} else if (isMedium) {
		return (
			<>
				<MainContainer>
					medium
					<FlexRow>
						<Left />
						<Center />
					</FlexRow>
					<Right />
				</MainContainer>
			</>
		);
	}
};

export default SecondSection;
