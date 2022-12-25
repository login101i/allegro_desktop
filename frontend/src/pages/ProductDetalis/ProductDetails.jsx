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
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../components/responsive';

const ProductDetails = () => {
	const dispatch = useDispatch();
	let id = useParams().id;

	useEffect(() => {
		dispatch(getProductDetails(id));
		window.scrollTo(0, 0);
	}, [dispatch, id]);

	const { loading, product } = useSelector(state => state.productDetails);
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const title = 'Szczegóły produktu';

	return (
		<>
			<Container isMobile={isMobile}>
				<CartTitle title={title} isMobile={isMobile} />
				{loading ? '' : <ProductDetailsNavbar product={product} />}
				{loading ? <Loader /> : <ProductDetailsInfo product={product} />}
			</Container>

			<Space />
		</>
	);
};

export default ProductDetails;