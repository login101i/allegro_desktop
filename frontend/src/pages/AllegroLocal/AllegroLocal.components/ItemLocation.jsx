import React from 'react';
import { ForumOutlined } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { Flex, Text, CustomInput } from '../../../components';

const ItemLocation = ({ setRange, range, isMobile }) => {
	return (
		<Flex column>
			<Text title='Lokalizacja przedmiotu' />
			<Text title='adres' />
			{[
				'Kolonia Krzywosadz, Dobre-Kolonia',
				'Szostka 26, Radziejów',
				'Sędzin 7, Sędzin',
				'Zygmunta Kurka 13, Inowtoclaw',
				'Nowa lokalizacja',
			].map((rang, index) => (
				<Flex align key={rang + index}>
					<Checkbox value={rang} checked={rang === range} onClick={e => setRange(e.target.value)} />
					<Text>{rang}</Text>
				</Flex>
			))}
			<CustomInput
				placeholder='wpisz adres...'
				borderradius={10}
				rightPart={
					<InputAdornment position='end'>
						<ForumOutlined sx={{ color: 'var(--greenLocalnie)' }} />
					</InputAdornment>
				}
			/>
			<Text textAlign={isMobile ? 'center' : '"right"'} color='var(--greenLocalnie)' title='użyj mojej bieżącej lokalizacji' />
			<Flex space>
				<Flex align>
					<Checkbox />
					<Text>Pokaż numer telefonu</Text>
				</Flex>

				<CustomInput borderradius={10} width='150px'></CustomInput>
			</Flex>

			<Text title='Metody dostawy*' />
			<Flex space>
				<Text subTitle='Najpopularniejsze' />
				<Text subTitle='(uzupełniliśmy sugerowany koszt)' />
			</Flex>
			<Flex space>
				<Flex align>
					<Checkbox checked={true} />
					<Text>Allegro Paczkomaty InPost</Text>
				</Flex>

				<CustomInput placeholder='8,99' rightPart='zł' width='150px' borderradius={10} />
			</Flex>
			<Text wrap="true" style={{ padding: '20px' }}>
				Nadaj przesyłkę w dowolnym paczkomacie InPost! Za wysyłkę zapłacisz zawsze 8,99 zł, niezależnie od rozmiaru paczki. Możesz zwiększyć
				atrakcyjność oferty obniżając w polu powyżej kwotę, którą zapłaci Ci za tę wysyłkę kupujący.
			</Text>
			<Text textAlign='right' color='var(--greenLocalnie)'>
				Dowiedz się więcej
			</Text>
		</Flex>
	);
};

export default ItemLocation;
