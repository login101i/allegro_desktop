import { useSelector } from 'react-redux';
import { Text, BorderAndTitle, ProductContainer } from '../../../../components';
import { Container, ScrollContainer } from '../Container.styles';

const Left = ({ isMobile }) => {
	const { products } = useSelector(state => state.products);

	return (
		<>
			<Container isMobile={isMobile}>
				<Text textAlign='center' title='Polecane dla psa' bold></Text>
				<ScrollContainer>
					{products &&
						products
							.filter(p => p.category === 'Pupil')
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
				</ScrollContainer>

				<BorderAndTitle />
			</Container>
		</>
	);
};

export default Left;
