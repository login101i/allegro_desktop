import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Text, Button, Flex } from '..';
import { Container, MinusPlusContainer, Square, Input } from './CartMinusPlus.styles';

const CartPlusMinus = () => {
	const [number, setNumber] = useState(1);

	const onChangeText = (text, e) => {
		if (number <= 0) return;
		const newValue = e.target.value;
		setNumber(newValue);
	};

	const plus = () => {
		setNumber(number + 1);
		console.log('dodaje');
	};

	const minus = () => {
		if (number === 0) return;
		setNumber(number - 1);
	};

	return (
		<Container>
			<Text size={16}>Ilośc sztuk</Text>
			<Flex>
				<MinusPlusContainer>
					<Square onClick={() => minus()}>
						<RemoveIcon style={{ fontSize: '30px', margin: '10px' }} />
					</Square>
					<Input onChangeText={e => onChangeText(e)} value={number} />
					<Square onClick={() => plus()}>
						<AddIcon style={{ fontSize: '30px', margin: '10px' }} />
					</Square>
				</MinusPlusContainer>
				<Flex align>z 9910 sztuk</Flex>
			</Flex>

			<Button>Dodaj do koszyka</Button>
		</Container>
	);
};

export default CartPlusMinus;
