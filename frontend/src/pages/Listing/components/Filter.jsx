import React from "react";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";

import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Text, Button, Flex } from "../../../components";

import { FilterContainer, CustomInput } from "../Listing.styles";

import { productCategories } from "../../../utils/data";

const Filter = ({
	range,
	handleRange,
	setMinPrice,
	priceMin,
	setMaxPrice,
	priceMax,
	setCategory,
	openRatings,
	value,
	handleValue,
	filterFunc
}) => {
	return (
		<FilterContainer>
			<Text bold size={24}>
				Podkategorie
			</Text>
			<Text bold>Cena (zł)</Text>
			{["poniżej 10zł", "10 zł do 50zł", "50zł do 100zł", "powyżej 100zł"].map(
				(rang) => (
					<Flex>
						<Checkbox
							value={rang}
							checked={rang === range}
							onClick={() => handleRange(rang)}
						/>
						<Text>{rang}</Text>
					</Flex>
				)
			)}
			<Flex style={{ width: "90%" }} align="center">
				<CustomInput
					onChange={(e) => setMinPrice(e.target.value)}
					placeholder="od"
					value={priceMin}
				/>
				-
				<CustomInput
					onChange={(e) => setMaxPrice(e.target.value)}
					placeholder="do"
					value={priceMax}
				/>
			</Flex>
			<Text bold>Kategorie</Text>
			{productCategories.map((c) => (
				<Text hovered key={c} onClick={() => setCategory(c)}>
					{c}
				</Text>
			))}
			<Flex style={{ width: "90%" }}>
				<Text bold>Ocena Produktu</Text>
				<ArrowBackIosIcon
					onClick={() => console.log("hihihi")}
					style={{ fontSize: "16px" }}
				/>
			</Flex>
			<Text
				wrap
				subTitle="Średnia ocena produktu na podstawie opinii klientów. Oferty tego samego produktu mają tę samą ocenę."
			></Text>
			{openRatings &&
				[5.0, 4.0, 3.5].map((r, index) => (
					<Flex style={{ width: "90%" }} key={index}>
						<Checkbox
							checked={r === value}
							value={r}
							onClick={() => handleValue(r)}
						/>

						<Text>od {r.toString()}</Text>
						<Stack spacing={1}>
							<Rating defaultValue={r} precision={0.5} readOnly />
						</Stack>
					</Flex>
				))}
			<Button title="Filtruj" onClick={filterFunc} width />
		</FilterContainer>
	);
};

export default Filter;
