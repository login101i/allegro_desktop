import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate, Link } from "react-router-dom";



import {
	Text,
	Button,
	BorderAndTitle,
	CustomInput,
	
	PageWidth
} from "../../../components";

import { loginUser } from "../../../redux/actions/userActions";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: auto;
`;

const Left1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	background-color: white;
	flex-grow: 1;
	padding: 20px;
`;

const Left2 = styled.div`
	background-color: white;
	padding: 0px 20px;
`;

const Right1 = styled.div`
	grid-area: 1 / 2 / 3 / 3;
	background-color: white;
	flex-grow: 1;
	padding: 20px;
`;

const FlexRow = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	margin: 14px 0px;
`;
const FlexRowBetween = styled(FlexRow)`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;
const FlexCol = styled(FlexRow)`
	flex-direction: column;
`;

const Break = styled.div`
	height: 1px;
	background-color: lightGrey;
	margin: 20px 0px;
	width: 100%;
`


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
	

		const body = {
			email,
			password
		};
		console.log(body);

		dispatch(loginUser(body));
		console.log("loguję użytkownika");
		navigate("/");
	};
	return (
		<PageWidth>
			<Container>
				<Left1>
					<Text size={30}> Zaloguj się </Text>
					<FlexRow>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Login lub email"
							disableUnderline={true}
						/>
						<FormControlLabel
							disabled
							control={<Checkbox />}
							label="Numer telefonu"
						/>
					</FlexRow>
					<FlexCol>
						<CustomInput
							fullWidth
							placeholder="Login lub e-mail"
							disableUnderline={true}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<CustomInput
							rightPart={<BorderAndTitle title={"pokaż"} />}
							onChange={(e) => setPassword(e.target.value)}
						></CustomInput>
					</FlexCol>
					<FlexRowBetween>
						<Text color="#00a790">Nie pamiętam hasła</Text>
						<Button onClick={handleLogin}>Zaloguj się</Button>
					</FlexRowBetween>
					<FlexRow>
						<Break />
						<Text> lub </Text>
						<Break />
					</FlexRow>
					<FlexRowBetween>
						<Button background="lightBlue">Faebook</Button>
						<Button outlined background="white" color="darkGrey">
							Google
						</Button>
					</FlexRowBetween>
				</Left1>

				<Left2>
					<FlexRow>
						<Text bold>Nie masz konta?</Text>
						<Link to="/register">
							<BorderAndTitle title="Zarejestruj się" />
						</Link>
					</FlexRow>
				</Left2>

				<Text style={{ margin: "10px" }}>
					Logując się do Allegro akceptujesz Regulamin w aktualnym brzmieniu
					obowiązującym od dnia 9.12.2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu są dostępne na stronie.
				</Text>

				<Right1></Right1>

			</Container>
		</PageWidth>
	);
};

export default Login;
