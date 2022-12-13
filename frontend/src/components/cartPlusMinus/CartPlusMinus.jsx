import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Text, Flex } from '..';
import { Container, MinusPlusContainer, Square, Input } from './CartMinusPlus.styles';
import { productCategories } from '../../utils/data';

const CartPlusMinus = ({ product = [] }) => {
	const [number, setNumber] = useState(1);

	const { stock = 0 } = product;
	const onChangeText = (text, value) => {
		if (value <= 0) return;
		const newValue = value;
		setNumber(value);
	};

	const plus = () => {
		setNumber(prev => prev + 1);
	};

	const minus = () => {
		if (number === 0) return;
		setNumber(prev => prev - 1);
	};

	return (
		<Flex column align>
			<Text size={16}>Ilość sztuk</Text>

			<MinusPlusContainer>
				<Square onClick={() => minus()}>
					<RemoveIcon style={{ fontSize: '30px', margin: '10px' }} />
				</Square>
				<Input onChange={e => onChangeText(e.target.value)} value={number} type='number' />
				<Square onClick={() => plus()}>
					<AddIcon style={{ fontSize: '30px', margin: '10px' }} />
				</Square>
			</MinusPlusContainer>
			<Flex align>z {stock} sztuk</Flex>
		</Flex>
	);
};

export default CartPlusMinus;
