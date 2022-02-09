import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { Flex, Text, CustomInput } from "../../../components";

const ShippingMetod = ({ setShipping, shipping }) => {
	return (
		<>
			{[
				{ text: "Przesyłka kurierska - przedpłata", price: "11,50" },
				{ text: "List polecony priorytetowy", price: "8,40" },
				{ text: "Paczka pocztowa priorytetowa", price: "14,00" }
			].map((shipp) => (
				<Flex align space>
					<Flex align>
						{" "}
						<Checkbox
							value={shipp.text}
							checked={shipp.text === shipping}
							onClick={(val) => setShipping(val)}
						/>
						<Text>{shipp.text}</Text>
					</Flex>

					<CustomInput
						width="100px"
						borderRadius={10}
						placeholder={shipp.price}
						rightPart="zł"
					/>
				</Flex>
			))}

			<Flex align space>
				<Flex align>
					<Checkbox />
					<Text textAlign="right">Odbiór osobity - płatnośćprzy odbiorze</Text>
				</Flex>
				<Text>0 zł</Text>
			</Flex>

			<Text
				bold
				color="var(--greenLocalnie)"
				titole="Rozwiń więcej metod dostawy"
			/>
		</>
	);
};

export default ShippingMetod;
