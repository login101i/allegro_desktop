import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { Text, Button, CustomIcon, Flex } from '../../../../components';

import { Center, CenterContainer, SearchContainer, SelectContainer, Input, Option } from './CenterPart.styles';

export const CenterPart = ({ isMobile }) => {
	const [keyword, setKeyword] = useState('');

	const navigate = useNavigate();

	const searchHandler = e => {
		e.preventDefault();

		if (keyword.trim()) {
			navigate(`/listing/${keyword}`);
		} else {
			navigate('/');
		}
	};
	return (
		<Center isMobile={isMobile}>
			<CenterContainer onSubmit={searchHandler} isMobile={isMobile}>
				<SearchContainer>
					<Input placeholder='Czego szukasz?' type='text' onChange={e => setKeyword(e.target.value)} />
					<Text color='var(--linkColor)'>szukaj wielu</Text>
				</SearchContainer>
				{isMobile ? (
					<Flex>
						<SelectContainer>
							<Option value=''>Wszystkie kategorie</Option>
							<Option value=''>Zegarki</Option>
						</SelectContainer>
						<Button type='submit' onClick={searchHandler} width='150px'>
							Szukaj
						</Button>
					</Flex>
				) : null}
				{isMobile ? null : (
					<Button
						type='submit'
						onClick={searchHandler}
						width='140px'
						style={{
							padding: '0px',
							marginRight: '0px',
						}}
					>
						<Text color='white'>Szukaj</Text>
						<CustomIcon icon={SearchIcon} color='#fffafa' style={{ marginRight: '0px' }} />
					</Button>
				)}
			</CenterContainer>
		</Center>
	);
};
