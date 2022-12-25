import { Link } from 'react-router-dom';
import PriceDiscount from '../priceDiscount/PriceDiscount';
import { Text, Flex, RedirectOnClick } from '..';
import { SectionContainer, SectionListingContainer, ImageContainer, ImageListingsContainer, Image } from './productContainer.styles';
import { Bar, BarTitle } from '../fourthSection/FourthSection.styles';
import { fourthSectionData } from '../../utils/data';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';

const ProductContainer = ({
	img,
	discount = 0,
	oldPrice = 0,
	price = 1.11,
	description,
	row = false,
	product = { id: '61c10bc4649cdf618b815c4a' },
	listings,
	index = 0,
	height = '100px',
	imageSize = '120px',
	seller = 'xxx',
}) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	return (
		<>
			<RedirectOnClick to={`/product/${product._id}`}>
				{listings ? (
					<SectionListingContainer row={row}>
						<ImageListingsContainer>{img && <Image src={img} />}</ImageListingsContainer>
						<Flex column>
							<Text wrap='true'>{product.title}</Text>
							<Text> od {product.seller}</Text>
							<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
						</Flex>
					</SectionListingContainer>
				) : (
					<SectionContainer row={row} isMobile>
						<Bar>
							<BarTitle>{fourthSectionData[index]?.title}</BarTitle>
						</Bar>
						<ImageContainer height={height} isMobile={isMobile}>
							{img && <Image src={img} isMobile={isMobile} imageSize={imageSize} />}
						</ImageContainer>
						<Flex column>
							<Text wrap='true'>{product.title && product.title.slice(0, 60)}</Text>
							<Text> od {seller}</Text>
							<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
						</Flex>
					</SectionContainer>
				)}
			</RedirectOnClick>
		</>
	);
};

export default ProductContainer;
