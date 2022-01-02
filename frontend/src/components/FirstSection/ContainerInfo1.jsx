import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Text, Flex } from "../../components";
import PayPalLogo from "../../assets/pictures/PayPalLogo.png";
import Logo2 from "../../assets/pictures/goodToSee3.png";
import Logo3 from "../../assets/pictures/goodToSee2.png";

import Button from "../../components/Button";

const Container = styled.div`
	min-height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	inline-size: 100%;
	overflow-wrap: break-word;
`;
const Icon = styled.img`
	height: 55px;
	margin-right: 10px;
`;

const ContainerInfo1 = () => {
	const { isAuthenticated, user } = useSelector((state) => state.auth);

	return (
		<Container>
			<Flex column space style={{ width: "85%", height: "90%" }}>
				{isAuthenticated ? (
					<Text title={"Cześć " + user.name + "!"} bold />
				) : (
					<Text title={"Witaj na allegro!"} bold />
				)}
				<Flex>
					<Icon src={PayPalLogo} />
					<Text>Twoje środki Allegro Pay: 4 000 zł.</Text>
				</Flex>
				<Flex>
					<Icon src={Logo2} />
					<Text>W Allegro Family darmowe dostawy dla 10 członków rodziny!</Text>
				</Flex>
				<Flex>
					<Icon src={Logo3} />
					<Text>W Allegro Family darmowe dostawy dla 10 członków rodziny</Text>
				</Flex>
				<Button title={"Poznaj swoje korzyści"} />
			</Flex>
		</Container>
	);
};

export default ContainerInfo1;
