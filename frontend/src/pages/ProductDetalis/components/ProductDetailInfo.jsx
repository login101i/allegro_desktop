import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PriceDiscount from '../../../components/priceDiscount/PriceDiscount';
import { screens } from '../../../../src/components/responsive';
import { Flex, CustomIcon, Shipping, CartPlusMinus, Text, DirectionArrows } from '../../../components';

import {
	Container,
	Left,
	MainImage,
	ImagesThumbnails,
	ImageThumb,
	Right,
	IconContainer,
	Title,
	FromSeller,
	Raty,
} from './ProductDetailInfo.styles';

export const ProductDetailsInfo = ({ product }) => {
	const [mainImage, setMainImage] = useState('');
	const handleChangeImage = url => {
		setMainImage(url);
	};
	const {
		img = [
			{
				url: 'https://res.cloudinary.com/mckrus/image/upload/v1642531907/allegroWebProducts/bjvafejxosscc2gzvxcu.jpg',
			},
		],
		title,
		discount,
		price = 0,
		description,
		oldPrice,
		seller,
	} = product;
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const leftPart = ({ isMobile }) => {
		return (
			<Left isMobile={isMobile}>
				{img.length > 1 ? (
					<DirectionArrows align='center'>
						<MainImage src={img[0].url} isMobile={isMobile} onClick={console.log('gallery')} />
					</DirectionArrows>
				) : (
					<MainImage src={img[0].url} isMobile={isMobile} onClick={console.log('gallery')} />
				)}
				<ImagesThumbnails>
					{img.map(image => (
						<ImageThumb src={image.url} key={image.url} onClick={() => handleChangeImage(image.url)} />
					))}
				</ImagesThumbnails>
			</Left>
		);
	};

	const rightPart = ({ isMobile }) => {
		return (
			<Right>
				<IconContainer>
					<CustomIcon icon={StarBorderIcon} color='var(--linkColor)'>
						Udostępnij
					</CustomIcon>
					<CustomIcon icon={StarBorderIcon} color='var(--linkColor)'>
						Obserwuj
					</CustomIcon>
				</IconContainer>
				<Title>{title}</Title>
				<FromSeller>Od Super Sprzedawcy {seller}</FromSeller>
				<PriceDiscount discount={discount} oldPrice={oldPrice} price={price} description={description} />
				{price > 500 && (
					<Flex>
						<Raty>{(price / 20).toFixed(2)} zł</Raty>
						<Text title={' x 20 rat '} />
					</Flex>
				)}
				<Text marginTop={50}>2 osoby kupiły 2 sztuki</Text>
				<Shipping />
				<CartPlusMinus />
			</Right>
		);
	};

	if (isMobile)
		return (
			<Container isMobile={isMobile}>
				<Flex column>
					{leftPart(isMobile)}
					{rightPart(isMobile)}
				</Flex>
			</Container>
		);
	else
		return (
			<>
				{product && (
					<Container>
						{leftPart(isMobile)}
						{rightPart(isMobile)}
					</Container>
				)}
			</>
		);
};
