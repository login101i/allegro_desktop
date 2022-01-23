import React from "react";
import styled from "styled-components";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import BorderAndTitle from "./BorderAndTitle";

import { Text, Flex } from "../components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid lightGrey;
	border-bottom: 1px solid lightGrey;
	margin: 10px 0px;
	padding: 5px 0px;
`;

const TextInfo = styled.div`
	display: flex;
	color: lightGrey;
	flex: 1;
	text-align: left;
`;

const dataArray = [
	{
		icon: LocalShippingOutlinedIcon,
		text: "Dostawa za darmo ",
		subTitle: "Przewidywana dostawa: za 48 - 53 dni u Ciebie",
		title: "Dostawa"
	},
	{
		icon: LocalShippingOutlinedIcon,
		text: "30 dni na odstąpienie od umowy",
		title: "Dostawa"
	},
	{
		icon: AccountBalanceWalletOutlinedIcon,
		text: "Wygodne płatności",
		subTitle: "raty zero",
		title: "raty zero"
	}
];

const Shipping = () => {
	return (
		<>
			<Container>
				{dataArray.map((data) => (
					<Flex space style={{ flexWrap: "wrap" }}>
						<TextInfo>
							<data.icon
								style={{
									fontSize: "30px",
									color: "lightGrey",
									marginRight: "10px"
								}}
							/>
							<Text subTitle={data.subTitle} size={16} wrap="true">
								{data.text}
							</Text>
						</TextInfo>
						<BorderAndTitle title={data.title} />
					</Flex>
				))}
			</Container>
		</>
	);
};

export default Shipping;
