import React from "react";

import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 18px;
	grid-row-gap: 18px;
	width: 100%;
`;

const Block1 = styled.div`
	display: flex;

	background: orange;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	grid-area: 1 / 1 / 2 / 2;
`;
const Block2 = styled.div`
	display: flex;

	background: orange;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	grid-area: 1 / 2 / 2 / 3;
`;
const Block3 = styled.div`
	display: flex;
	background: orange;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	grid-area: 2 / 1 / 3 / 2;
`;
const Block4 = styled.div`
	display: flex;

	background: orange;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	grid-area: 2 / 2 / 3 / 3;
`;

const BlockTitle = styled.span`
	font-weight: 600;
	text-transform: upper-case;
	font-size: 23px;
	padding: 20px;
	text-align: center;
`;

const Right = () => {
	return (
		<Container>
			<Block1>
				<BlockTitle>Monitory</BlockTitle>
			</Block1>
			<Block2>
				<BlockTitle>Tablety</BlockTitle>
			</Block2>
			<Block3>
				<BlockTitle>Urządzenia VR</BlockTitle>
			</Block3>
			<Block4>
				<BlockTitle>Akcesoria PC</BlockTitle>
			</Block4>
		</Container>
	);
};

export default Right;
