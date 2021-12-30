import React, { useEffect } from "react";

import styled from "styled-components";

import Left from "./Left";
import Right from "./Right";
import PsiSmak from "../../assets/pictures/PsiSmak.png";
import Loader from "../../components/Loader";

import {
	getProducts,
	getProductDetails
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	position: relative;
	height: 700px;
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
const RowContainer = styled.div`
	position: absolute;
	top: 250px;
	left: 0px;
	width: 100%;
	height: 440px;
	display: flex;
	justify-content: space-between;
`;

const FifthSection = () => {
	const dispatch = useDispatch();
	const { loading, products, productsCount } = useSelector(
		(state) => state.products
	);

	console.log(products);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getProductDetails("61c10b44649cdf618b815c43"));
		console.log("Pobieram produkty.");
	}, [dispatch]);

	return (
		<Container>
			<BackgroundImage src={PsiSmak} />
			<RowContainer>
				{loading ? <Loader /> : <Left products={products} />}
				{loading ? <Loader /> : <Right />}
			</RowContainer>
		</Container>
	);
};

export default FifthSection;
