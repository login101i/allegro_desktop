import * as React from "react";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartTitle from "../../components/CartTitle";
import { ProductDetailsNavbar } from "./components/ProductDetailsNavbar";
import { ProductDetailsInfo } from "./components/ProductDetailInfo";
import { Loader } from "../../components";

import { getProductDetails } from "../../redux/actions/productActions";

import { Container, Space } from "./ProductDetails.styles";

export const ProductDetails = () => {
	const dispatch = useDispatch();
	const { loading, product } = useSelector((state) => state.productDetails);
	let id = useParams().id;

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);

	const title = "Product Details";
	return (
		<>
			<Container>
				<div>Hello test</div>
				<CartTitle title={title} />
				{loading ? <Loader /> : <ProductDetailsNavbar product={product} />}
				{loading ? <Loader /> : <ProductDetailsInfo product={product} />}
			</Container>
			<Space />
		</>
	);
};
