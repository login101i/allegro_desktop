import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Flex, Text, CustomInput } from "../../../components";

const Description = ({ setCategory, setTitle, setDescription, category }) => {
	return (
		<>
			<Flex column style={{ marginBottom: "20px" }}>
				<Text bold> Nazwa przedmiotu *</Text>
				<CustomInput
					required
					placeholder="Wpisz co chcesz sprzedać"
					borderRadius={10}
					onChange={(e) => setTitle(e.target.value)}
					multiline
					rows="2"
				/>
				<Text textAlign="right" size={16}>
					0/50
				</Text>
			</Flex>
			<Flex column style={{ marginBottom: "20px" }}>
				<Text bold> Opis przedmiotu</Text>
				<CustomInput
					placeholder="Powiedz kupującym coś więcej o przedmiocie"
					borderRadius={10}
					multiline
					required
					rows="10"
					onChange={(e) => setDescription(e.target.value)}
				/>
			</Flex>

			<Flex column style={{ marginBottom: "20px" }}>
				<FormControl>
					<Select
						value={category}
						onChange={(event) => setCategory(event.target.value)}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value="" disabled>
							<em>Wybierz kategorię</em>
						</MenuItem>
						<MenuItem value={"Pupil"}>Pupil</MenuItem>
						<MenuItem value={"Telefony"}>Telefony</MenuItem>
						<MenuItem value={"Perfumy"}>Perfumy</MenuItem>
						<MenuItem value={"Supermarket"}>Supermarket</MenuItem>
						<MenuItem value={"AGD"}>AGD</MenuItem>
						<MenuItem value={"Pupil"}>Pupil</MenuItem>
					</Select>
				</FormControl>

				<Text color="var(--grennLocalnie)">Przeglądaj wszystkie kategorie</Text>
			</Flex>
		</>
	);
};

export default Description;
