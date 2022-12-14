import React from 'react';
import { Link } from 'react-router-dom';
import { ImageComponent, Text, Flex, RedirectOnClick, ProductContainer, Button, PriceDiscount, BorderAndTitle } from '../../components';
import { ButtonContainer } from '../button/Button.styles';
import { Smart } from '../priceDiscount/PriceDiscount.styles';
import { AnotherOfferContainer, MainContainer, ModalContainer } from './AddToCartModal.styles';
import SmartImage from '../../assets/pictures/Smart.svg';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
const AddToCartModal = ({ product = [], dispatch }) => {
	console.group(product);
	const HandleCloseCartModal = () => {
		dispatch({ type: 'CART_MODAL_CLOSE' });
	};
	const { products } = useSelector(state => state.products);

	return (
		<ModalContainer>
			<Flex space fullWidth>
				<Text title='Dodałeś przedmiot do koszyka' />
				<CustomIcon size={22} onClick={HandleCloseCartModal} icon={CloseIcon}/>
				
			</Flex>
			<Flex fullWidth>
				<ImageComponent img={product.img[0].url} size={100} />
				<Flex column>
					<Flex>
						<PriceDiscount price={product.price} />
						<ImageComponent img={SmartImage} size={30} />
					</Flex>
					<Text title={product.title} />
					<Text>{product.name}</Text>
				</Flex>
			</Flex>

			<Flex space fullWidth>
				<Flex fullWidth>
					<Button onClick={HandleCloseCartModal}>Kupuj dalej</Button>
				</Flex>
				<Link to='/cart'>
					<Button onClick={HandleCloseCartModal}>idź do koszyka</Button>
				</Link>
			</Flex>
			<BorderAndTitle border title='-' />
			<Text title='Sprzedający również poleca:' />
			<AnotherOfferContainer>
				{products &&
					products
						.filter(item => item.seller === product.seller)
						.map(product => (
							<ProductContainer
								key={product._id}
								img={product.img[0].url}
								discount={product.discount}
								oldPrice={product.oldPrice}
								price={product.price}
								seller={product.seller}
								extended={true}
								height='140px'
								imageSize='120px'
							/>
						))}
			</AnotherOfferContainer>
		</ModalContainer>
	);
};

export default AddToCartModal;
