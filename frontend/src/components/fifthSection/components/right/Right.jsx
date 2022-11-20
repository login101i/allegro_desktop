import { useSelector } from 'react-redux';
import { Flex, Text, ProductContainer, BorderAndTitle } from '../../../../components';
import { Container, ScrollContainer } from './Right.styles';

const Right = ({ isMobile }) => {
	const { products } = useSelector(state => state.products);

	return (
		<Container isMobile={isMobile}>
			<Text title bold textAlign='center'>
				Polecane dla kota
			</Text>
			<ScrollContainer>
				<Flex>
					{products &&
						products
							.filter(p => p.category === 'Perfumy')
							.map(product => (
								<ProductContainer
									key={product._id}
									img={product.img[0].url}
									discount={product.discount}
									oldPrice={product.oldPrice}
									price={product.price}
									product={product}
									extended={true}
								/>
							))}
				</Flex>
			</ScrollContainer>

			<BorderAndTitle />
		</Container>
	);
};

export default Right;
