import React from "react";
import styled from "styled-components";

import Image31 from "../../assets/pictures/Image31.png";
import Image32 from "../../assets/pictures/Image32.png";
import Image33 from "../../assets/pictures/Image33.png";
import Image34 from "../../assets/pictures/Image34.png";
import Image35 from "../../assets/pictures/Image35.png";
import Image36 from "../../assets/pictures/Image36.png";
import Image37 from "../../assets/pictures/Image37.png";

import { Text } from "../../components";

const data = [
	{ id: 1, img: Image31, title: "Jesienna Pielęgnacja" },
	{ id: 2, img: Image32, title: "Jesienna Pielęgnacja" },
	{ id: 3, img: Image33, title: "Strefa Rehabilitacji" },
	{ id: 4, img: Image34, title: "Telemedycyna [Vouchery] " },
	{ id: 5, img: Image35, title: "Elektronika - top 100 " },
	{ id: 6, img: Image36, title: "Okacje na smartfony " },
	{ id: 7, img: Image37, title: "Telewizory i akcesoria " },
	{ id: 8, img: Image31, title: "Bramy i ogrodzenia" },
	{ id: 9, img: Image32, title: "Jesienna Pielęgnacja" },
	{ id: 10, img: Image33, title: "Strefa Rehabilitacji" },
	{ id: 11, img: Image34, title: "Telemedycyna [Vouchery] " },
	{ id: 12, img: Image35, title: "Elektronika - top 100 " },
	{ id: 13, img: Image36, title: "Okacje na smartfony " },
	{ id: 14, img: Image37, title: "Telewizory i akcesoria " }
];

const Container = styled.div`
	display: flex;
	width: 100vw;
	// justify-content: space-between;
	align-items: center;
	margin-top: 16px;
	background-color: white;
	overflow-x: scroll;
	scrollbar-color: rebeccapurple green;
`;

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin: 2px 10px;
	max-width: 130px;
	height: 160px;
	scrollbar-color: rebeccapurple green;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const ThirdSection = () => {
	return (
		<Container>
			{data.map((item) => (
				<ItemContainer key={item.id}>
					<Image src={item.img} />
					<Text>{item.title}</Text>
				</ItemContainer>
			))}
		</Container>
	);
};

export default ThirdSection;
