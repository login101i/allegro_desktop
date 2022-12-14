import { useEffect, useState, useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {
	Wrapper,
	MainContainer,
	CartStagesContainer,
	LeftColumn,
	LeftRow1,
	LeftRow2,
	RightColumn,
	RightRow1,
	RightRow2,
	RightRow3,
	CartProductContainer,
} from './CartPage.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import {
	CustomIcon,
	Flex,
	Text,
	CartPlusMinus,
	BorderAndTitle,
	PriceDiscount,
	RedirectOnClick,
	ImageComponent,
	Button,
} from '../../components';
import { colors, theme } from '../../infrastructure/theme';
import { CartContext } from '../../context/cart.context';
import { ImageContainer } from '../../components/imageComponent/ImageComponent.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../components/responsive';

export const CartPage = () => {
	const { cart, dispatch } = useContext(CartContext);
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	useEffect(() => {}, []);

	const handleDeleteFromCart = product => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: product });
	};

	return (
		<Wrapper>
			<CartStagesContainer></CartStagesContainer>
			<Flex align>
				<MainContainer isMobile={isMobile}>
					<LeftColumn>
						<LeftRow1>
							<Flex align>
								<Checkbox />
								<Text>Cały koszyk</Text>
							</Flex>
							<Flex align>
								<Text uppecase color={colors.linkColor}>
									Usuń
								</Text>
								<CustomIcon icon={ExpandMoreIcon} />
								<CustomIcon icon={ExpandLessIcon} />
							</Flex>
						</LeftRow1>
						{cart &&
							cart.map(({ product, qty, totalProductPrice }, index) => (
								<LeftRow2 isMobile={isMobile} key={product._id + index} qty={qty}>
									<CartProductContainer key={product.name + index}>
										<Flex align>
											<Checkbox />
											<Text>Przesyłka od {product.seller}</Text>
										</Flex>
										<Flex space column={isMobile} align>
											<Flex align>
												<Checkbox />
												<RedirectOnClick to={`/product/${product._id}`} key={index}>
													<Flex align maxWidth='330px' space>
														<ImageContainer>
															<ImageComponent size={160} img={product.img[0].url} />
														</ImageContainer>
														<Text wrap='true'>{product.title}</Text>
													</Flex>
												</RedirectOnClick>
											</Flex>
											<Flex align>
												<Checkbox />
												<CartPlusMinus product={product} qty={qty} calculateTotal />
											</Flex>
											<Flex align column={isMobile}>
												<PriceDiscount
													discount={product.discount}
													oldPrice={product.oldPrice}
													price={totalProductPrice}
													qty={qty}
													description={product.description}
													product={product}
												/>
												<CustomIcon
													icon={DeleteIcon}
													size={35}
													onClick={() => handleDeleteFromCart(product)}
													color={theme.colors.blackSpace}
												/>
											</Flex>
										</Flex>
									</CartProductContainer>
								</LeftRow2>
							))}
					</LeftColumn>
					<RightColumn>
						<RightRow1>
							<Flex column>
								<Flex space>
									<Text>Wartość produktów</Text>
									<Text>cart.total</Text>
								</Flex>
								<Flex space>
									<Text>Dostawa od</Text>
									<Text>(9, 99z zł)</Text>
								</Flex>
								<Flex space>
									<Text>Razem z dostaną </Text>
									<Text>99, 99z zł</Text>
								</Flex>
								<Flex align column>
									<Flex>
										<Button background={theme.colors.lightBlue} width='220px' capitalize>
											Zapłać później
										</Button>
									</Flex>
									<Flex>
										<Button background='var(--allegroColor)' width='220px' capitalize>
											Dostawa i płatność
										</Button>
									</Flex>
								</Flex>

								<BorderAndTitle />
								<BorderAndTitle title='kontynuuj zakupy' />
							</Flex>
						</RightRow1>
						<RightRow2>
							<Flex column space>
								<Flex space align>
									<ImageComponent size={80} img='https://a.allegroimg.com/s160/12b155/8ed149a848d382507379b1e4d20a' />
									<Flex column>
										<Text wrap='true' title='Dorzuć wpłatę do Wirtualnej Puszki WOŚP' />
										<Text wrap='true'>Wesprzyj 31. Finał WOŚP. Żyj zdrowo w zdrowym świecie!</Text>
									</Flex>
								</Flex>
								<BorderAndTitle border title='Dorzuć cegiełkę' />
							</Flex>
						</RightRow2>
						<RightRow3>
							<Flex column>
								<Flex space>
									<CustomIcon icon={SecurityIcon} size={54} color='lightBlue' />
									<Flex column>
										<Text title='Kupujesz z Allegro Protect' />
										<Text wrap='true'>100% zakupów ze zwrotem pieniędzy do 48 h. Sprawdź szczegół</Text>
									</Flex>
								</Flex>
								<BorderAndTitle border title='Dorzuć cegiełkę' />
							</Flex>
						</RightRow3>
					</RightColumn>
				</MainContainer>
			</Flex>
		</Wrapper>
	);
};
