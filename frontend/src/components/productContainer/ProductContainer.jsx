import { Link } from 'react-router-dom';
import PriceDiscount from '../priceDiscount/PriceDiscount';
import { Text, Flex } from '..';
import { SectionContainer, SectionListingContainer, ImageContainer, ImageListingsContainer, Image } from './productContainer.styles';
import { Container, Bar, BarTitle } from '../fourthSection/FourthSection.styles';
import { fourthSectionData } from '../../utils/data';

const ProductContainer = ({
	img,
	discount = 0,
	oldPrice = 0,
	price,
	description,
	row = false,
	product = { id: '61c10bc4649cdf618b815c4a' },
	listings,
	index = 0,
}) => {
	return (
		<>
			<Link
				to={`/product/${product._id}`}
				style={{
					textDecoration: 'none',
					width: '100%',
					background: 'transparent',
				}}
			>
				{listings ? (
					<SectionListingContainer row={row} onClick={() => console.log(price)}>
						<ImageListingsContainer>{img && <Image src={img} />}</ImageListingsContainer>
						<Flex column>
							<Text wrap='true'>{product.title}</Text>
							<Text> od {product.seller}</Text>
							<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
						</Flex>
					</SectionListingContainer>
				) : (
					<SectionContainer row={row} onClick={() => console.log(price)} isMobile>
						<Bar>
							<BarTitle>{fourthSectionData[index]?.title}</BarTitle>
						</Bar>
						<ImageContainer>{img && <Image src={img} />}</ImageContainer>
						<Flex column>
							<Text wrap='true'>{product.title}</Text>
							<Text> od {product.seller}</Text>
							<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
						</Flex>
					</SectionContainer>
				)}
			</Link>
		</>
	);
};

export default ProductContainer;
