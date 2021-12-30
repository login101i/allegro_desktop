import React from "react";
import styled from "styled-components";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import BorderAndTitle from "./BorderAndTitle";

import { Text } from "./Text";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid lightGrey;
	border-bottom: 1px solid lightGrey;
	margin: 10px 0px;
	padding: 5px 0px;
`;
const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 3px 0px;
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
					<FlexRow>
						<TextInfo>
							<data.icon
								style={{
									fontSize: "30px",
									color: "lightGrey",
									marginRight: "10px"
								}}
							/>
							<Text subTitle={data.subTitle} size={16}>
								{data.text}
							</Text>
						</TextInfo>
						<BorderAndTitle title={data.title} />
					</FlexRow>
				))}
			</Container>
		</>
	);
};

export default Shipping;
