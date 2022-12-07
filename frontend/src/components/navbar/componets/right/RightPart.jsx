import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import LoginImage from '../../../../assets/pictures/LoginImage.png';
import { logoutUser } from '../../../../redux/actions/userActions';

import { Flex, Text, Button, MenuContentBox, CustomIcon, OptionComponent } from '../../../../components';

import {
	StyledBadge,
	IconDown,
	MenuLogged,
	AccountNavbar,
	AccountMainCont,
	MenuLogin,
	MenuLoginContainer,
	LogInImage,
	Right,
} from './RightPart.styles';

export const RightPart = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = event => {
		setOpenMenu(!openMenu);
	};

	const { isAuthenticated, user } = useSelector(state => state.auth);

	const closeOpenMenus = e => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};

	document.addEventListener('mousedown', closeOpenMenus);

	const [optionMenu, setOptionMenu] = useState('zakupy');
	const catMenu = useRef(null);

	const handleChangeMenu = value => {
		if (value === 'sprzedaz') setOptionMenu('sprzedaz');
		else if (value === 'konto') setOptionMenu('konto');
		else setOptionMenu('zakupy');
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logoutUser());
		navigate('/');
	};

	return (
		<Right>
			<CustomIcon icon={StarBorderIcon} />
			<CustomIcon icon={ForumOutlinedIcon} badgeContent={3} />
			<CustomIcon icon={NotificationsNoneOutlinedIcon} badgeContent={1} />
			<CustomIcon icon={ShoppingCartOutlinedIcon} />
			{isAuthenticated ? (
				<>
					<StyledBadge badgeContent={2}>
						<Text>{user?.name}</Text>
					</StyledBadge>

					<IconDown ref={catMenu}>
						<ArrowBackIosIcon onClick={handleClick} style={{ fontSize: '15px', position: 'relative' }} />

						<MenuLogged openMenu={openMenu} ref={catMenu}>
							<AccountNavbar>
								<OptionComponent size='17px' option='zakupy' borderBottom={true} upperCase onClick={() => handleChangeMenu('zakupy')} />
								<OptionComponent size='17px' option='sprzedaż' borderBottom={true} upperCase onClick={() => handleChangeMenu('sprzedaz')} />
								<OptionComponent size='17px' option='konto' borderBottom={true} upperCase onClick={() => handleChangeMenu('konto')} />
							</AccountNavbar>

							<AccountMainCont>
								<MenuContentBox subTitles={['Wyloguj się']} style={{ marginBottom: '0px' }} onClick={handleLogout} />

								{optionMenu === 'zakupy' && (
									<>
										<MenuContentBox
											title='Zakupy na allegro'
											subTitles={['Moje zakupy', 'Licytuję', 'Obserwowane', 'oceń produkty', 'oceń sprzedawcę']}
										/>
										<MenuContentBox title='Zakupy na allegro lokakbue' subTitles={['Moje zakupy', 'Licytuję', 'Zarezewowane dla mnie']} />
										<MenuContentBox title='Programy zniżkowe' subTitles={['Allegro Smart!', 'Centrum kuponów', 'Twoje monety i kupony']} />
										<MenuContentBox title='Allegro finanse' subTitles={['Allegro Pay']} />
									</>
								)}
								{optionMenu === 'sprzedaz' && (
									<>
										<MenuContentBox
											title='Sprzedaż na Allegro Lokalnie'
											subTitles={[
												{
													subTitle: 'Wystaw przedmiot',
													link: '/oferty/wystaw/kup-teraz',
												},
											]}
										/>
										<MenuContentBox title='Zakupy na allegro lokakbue' subTitles={['Moje zakupy', 'Licytuję', 'Zarezewowane dla mnie']} />
										<MenuContentBox title='Programy zniżkowe' subTitles={['Allegro Smart!', 'Centrum kuponów', 'Twoje monety i kupony']} />
										<MenuContentBox title='Allegro finanse' subTitles={['Allegro Pay']} />
									</>
								)}
								{optionMenu === 'konto' && (
									<>
										<MenuContentBox
											title='Twoje konto'
											subTitles={['Moje zakupy', 'Licytuję', 'Obserwowane', 'oceń produkty', 'oceń sprzedawcę']}
										/>
										<MenuContentBox title='Zakupy na allegro lokakbue' subTitles={['Moje zakupy', 'Licytuję', 'Zarezewowane dla mnie']} />
										<MenuContentBox title='Programy zniżkowe' subTitles={['Allegro Smart!', 'Centrum kuponów', 'Twoje monety i kupony']} />
										<MenuContentBox title='Allegro finanse' subTitles={['Allegro Pay']} />
									</>
								)}
							</AccountMainCont>
						</MenuLogged>
					</IconDown>
				</>
			) : (
				<>
					<Text> Moje allegro</Text>
					<IconDown onClick={handleClick}>
						<ArrowBackIosIcon onClick={handleClick} style={{ fontSize: '30px', position: 'relative' }} />

						<MenuLogin openMenu={openMenu} ref={catMenu}>
							<MenuLoginContainer>
								<LogInImage src={LoginImage} />

								<Text bold size={25}>
									Witaj w allegro
								</Text>
								<Text
									wrap = "true"
									textAlign
									subTitle='Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
											powiadomienia. W Allegro jesteś u siebie!'
								></Text>
								<Link to='/login'>
									<Button>Zaloguj się</Button>
								</Link>

								<Flex>
									<Text> Nie masz konta? </Text>
									<Link to='/register'>
										<Text color='green'> Zarejestruj się</Text>
									</Link>
								</Flex>
							</MenuLoginContainer>
						</MenuLogin>
					</IconDown>
				</>
			)}
		</Right>
	);
};
