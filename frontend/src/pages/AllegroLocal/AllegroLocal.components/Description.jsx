import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Flex, Text, CustomInput, Button } from '../../../components';

const Description = ({ setCategory = () => null, setTitle, setDescription, category, data }) => {
	return (
		<>
			<Flex column style={{ marginBottom: '20px' }}>
				<Text bold> Nazwa przedmiotu *</Text>
				<CustomInput
					required
					placeholder='Wpisz co chcesz sprzedać'
					borderradius={10}
					onChange={e => setTitle(e.target.value)}
					multiline
					rows='2'
					value={data.title}
				/>
				<Text textAlign='right' size={16}>
					0/50
				</Text>
			</Flex>
			<Flex column style={{ marginBottom: '20px' }}>
				<Text bold> Opis przedmiotu</Text>
				<CustomInput
					placeholder='Powiedz kupującym coś więcej o przedmiocie'
					borderradius={10}
					multiline
					required
					rows='10'
					onChange={e => setDescription(e.target.value)}
					value={data.description}
				/>
			</Flex>

			<Flex column style={{ marginBottom: '20px' }}>
				<FormControl>
					<Select value={category}>
						<MenuItem value=''>
							<em>Wybierz kategorię</em>
						</MenuItem>
						<MenuItem value={'Pupil'}>Pupil</MenuItem>
						<MenuItem value={'Telefony'}>Telefony</MenuItem>
						<MenuItem value={'Perfumy'}>Perfumy</MenuItem>
						<MenuItem value={'Supermarket'}>Supermarket</MenuItem>
						<MenuItem value={'AGD'}>AGD</MenuItem>
						<MenuItem value={'Pupil'}>Pupil</MenuItem>
					</Select>
				</FormControl>

				<Text color='var(--grennLocalnie)'>Przeglądaj wszystkie kategorie</Text>
			</Flex>
		</>
	);
};

export default Description;
