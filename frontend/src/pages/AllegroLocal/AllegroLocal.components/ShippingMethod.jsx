import React from 'react';
import Checkbox from '@mui/material/Checkbox';

import { Flex, Text, CustomInput } from '../../../components';

const ShippingMethod = ({ setShipping, shipping }) => {
	return (
		<>
			{[
				{ text: 'Przesyłka kurierska - przedpłata', price: '11,50' },
				{ text: 'List polecony priorytetowy', price: '8,40' },
				{ text: 'Paczka pocztowa priorytetowa', price: '14,00' },
			].map((shipp, index) => (
				<Flex align space key={shipp.text + index}>
					<Flex align>
						{' '}
						<Checkbox value={shipp.text} checked={shipp.text === shipping} onClick={e => setShipping(e.target.value)} />
						<Text>{shipp.text}</Text>
					</Flex>

					<CustomInput width='100px' borderradius={10} placeholder={shipp.price} rightPart='zł' />
				</Flex>
			))}

			<Flex align space>
				<Flex align>
					<Checkbox />
					<Text textAlign='right'>Odbiór osobity - płatnośćprzy odbiorze</Text>
				</Flex>
				<Text>0 zł</Text>
			</Flex>

			<Text bold color='var(--greenLocalnie)' titole='Rozwiń więcej metod dostawy' />
		</>
	);
};

export default ShippingMethod;
