import { useMediaQuery } from 'react-responsive';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { screens } from '../../../../src/components/responsive';
import { Text, Flex } from '../../../components';
import { theme } from '../../../infrastructure/theme';
import { Container, Left, TitleL, Ratings, Right, TitleR, RightBottom } from './ProductDetailsNavbar.styles';

export const ProductDetailsNavbar = ({ product }) => {
	const { title = '', ratings = 5, numOfReviews, price = 0, stock } = product;
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const ratingArray = Array.from(new Array(Math.floor(ratings)));
	const remainStars = Array.from(new Array(5 - Math.floor(ratings)));

	return (
		<>
			{product && (
				<Container isMobile={isMobile}>
					<Left>
						<TitleR>{title}</TitleR>
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
							<Text color={theme.colors.linkColor} wrap='true'>
								Najtańsze od {price} zł, najszyciej od {price.toFixed(1) + 4} zł. Wszystkie ({stock}) sztuk.
							</Text>
						</RightBottom>
					</Right>
				</Container>
			)}
		</>
	);
};
