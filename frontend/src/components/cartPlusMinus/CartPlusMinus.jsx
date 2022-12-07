import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Text, Button, Flex } from '..';
import { Container, MinusPlusContainer, Square, Input } from './CartMinusPlus.styles';

const CartPlusMinus = () => {
	const [number, setNumber] = useState(1);

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
		<Container>
			<Text size={16}>Ilość sztuk</Text>
			<Flex>
				<MinusPlusContainer>
					<Square onClick={() => minus()}>
						<RemoveIcon style={{ fontSize: '30px', margin: '10px' }} />
					</Square>
					<Input onChange={e => onChangeText(e.target.value)} value={number} type='number'  />
					<Square onClick={() => plus()}>
						<AddIcon style={{ fontSize: '30px', margin: '10px' }} />
					</Square>
				</MinusPlusContainer>
				<Flex align>z 198 sztuk</Flex>
			</Flex>

			<Button>Dodaj do koszyka</Button>
		</Container>
	);
};

export default CartPlusMinus;
