import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginImage from '../../assets/pictures/LoginImage.png';
import { logoutUser } from '../../redux/actions/userActions';
import { Flex, Text, Button, MenuContentBox, OptionComponent } from '../../components';
import { StyledBadge } from '../customIcon/CustomIcon.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';
import { CartContext } from '../../context/cart.context';
import {
	IconDown,
	MenuLogged,
	AccountNavbar,
	AccountMainCont,
	MenuLoginContainer,
	LogInImage,
	MenuLoginMobile,
	MenuLoginLogoutContainer,
} from '../../components/navbar/componets/right/RightPart.styles';

const MenuLoginLogout = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [optionMenu, setOptionMenu] = useState('zakupy');
	const { isAuthenticated, user } = useSelector(state => state.auth);
	const { cart } = useContext(CartContext);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const catMenu = useRef(null);

	const closeOpenMenus = e => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};
	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};

	document.addEventListener('mousedown', closeOpenMenus);

	const handleChangeMenu = value => {
		if (value === 'sprzedaz') setOptionMenu('sprzedaz');
		else if (value === 'konto') setOptionMenu('konto');
		else setOptionMenu('zakupy');
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logoutUser());
		setOpenMenu(false);
		navigate('/');
	};

	const Menu = isMobile ? MenuLoginMobile : MenuLogged;

	return isAuthenticated ? (
		<MenuLoginLogoutContainer>
			<StyledBadge badgeContent={2} overlap='rectangular'>
				<Text>{user?.name}</Text>
			</StyledBadge>
			<IconDown ref={catMenu}>
				{openMenu ? <ExpandMoreIcon onClick={handleMenu} size={22} /> : <KeyboardArrowLeftIcon onClick={handleMenu} size={11} />}
				<Menu openMenu={openMenu} ref={catMenu} isMobile={isMobile}>
					<AccountNavbar isMobile={isMobile}>
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
								<MenuContentBox title='Zakupy na allegro lokalnie' subTitles={['Moje zakupy', 'Licytuję', 'Zarezewowane dla mnie']} />
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
					<Link to='/login'>
						<Button onClick={handleLogout}>Wyloguj się</Button>
					</Link>
				</Menu>
			</IconDown>
		</MenuLoginLogoutContainer>
	) : (
		<MenuLoginLogoutContainer>
			<Text> Moje allegro</Text>
			<IconDown ref={catMenu}>
				{openMenu ? <ExpandMoreIcon onClick={handleMenu} size={22} /> : <KeyboardArrowLeftIcon onClick={handleMenu} size={11} />}
				<Menu openMenu={openMenu} ref={catMenu} isMobile={isMobile}>
					<MenuLoginContainer>
						<LogInImage src={LoginImage} />
						<Text bold size={25}>
							Witaj w allegro
						</Text>
						<Text
							wrap='true'
							textAlign
							subTitle='Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
											powiadomienia. W Allegro jesteś u siebie!'
						></Text>
						<Link to='/login'>
							<Button onClick={handleMenu}>Zaloguj się</Button>
						</Link>
						<Flex>
							<Text> Nie masz konta? </Text>
							<Link to='/register'>
								<Text color='green' onClick={handleMenu}>
									Zarejestruj się
								</Text>
							</Link>
						</Flex>
					</MenuLoginContainer>
				</Menu>
			</IconDown>
		</MenuLoginLogoutContainer>
	);
};

export default MenuLoginLogout;
