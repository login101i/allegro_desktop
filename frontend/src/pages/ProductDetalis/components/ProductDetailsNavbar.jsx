import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { screens } from '../../../../src/components/responsive';
import { Text, Flex } from '../../../components';

import { Container, Left, TitleL, Ratings, Right, TitleR, RightBottom } from './ProductDetailsNavbar.styles';

export const ProductDetailsNavbar = ({ product }) => {
	const { title, ratings = 5, numOfReviews, price, stock } = product;
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const ratingArray = Array.from(new Array(Math.floor(ratings)));
	const remainStars = Array.from(new Array(5 - Math.floor(ratings)));

	return (
		<>
			{product && (
				<Container isMobile={isMobile}>
					<Left>
						<TitleL isMobile={isMobile}>{title}</TitleL>
						<Flex>
							<Ratings>
								{ratingArray.map((rating, index) => (
									<StarBorderIcon style={{ fontSize: '22px', color: 'orange' }} key={index} />
								))}
								{remainStars.map((rating, index) => (
									<StarBorderIcon style={{ fontSize: '22px' }} key={index} />
								))}
							</Ratings>
							<Text>{numOfReviews} </Text>
							<Text firstSmall>opini tego produktu</Text>
						</Flex>
					</Left>
					<Right>
						<TitleR>Inne oferty tego produktu.</TitleR>

						<RightBottom>
							Najtańsze od {price - 10} zł, najszyciej od {price + 4} zł. Wszystkie ({stock})
						</RightBottom>
					</Right>
				</Container>
			)}
		</>
	);
};
