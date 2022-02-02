import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";

import Left from "./Left";
import Right from "./Right";
import PsiSmak from "../../assets/pictures/PsiSmak.png";
import { Loader, Flex } from "../../components";

import {
	getProducts,
	getProductDetails
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { screens } from "../responsive";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	position: relative;
	// height: 700px;
	background-color: white;
	width: 100%;
	position: relative;
	overflow: hidden;
`;
const BackgroundImage = styled.img`
	width: 100%;
	object-fit: contain;
	position: absolute;
	top: -180px;
	left: 0;
	right: 0;
	height: 600px;
`;
const Image = styled.img`
	width: 100vw;
`;

const FifthSection = () => {
	const dispatch = useDispatch();
	const { loading, products } = useSelector((state) => state.products);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getProductDetails("61c10b44649cdf618b815c43"));
		console.log("Pobieram produkty.");
	}, [dispatch]);

	return (
		<Container>
			{isMobile ? (
				<>
					<Flex column>
						<Image src={PsiSmak} />

						{loading ? <Loader /> : <Left isMobile products={products} />}
						{loading ? <Loader /> : <Right isMobile products={products} />}
					</Flex>
				</>
			) : (
				<>
					<BackgroundImage src={PsiSmak} />
					<Flex space>
						{loading ? <Loader /> : <Left products={products} />}
						{loading ? <Loader /> : <Right products={products} />}
					</Flex>
				</>
			)}
		</Container>
	);
};

export default FifthSection;
