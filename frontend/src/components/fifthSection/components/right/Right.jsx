import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Flex, Text, ProductContainer, BorderAndTitle } from '../../../../components';
import { screens } from '../../../responsive';
import { Container, ScrollContainer } from '../Container.styles';

const Right = () => {
	const { products } = useSelector(state => state.products);
	const isMobile = useMediaQuery({ maxWidth: screens.md });

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
									height='240px'
									imageSize='180px'
								/>
							))}
				</Flex>
			</ScrollContainer>

			<BorderAndTitle />
		</Container>
	);
};

export default Right;
