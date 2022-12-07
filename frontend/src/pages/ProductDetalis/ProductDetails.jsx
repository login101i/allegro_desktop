import * as React from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartTitle from '../../components/cartTitle/CartTitle';
import { ProductDetailsNavbar } from './components/ProductDetailsNavbar';
import { ProductDetailsInfo } from './components/ProductDetailInfo';
import { Loader } from '../../components';
import { getProductDetails } from '../../redux/actions/productActions';
import { Container, Space } from './ProductDetails.styles';

export const ProductDetails = () => {
	const dispatch = useDispatch();
	let id = useParams().id;

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);

	const { loading, product } = useSelector(state => state.productDetails);

	const title = 'Product Details';
	return (
		<>
			<Container>
				<CartTitle title={title} />
				{loading ? '' : <ProductDetailsNavbar product={product} />}
				{loading ? <Loader /> : <ProductDetailsInfo product={product} />}
			</Container>

			<Space />
		</>
	);
};
