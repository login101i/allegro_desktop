import { useMediaQuery } from 'react-responsive';
import { Text, BorderAndTitle, ProductContainer, DirectionArrows, CountDownTimer } from '../../../../components';
import { screens } from '../../../responsive';
import { Container, Wrapper } from './Left.styles';
import { ImageSkeleton } from '../../../productContainer/productContainer.styles';

export const Left = ({ products }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Container isMobile={isMobile}>
			<Text wrap='true' size={18} textAlign>
				Weekendowe okazje dnia kończą się za:
			</Text>
			<Wrapper>
				<CountDownTimer />
				<DirectionArrows>
					{products ? (
						products.map(dogProduct => (
							<ProductContainer
								key={dogProduct._id}
								img={dogProduct.img[0].url}
								discount={dogProduct.discount}
								oldPrice={dogProduct.oldPrice}
								price={dogProduct.price}
								product={dogProduct}
								extended={true}
								height='180px'
								imageSize='160px'
							/>
						))
					) : (
						<ImageSkeleton />
					)}
				</DirectionArrows>
			</Wrapper>

			<BorderAndTitle title='Przejdź do strefy okazji' />
		</Container>
	);
};
