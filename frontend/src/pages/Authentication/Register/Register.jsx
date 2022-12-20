import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, Link } from 'react-router-dom';
import { Text, Button, BorderAndTitle, PageWidth, Flex, ErrorMessage } from '../../../components';
import { registerUser } from '../../../redux/actions/userActions';
import { Container, RegisterContainer, LoginContainer, CustomInput, Break } from './Register.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../../components/responsive';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const disabled = !name || !email || password.length < 6;
	const { isAuthenticated, error } = useSelector(state => state.auth);
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	const body = {
		name,
		email,
		password,
	};

	const handleRegister = async () => {
		try {
			dispatch(registerUser(body));
		} catch (error) {
			console.log('Error ---- ' + error);
		}
	};

	return (
		<PageWidth width={isMobile && '100%'}>
			<Container isMobile={isMobile}>
				<RegisterContainer isMobile={isMobile}>
					<Text size={30}> Zarejestruj się </Text>
					<Flex fullWidth>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Login lub email' />
						<FormControlLabel disabled control={<Checkbox />} label='Numer telefonu' />
					</Flex>
					<Flex column fullWidth>
						<CustomInput
							fullWidth
							type='name'
							placeholder='name'
							disableunderline='true'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<CustomInput
							fullWidth
							type='email'
							placeholder='email'
							disableunderline='true'
							value={email}
							onChange={e => setEmail(e.target.value)}
						></CustomInput>
						<CustomInput
							fullWidth
							type='password'
							placeholder='Hasło'
							disableUnderline={true}
							value={password}
							onChange={e => setPassword(e.target.value)}
							endAdornment={<BorderAndTitle title={'pokaż'} />}
						></CustomInput>
					</Flex>
					<Flex between>
						<Button onClick={handleRegister} disabled={disabled}>
							Zarejestruj się
						</Button>
					</Flex>
					<Flex align>
						<Break />
						<Text> lub </Text>
						<Break />
					</Flex>
					<Flex align space={isMobile}>
						<Flex>
							<Button width={isMobile && '180px'} background='lightBlue'>
								Facebook
							</Button>
						</Flex>
						<Flex>
							<Button width={isMobile && '180px'} outlined background='white' color='darkGrey'>
								Google
							</Button>
						</Flex>
					</Flex>
					{error && <ErrorMessage />}
				</RegisterContainer>

				<LoginContainer>
					<Text bold>Masz już konto?</Text>
					<Link to='/login'>
						<BorderAndTitle title='Zaloguj się' />
					</Link>
				</LoginContainer>
			</Container>
			<Text style={{ margin: '10px' }} wrap>
				Logując się do Allegro akceptujesz Regulamin w aktualnym brzmieniu obowiązującym od dnia 9.12.2021. Informacje o planowanych oraz
				archiwalnych zmianach Regulaminu są dostępne na stronie.
			</Text>
		</PageWidth>
	);
};

export default Register;
