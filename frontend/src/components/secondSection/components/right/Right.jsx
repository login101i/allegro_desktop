import React from "react";

import {
	Container,
	Block1,
	Block2,
	Block3,
	Block4,
	BlockTitle
} from "./Right.styles";

export const Right = () => {
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
