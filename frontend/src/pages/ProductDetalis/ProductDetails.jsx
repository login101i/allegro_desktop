import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import CartTitle from "../../components/CartTitle";
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
	margin-bottom: 60px;
`;

const Space = styled.div`
	height: 20px;
	background-color: ${(props) => props.theme.colors.allegroBackground};
`;
export const ProductDetails = () => {
	const dispatch = useDispatch();
	const { loading, product } = useSelector(
		(state) => state.productDetails
	);
	let id = useParams().id;

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);

	const title = "Product Details";
	return (
		<>
			<Container>
				<CartTitle title={title} />
				{loading ? <Loader /> : <ProductDetailsNavbar product={product} />}
				{loading ? <Loader /> : <ProductDetailsInfo product={product} />}
			</Container>
			<Space />
		</>
	);
};

