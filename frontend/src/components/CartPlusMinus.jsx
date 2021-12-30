import React, { useState } from "react";
import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Text, Button } from "../components";

const Container = styled.div`
	display: flex;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const MinuPlusContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	margin-right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 8px;
`;

const Square = styled.div`
	width: 40px;
	height: 40px;
	border: 1px solid lightGrey;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const Input = styled.input`
	width: 70px;
	height: 40px;
	border: 1px solid lightGrey;
	outline: none;
	text-align: center;
	font-size: 16px;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: center;
`;

const CartPlusMinus = () => {
	const [number, setNumber] = useState(1);

	const onChangeText = (text, e) => {
		if (number <= 0) return;
		const newValue = e.target.value;
		setNumber(newValue);
	};

	const plus = () => {
		setNumber(number + 1);
		console.log("dodaje");
	};

	const minus = () => {
		if (number === 0) return;
		setNumber(number - 1);
	};

	return (
		<Container>
			<Text size={16}>Ilośc sztuk</Text>
			<FlexRow>
				<MinuPlusContainer>
					<Square onClick={() => minus()}>
						<RemoveIcon style={{ fontSize: "30px", margin: "10px" }} />
					</Square>
					<Input onChangeText={(e) => onChangeText(e)} value={number} />
					<Square onClick={() => plus()}>
						<AddIcon style={{ fontSize: "30px", margin: "10px" }} />
					</Square>
				</MinuPlusContainer>
				<Text>z 9910 sztuk</Text>
			</FlexRow>

			<Button title={"dodaj do koszyka"} />
		</Container>
	);
};

export default CartPlusMinus;
