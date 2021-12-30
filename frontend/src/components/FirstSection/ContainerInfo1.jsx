import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Text } from "../../components/Text";
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
`;
const XX = styled.div`
	height: 90%;
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Icon = styled.img`
	height: 55px;
	margin-right: 10px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const ContainerInfo1 = () => {
	const { loading, isAuthenticated, error, user } = useSelector(
		(state) => state.auth
	);

	return (
		<Container>
			<XX>
				{isAuthenticated ? (
					<Text title={"Cześć " + user.name + "!"} size={20} bold />
				) : (
					<Text title={"Witaj na allegro!"} size={20} bold />
				)}
				<Wrapper>
					<Icon src={PayPalLogo} />
					<Text title={"Twoje środki Allegro Pay: 4 000 zł."} />
				</Wrapper>
				<Wrapper>
					<Icon src={Logo2} />
					<Text
						title={"W Allegro Family darmowe dostawy dla 10 członków rodziny!"}
					/>
				</Wrapper>
				<Wrapper>
					<Icon src={Logo3} />
					<Text
						title={"W Allegro Family darmowe dostawy dla 10 członków rodziny"}
					/>
				</Wrapper>
				<Button title={"Poznaj swoje korzyści"} />
			</XX>
		</Container>
	);
};

export default ContainerInfo1;
