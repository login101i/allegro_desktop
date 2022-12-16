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


	const handlePayment = () => {
		navigate('/payment');
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
									<Text>{total} zł</Text>
								</Flex>
								<Flex align column>
									<Flex>
										<Button background={theme.colors.lightBlue} width='220px' capitalize onClick={handlePayment}>
											Zapłać teraz
										</Button>
									</Flex>
								</Flex>
								<BorderAndTitle />
								<BorderAndTitle title='kontynuuj zakupy' />
							</Flex>
						</RightRow1>
					</RightColumn>
				</MainContainer>
			</Flex>
		</Wrapper>
	);
};
