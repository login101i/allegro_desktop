import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../../components/responsive';
import { loginUser } from '../../../redux/actions/userActions';
import { Text, Button, BorderAndTitle, CustomInput, Flex, PageWidth, ErrorMessage } from '../../../components';
import { Container, LeftContainer, RightContainer } from './Login.styles';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const { isAuthenticated, error } = useSelector(state => state.auth);
	const disabled = !email || password.length < 6;

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	const body = {
		email,
		password,
	};

	const handleLogin = () => {
		dispatch(loginUser(body));
	};

	return (
		<PageWidth width={isMobile && '100%'}>
			<Container isMobile={isMobile}>
				<LeftContainer isMobile={isMobile}>
					<Text size={30}> Zaloguj się </Text>
					<Flex>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Login lub email' disableUnderline={true} />
						<FormControlLabel disabled control={<Checkbox />} label='Numer telefonu' />
					</Flex>
					<Flex column>
						<CustomInput fullWidth placeholder='Login lub e-mail' disableunderline={true} onChange={e => setEmail(e.target.value)} />
						<CustomInput rightPart={<BorderAndTitle title={'pokaż'} />} onChange={e => setPassword(e.target.value)}></CustomInput>
					</Flex>
					<Flex space align>
						<Text color='#00a790'>Nie pamiętam hasła</Text>
						<Button onClick={() => handleLogin(email, password)} width='150px' disabled={disabled}>
							Zaloguj się
						</Button>
					</Flex>
					<Flex center>
						<Text>lub</Text>
					</Flex>
					<Flex space>
						<Button background='lightBlue' width='150px'>
							Faebook
						</Button>
						<Button outlined background='white' color='darkGrey' width='150px'>
							Google
						</Button>
					</Flex>
					<Flex borderTop />
					<Flex space>
						<Text bold>Nie masz konta?</Text>
						<Link to='/register'>
							<BorderAndTitle title='Zarejestruj się' />
						</Link>
					</Flex>

					<Flex>
						<Text wrap>
							Logując się do Allegro akceptujesz Regulamin w aktualnym brzmieniu obowiązującym od dnia 9.12.2021. Informacje o planowanych
							oraz archiwalnych zmianach Regulaminu są dostępne na stronie.
						</Text>
					</Flex>
					{error && <ErrorMessage error={error} />}
				</LeftContainer>
				{isMobile && <RightContainer isMobile={isMobile} />}
			</Container>
		</PageWidth>
	);
};

export default Login;
