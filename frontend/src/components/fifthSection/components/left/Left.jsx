import { useSelector } from 'react-redux';
import { Text, BorderAndTitle, ProductContainer } from '../../../../components';
import { Container, ScrollContainer } from '../Container.styles';
import { DirectionArrows } from '../../../../components';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../../responsive';

const Left = () => {
	const { products } = useSelector(state => state.products);
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<Container isMobile={isMobile}>
				<Text textAlign='center' title='Polecane dla psa' bold></Text>
				<ScrollContainer isMobile={isMobile}>
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
									height='240px'
									imageSize='180px'
								/>
							))}
				</ScrollContainer>
				<BorderAndTitle />
			</Container>
		</>
	);
};

export default Left;
