import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import PriceDiscount from '../../../components/priceDiscount/PriceDiscount';
import { Text } from '../../../components';
import { Shipping, CartPlusMinus } from '../../../components';
import { screens } from '../../../../src/components/responsive';

import { Flex } from '../../../components';

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
	const [mainImage, setMainImage] = useState(product.img[0].url);
	const handleChangeImage = url => {
		setMainImage(url);
	};
	const { img, title, discount, price, description, oldPrice, seller } = product;
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const leftPart = ({ isMobile }) => {
		return (
			<Left isMobile={isMobile}>
				<MainImage src={mainImage} isMobile={isMobile} />

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
					<StarBorderIcon style={{ fontSize: '30px', margin: '10px' }} />
					Udostępnij
					<StarBorderIcon style={{ fontSize: '30px', margin: '10px' }} />
					Obserwuj
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
				<Container>
					{leftPart(isMobile)}
					{rightPart(isMobile)}
				</Container>
			</>
		);
};
