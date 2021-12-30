import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import MetaData from "../../components/MetaData";
import ProductDetailsNavbar from "./components/ProductDetailsNavbar";
import ProductDetailsInfo from "./components/ProductDetailInfo";
import Loader from "../../components/Loader";

import { getProductDetails } from "../../redux/actions/productActions";

const Container = styled.div`
	margin-top: 60px;
	margin-left: 40px;
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 80%;
	background-color: white;
	padding: 0px 20px;
`;

const Space = styled.div`
	height: 20px;
	background-color: ${(props) => props.theme.colors.allegroBackground};
`;
const ProductDetails = () => {
	const dispatch = useDispatch();

	const { loading, error, product } = useSelector(
		(state) => state.productDetails
	);
	console.log(loading);
	console.log(product);
	console.log(error);

	let id = useParams().id;
	console.log(id);
	// console.log("poniżej match id");
	// console.log("id", match.params.id);

	useEffect(() => {
		dispatch(getProductDetails(id));
		console.log("wykonuję product details");
	}, [dispatch]);

	const title = "product Details";
	return (
		<>
			<Container>
				<MetaData title={title} />
				{loading ? <Loader /> : <ProductDetailsNavbar product={product} />}
				{loading ? <Loader /> : <ProductDetailsInfo product={product} />}
			</Container>
			<Space />
		</>
	);
};

export default ProductDetails;
