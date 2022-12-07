import { Text, BorderAndTitle, ProductContainer, DirectionArrows, CountDownTimer } from '../../../../components';
import { Container, Wrapper } from './Left.styles';

export const Left = ({ products }) => {

	return (
		<Container>
			<Text title='Weekendowe okazje dnia kończą się za:' />
			<Wrapper>
				<CountDownTimer />
				<DirectionArrows>
					{products &&
						products.map(dogProduct => (
							<ProductContainer
								key={dogProduct._id}
								img={dogProduct.img[0].url}
								discount={dogProduct.discount}
								oldPrice={dogProduct.oldPrice}
								price={dogProduct.price}
								product={dogProduct}
								extended={true}
							/>
						))}
				</DirectionArrows>
			</Wrapper>

			<BorderAndTitle title='Przejdź do strefy okazji' />
		</Container>
	);
};
