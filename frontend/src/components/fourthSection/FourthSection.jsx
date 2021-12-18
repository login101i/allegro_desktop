import React, { useState } from "react";
import styled from "styled-components";

import ProductContainer from "../ProductContainer";
import {
	oponyArray,
	okazjeArray,
	ratyArray,
	charityArray
} from "../../productCategories";

import DirectionArrows from "../DirectionArrows";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	margin-top: 16px;
	background-color: white;
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
	const [active, setActive] = useState(true);
	const [okazje, setOkazje] = useState(true);
	const [opony, setOpony] = useState(true);
	const [bilety, setBilety] = useState(true);
	const [charity, setCharity] = useState(true);

	const [categoryArray, setCategoryArray] = useState(okazjeArray);
	const [category, setCategory] = useState(okazje);

	const handleClick = (category, array) => {
		setCategory(category);
		setCategoryArray(array);
	};

	return (
		<Container>
			<Bar>
				<BarTitle active onClick={() => handleClick(okazje, okazjeArray)}>
					Strefa okazji
				</BarTitle>
				<BarTitle onClick={() => handleClick(opony, oponyArray)}>
					Opony zimowe Continental
				</BarTitle>
				<BarTitle onClick={() => handleClick(bilety, ratyArray)}>
					Strefa Biletów
				</BarTitle>
				<BarTitle onClick={() => handleClick(charity, charityArray)}>
					Strefa Rat Zero
				</BarTitle>
				<BarTitle onClick={() => handleClick(charity, charityArray)}>
					Strefa ogłoszeń
				</BarTitle>
				<BarTitle onClick={() => handleClick(charity, charityArray)}>
					Strefa charytatywna
				</BarTitle>
				<BarTitle onClick={() => handleClick(charity, charityArray)}>
					Strefa rat zero
				</BarTitle>
			</Bar>

			{category && (
				<ProductContainer1>
					{categoryArray.map((okazja) => (
						<ProductContainer img={okazja.img} price={okazja.price} />
					))}
				</ProductContainer1>
			)}
		</Container>
	);
};

export default FourthSection;
