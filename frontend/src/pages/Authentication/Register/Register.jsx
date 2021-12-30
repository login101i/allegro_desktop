import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Input, Button as MuButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LogoWhite from "../../../assets/pictures/logoWhite.svg";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import { Text, Button, BorderAndTitle } from "../../../components";

import { registerUser } from "../../../redux/actions/userActions";

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
	justify-content: right;
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

const Register = ({ history }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(name);
	console.log(email);
	console.log(password);

	const dispatch = useDispatch();
	const { isAuthenticated, error, loading } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
	}, [isAuthenticated]);

	const handleRegister = () => {
		// 	const formData = new FormData();
		// 	formData.set("name", name);
		// 	formData.set("email", email);
		// 	formData.set("password", password);

		const body = {
			name,
			email,
			password
		};
		console.log(body);

		dispatch(registerUser(body));
		console.log("rejestruję użytkownika");
		history.push("/");
	};

	return (
		<>
			<Container>
				<Left1>
					<Text size={30}> Zarejestruj się </Text>
					<FlexRow>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Login lub email"
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
							type="name"
							placeholder="name"
							disableunderline="true"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<CustomInput
							fullWidth
							type="email"
							placeholder="email"
							disableunderline="true"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></CustomInput>
						<CustomInput
							fullWidth
							type="password"
							placeholder="Hasło"
							disableUnderline={true}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={<BorderAndTitle title={"pokaż"} />}
						></CustomInput>
					</FlexCol>
					<FlexRowBetween>
						<Button onClick={handleRegister}>Zarejestruj się</Button>
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

export default Register;
