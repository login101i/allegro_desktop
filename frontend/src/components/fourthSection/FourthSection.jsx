import React, { useState } from "react";
import styled from "styled-components";

import ProductContainer from "../ProductContainer";
import {
	oponyArray,
	okazjeArray,
	ratyArray,
	charityArray
} from "../../productCategories";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	justify-content: space-between;
	margin-top: 16px;
	background-color: white;
	overflow-x: scroll;
	white-space: nowrap;
`;

const Bar = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;

const BarTitle = styled.div`
	text-transform: uppercase;
	margin: 0px 10px;
	cursor: pointer;
	transition: 0.15s;
	padding: 13px 2px;
	border-bottom: ${(props) =>
		props.active ? " 3px solid #ff5a00" : " 3px solid transparent"};
	color: ${(props) => (props.active ? "#ff5a00" : "grey")};

	&:hover {
		color: ${(props) => (props.active ? "#ff5a00" : "var(--linkColor)")};
	}
`;

const ProductContainer1 = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 10px;
`;

const FourthSection = () => {
	// const [okazje, setOkazje] = useState(true);
	// const [opony, setOpony] = useState(true);
	// const [bilety, setBilety] = useState(true);
	// const [charity, setCharity] = useState(true);

	const [categoryArray, setCategoryArray] = useState(okazjeArray);

	const handleClick = (array) => {
		// setCategory(category);
		setCategoryArray(array);
	};
	const data = [
		{ id: 1, title: "Strefa okazji", array: okazjeArray },
		{
			id: 2,
			title: "Opony zimowe Continental",
			array: oponyArray
		},
		{ id: 3, title: "Strefa Biletów", array: ratyArray },
		{
			id: 4,
			title: "Strefa Rat Zero  ",
			array: charityArray
		},
		{ id: 5, title: "Strefa ogłoszeń  ", array: okazjeArray },
		{
			id: 6,
			title: "Strefa charytatywna  ",
			array: charityArray
		},
		{
			id: 7,
			title: "Strefa charytatywna  ",
			array: charityArray
		},
		{ id: 8, title: "Strefa rat zero", array: charityArray }
	];
	return (
		<Container>
			<Bar>
				{data.map(({ id, array, title }) => (
					<BarTitle key={id} onClick={() => handleClick(array)}>
						{title}
					</BarTitle>
				))}
			</Bar>

			<ProductContainer1>
				{categoryArray.map((okazja) => (
					<ProductContainer
						key={okazja.id}
						img={okazja.img}
						price={okazja.price}
					/>
				))}
			</ProductContainer1>
		</Container>
	);
};

export default FourthSection;
