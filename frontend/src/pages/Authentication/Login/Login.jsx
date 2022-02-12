import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useMediaQuery } from "react-responsive";

import { screens } from "../../../components/responsive";
import { loginUser } from "../../../redux/actions/userActions";

import {
	Text,
	Button,
	BorderAndTitle,
	CustomInput,
	Flex,
	PageWidth
} from "../../../components";

import { Container, LeftContainer, RightContainer } from "./Login.styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const handleLogin = () => {
		const body = {
			email,
			password
		};
		dispatch(loginUser(body));
		navigate("/");
	};

	return (
		<PageWidth width={isMobile && "100%"}>
			<Container isMobile={isMobile}>
				<LeftContainer>
					<Text size={30}> Zaloguj się </Text>
					<Flex>
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
					</Flex>
					<Flex column>
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
					</Flex>
					<Flex space>
						<Text color="#00a790">Nie pamiętam hasła</Text>
						<Button onClick={handleLogin}>Zaloguj się</Button>
					</Flex>
					<Flex center>
						<Text>lub</Text>
					</Flex>
					<Flex space>
						<Button background="lightBlue">Faebook</Button>
						<Button outlined background="white" color="darkGrey">
							Google
						</Button>
					</Flex>
					<Flex borderTop />
					<Flex space>
						<Text bold>Nie masz konta?</Text>
						<Link to="/register">
							<BorderAndTitle title="Zarejestruj się" />
						</Link>
					</Flex>

					<Flex>
						<Text wrap>
							Logując się do Allegro akceptujesz Regulamin w aktualnym brzmieniu
							obowiązującym od dnia 9.12.2021. Informacje o planowanych oraz
							archiwalnych zmianach Regulaminu są dostępne na stronie.
						</Text>
					</Flex>
				</LeftContainer>

				{!isMobile && <RightContainer />}
			</Container>
		</PageWidth>
	);
};

export default Login;
