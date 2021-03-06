import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

import { Text, Button, BorderAndTitle, PageWidth } from "../../../components";

import { registerUser } from "../../../redux/actions/userActions";

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

const Register = ({ history }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, navigate]);

	const handleRegister = () => {
		const body = {
			name,
			email,
			password
		};
		console.log(body);

		dispatch(registerUser(body));
		navigate("/");
	};

	return (
		<PageWidth>
			<Container>
				<Left1>
					<Text size={30}> Zarejestruj si?? </Text>
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
							placeholder="Has??o"
							disableUnderline={true}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={<BorderAndTitle title={"poka??"} />}
						></CustomInput>
					</FlexCol>
					<FlexRowBetween>
						<Button onClick={handleRegister}>Zarejestruj si??</Button>
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
						<Text bold>Masz ju?? konto?</Text>
						<Link to="/login">
							<BorderAndTitle title="Zaloguj si??" />
						</Link>
					</FlexRow>
				</Left2>

				<Text style={{ margin: "10px" }}>
					Loguj??c si?? do Allegro akceptujesz Regulamin w aktualnym brzmieniu
					obowi??zuj??cym od dnia 9.12.2021. Informacje o planowanych oraz
					archiwalnych zmianach Regulaminu s?? dost??pne na stronie.
				</Text>

				<Right1></Right1>
			</Container>
		</PageWidth>
	);
};

export default Register;
