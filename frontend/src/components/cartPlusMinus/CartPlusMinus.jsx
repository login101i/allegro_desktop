import { useEffect, useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Text, Flex } from '..';
import { MinusPlusContainer, Square, Input } from './CartMinusPlus.styles';
import { theme } from '../../infrastructure/theme';
import { CartContext } from '../../context/cart.context';

const CartPlusMinus = ({ product = null, qty = 1, setQty = () => null, calculateTotal = false }) => {
	const [number, setNumber] = useState(qty);
	const { stock } = product;
	const { dispatch } = useContext(CartContext);

	const handleAddToCart = (product, qty) => {
		dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: { product, qty } });
	};

	const onChangeText = (text, value) => {
		if (value <= 0) return;
		setNumber(value);
		setQty(number + 1);
	};

	const plus = () => {
		if (number >= product.stock) return;
		setNumber(prev => prev + 1);
		if (calculateTotal) handleAddToCart(product,  1);
	};

	const minus = () => {
		if (number === 0) return;
		setNumber(prev => prev - 1);
		setQty(number - 1);
		if (calculateTotal) handleAddToCart(product, - 1);
	};

	useEffect(() => {
		setQty(number);
	}, [number]);

	return (
		<Flex column align>
			<Text size={16}>Ilość sztuk</Text>
			<MinusPlusContainer>
				<Square onClick={minus}>
					<RemoveIcon style={{ fontSize: '30px', margin: '10px' }} />
				</Square>
				<Input onChange={e => onChangeText(e.target.value)} value={number} type='number' />
				<Square onClick={plus}>
					<AddIcon style={{ fontSize: '30px', margin: '10px' }} />
				</Square>
			</MinusPlusContainer>
			{stock === 0 ? <Text color={theme.colors.ui.error}>Brak na magazynie</Text> : <Flex align>z {stock} sztuk</Flex>}
		</Flex>
	);
};

export default CartPlusMinus;
