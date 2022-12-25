import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Flex, Text, CustomInput, Button } from '../../../components';

const Description = ({ setCategory = () => null, setTitle, setDescription, category, data }) => {
	const handleTitle = e => {
		if (data.title === 40) return;
		e.preventDefault();
		setTitle(e.target.value);
	};
	const handleDescription = e => {
		if (data.description === 150) return;
		e.preventDefault();
		setDescription(e.target.value);
	};

	return (
		<>
			sdf
			<Flex column style={{ marginBottom: '20px' }}>
				<Text bold> Nazwa przedmiotu *</Text>
				<CustomInput
					required
					placeholder='Wpisz co chcesz sprzedać'
					borderradius={10}
					onChange={handleTitle}
					multiline
					rows='2'
					value={data.title}
					disabled={data?.title.length === 50}
				/>
				<Text textAlign='right' size={16}>
					{data.title.length}/40
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
					onChange={handleDescription}
					value={data.description}
					disabled={data?.description.length === 150}
				/>
				<Text textAlign='right' size={16}>
					{data.description.length}/150
				</Text>
			</Flex>
			{/* it doesn't work */}
			{/* <Flex column style={{ marginBottom: '20px' }}>
				<FormControl>
					<Select value={e => setCategory(e.target.value)}>
						<MenuItem value=''>
							<div>Wybierz kategorię</div>
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
			</Flex> */}
		</>
	);
};

export default Description;
