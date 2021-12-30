import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Input, Button as MuButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LogoWhite from "../../../assets/pictures/logoWhite.svg";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import { Text, Button, BorderAndTitle } from "../../../components";

import { loginUser } from "../../../redux/actions/userActions";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	width: 80%;
	height: auto;
	margin-top: 16px;
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

const CustomInput = styled(Input)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Break = styled.div`
	height: 1px;
	background-color: lightGrey;
	margin: 20px 0px;
	width: 100%;
`;

const InnerContainer = styled.div`
	padding: 20px;
	width: 100%;
`;

const EndLabel = styled.div`
	margin-top: 30px;
	background-color: rgb(60, 80, 82);
	width: 80%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;
const Logo = styled.img`
	height: 43px;
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		// 	const formData = new FormData();
		// 	formData.set("name", name);
		// 	formData.set("email", email);
		// 	formData.set("password", password);

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
		<>
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
							fullWidth
							placeholder="Hasło"
							disableUnderline={true}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={<BorderAndTitle title={"pokaż"} />}
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
						<BorderAndTitle title="Zarejestruj się" />
					</FlexRow>
				</Left2>

				<Text style={{ margin: "10px" }}>
					Logując się do Allegro akceptujesz Regulamin w aktualnym brzmieniu
					obowiązującym od dnia 9.12.2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu są dostępne na stronie.
				</Text>

				<Right1></Right1>
			</Container>
			<EndLabel>
				<Wrapper>
					<Text color="white">
						Korzystanie z serwisu oznacza akceptację regulaminu
					</Text>
					<Logo src={LogoWhite} alt="Allegro" />
				</Wrapper>
			</EndLabel>
		</>
	);
};

export default Login;
