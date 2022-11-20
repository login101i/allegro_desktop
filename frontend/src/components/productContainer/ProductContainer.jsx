import { Link } from 'react-router-dom';

import PriceDiscount from '../priceDiscount/PriceDiscount';

import { Text, Flex } from '..';
import {
	SectionContainer,
	SectionListingContainer,
	ImageContainer,
	ImageListingsContainer,
	Image,
} from './productContainer.styles';

const ProductContainer = ({
	img,
	discount = 0,
	oldPrice = 0,
	price,
	description,
	row = false,
	product = { id: '61c10bc4649cdf618b815c4a' },
	listings,
}) => {
	return (
		<>
			<Link
				to={`/product/${product._id}`}
				style={{
					textDecoration: 'none',
					width: '100%',
					background: 'transparent',
					cursor: 'default',
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
					<>
						<SectionContainer row={row} onClick={() => console.log(price)} isMobile>
							<ImageContainer>{img && <Image src={img} />}</ImageContainer>
							<Flex column>
								<Text wrap='true'>{product.title}</Text>
								<Text> od {product.seller}</Text>
								<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
							</Flex>
						</SectionContainer>
					</>
				)}
			</Link>
		</>
	);
};

export default ProductContainer;
