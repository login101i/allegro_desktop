import { useState, useEffect, useRef, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PriceDiscount from '../../../components/priceDiscount/PriceDiscount';
import { screens } from '../../../../src/components/responsive';
import { Flex, CustomIcon, Shipping, CartPlusMinus, Text, DirectionArrows, RedirectOnClick, Button } from '../../../components';
import { useResize } from '../../../utils/useResize';
import { CartContext } from '../../../context/cart.context';
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
	GalleryContainer,
	CloseButtonContainer,
	GalleryLengthIndicator,
	GalleryWrapper,
} from './ProductDetailInfo.styles';
import { AddToCartModal } from '../../../components';

export const ProductDetailsInfo = ({ product }) => {
	const [gallery, setGallery] = useState(false);

	const [imageIndex, setImageIndex] = useState(0);

	const imageRef = useRef();
	const { width: imageWidth } = useResize(imageRef);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const { dispatch, cartModal } = useContext(CartContext);

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

	const handleGallery = (index = 0) => {
		setImageIndex(index);
		setGallery(!gallery);
	};

	const handleAddToCart = product => {
		console.log('dodano do koszyka');
		dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: product });
		dispatch({ type: 'CART_MODAL_OPEN' });
	};
	useEffect(() => {
		const galleryWidth = img.length * imageWidth;
	}, []);

	const leftPart = ({ isMobile }) => {
		return (
			<Left isMobile={isMobile}>
				{img.length > 1 ? (
					<DirectionArrows align='center'>
						<MainImage src={img[0].url} isMobile={isMobile} onClick={() => handleGallery()} />
					</DirectionArrows>
				) : (
					<MainImage src={img[0].url} isMobile={isMobile} onClick={() => handleGallery()} />
				)}
				<ImagesThumbnails>
					{img.map((image, index) => (
						<ImageThumb src={image.url} key={image.url + index} onClick={() => handleGallery(index)} />
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
				<Text size={28} bold wrap='true'>
					{title}
				</Text>
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
				<Flex >
					<Button onClick={() => handleAddToCart(product)}>Dodaj do koszyka</Button>
				</Flex>
				<RedirectOnClick to={`/cart`}>
					<Button onClick={() => handleAddToCart(product)}>Kupuję i płacę ({product.price} zł)</Button>
				</RedirectOnClick>
			</Right>
		);
	};

	const galleryComponent = () => {
		return (
			gallery && (
				<GalleryWrapper>
					<CloseButtonContainer>
						<CustomIcon icon={CloseIcon} color='white' onClick={handleGallery} />
					</CloseButtonContainer>

					<GalleryContainer ref={imageRef}>
						{img.map((image, index) => (
							<MainImage src={image.url} key={image.url + index} />
						))}
						<GalleryLengthIndicator>
							{imageIndex + 1} / {img.length}
						</GalleryLengthIndicator>
					</GalleryContainer>
				</GalleryWrapper>
			)
		);
	};

	if (isMobile)
		return (
			<>
				<Container isMobile={isMobile}>
					<Flex column>
						{leftPart(isMobile)}
						{rightPart(isMobile)}
					</Flex>
				</Container>
				{gallery && galleryComponent()}
			</>
		);
	else
		return (
			<>
				{product && (
					<>
						<Container cartModal>
							{leftPart(isMobile)}
							{rightPart(isMobile)}
							{/* {cartModal && <AddToCartModal product={product} dispatch={dispatch} />} */}
						</Container>
						{gallery && galleryComponent()}
					</>
				)}
			</>
		);
};
