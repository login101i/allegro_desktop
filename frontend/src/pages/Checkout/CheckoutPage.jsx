import { useEffect, useState, useContext } from 'react';
import {
	Text,
	Flex,
	Button,
	CustomIcon,
	CartPlusMinus,
	BorderAndTitle,
	PriceDiscount,
	RedirectOnClick,
	ImageComponent,
} from '../../components';
import { getUserCart } from '../../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
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
} from './CheckoutPage.styles';
import { colors, theme } from '../../infrastructure/theme';
import { CartContext } from '../../context/cart.context';
import { ImageContainer } from '../../components/imageComponent/ImageComponent.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../components/responsive';
import { useSelector } from 'react-redux';

export const CheckoutPage = () => {
	const [products, setProducts] = useState([]);
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	useEffect(() => {}, []);
	const navigate = useNavigate();

	const [total, setTotal] = useState(0);
	const { cart, dispatch } = useContext(CartContext);

	useEffect(() => {
		getUserCart().then(res => {
			setProducts(res.data.products);
			setTotal(res.data.cartTotal);
		});
	}, []);

	const handleDeleteFromCart = product => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: product });
	};

	const getTotal = () => {
		return cart.reduce((currentValue, nextValue) => {
			return currentValue + nextValue.totalProductPrice;
		}, 0);
	};
	const saveOrderToDb = () => {
		// console.log('cart', JSON.stringify(cart, null, 4));
		userCart(cart)
			.then(res => {
				console.log('Cart post response is : ', res);
				if (res.data.ok) navigate('/checkout');
			})
			.catch(err => console.log('cart save err', err));
	};

	return (
		<Wrapper>
			<CartStagesContainer></CartStagesContainer>
			<Flex align>
				<MainContainer isMobile={isMobile}>
					<LeftColumn>
						<LeftRow1>
							<Text title='Dane odbiorcy przesyłki'></Text>
							<BorderAndTitle />
							<Flex column>
								<Text>Maciej Kruszyniak</Text>
								<Text>Szostka 26 </Text>
								<Text>88-200 Radziejów </Text>
								<Text>+48 698673254</Text>
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
									<Text>{getTotal()} zł</Text>
								</Flex>
								<Flex align column>
									<Flex>
										<Button background={theme.colors.lightBlue} width='220px' capitalize onClick={saveOrderToDb}>
											Zapłać później
										</Button>
									</Flex>
									<Flex>
										<Button background='var(--allegroColor)' width='220px' capitalize onClick={saveOrderToDb}>
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

			<Text>Hello from checkoutPage</Text>
			<Flex>
				<Flex column>
					{products.map((p, i) => (
						<Flex key={i}>
							<Text wrap='true'>
								{p.product.title} = {p.price + ' zł *' + p.qty} // {p.totalProduct} zł
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>
			<Flex>
				<Text bold>Cart Total: {total} zł</Text>
			</Flex>
			<RedirectOnClick to='/payment '>
				<Button color='white' background='green'>
					Zapłać teraz
				</Button>
			</RedirectOnClick>
		</Wrapper>
	);
};
