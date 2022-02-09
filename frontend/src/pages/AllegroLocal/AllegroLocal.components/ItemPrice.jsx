import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { BorderContainer, BorderWithArrow } from "../AllegroLocal.styles";

import {
	Flex,
	Text,
	Button,
	CustomInput
} from "../../../components";

const ItemPrice = ({ setPrice, isMobile }) => {
	return (
		<>
			<Flex space>
				<Text title="cena przedmiotu*" />
				<Text title="Jak ustalić cenę?" color="var(--greenLocalnie)" />
			</Flex>
			<CustomInput
				borderRadius={10}
				placeholder="0,00"
				rightPart="zł"
				onChange={(e) => setPrice(e.target.value)}
				inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
			></CustomInput>
			<Flex align>
				<Checkbox />
				<Text>Do negocjacji</Text>
			</Flex>

			<BorderWithArrow>
				<Text color="var(--greenLocalnie)">NOWOŚĆ! </Text>
				<Text wrap>
					Twoje ogłoszenie zostanie oznaczone jako “do negocjacji”, a kupujący
					będą mogli w prosty sposób składać swoje oferty cenowe.
				</Text>
			</BorderWithArrow>
			<Flex align column={isMobile}>
				<Text>Chcesz sprzedać więcej niż jeden taki przedmiot?</Text>
				<Button background="#edecf7" borderRadius color="blue">
					dodaj przedmioty
				</Button>
			</Flex>
			<BorderContainer> </BorderContainer>
		</>
	);
};

export default ItemPrice;
