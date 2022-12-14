import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginImage from '../../../../assets/pictures/LoginImage.png';
import { logoutUser } from '../../../../redux/actions/userActions';
import { Flex, Text, Button, MenuContentBox, CustomIcon, OptionComponent, RedirectOnClick } from '../../../../components';
import { StyledBadge } from '../../../customIcon/CustomIcon.styles';
import {
	IconDown,
	MenuLogged,
	AccountNavbar,
	AccountMainCont,
	MenuLogin,
	MenuLoginContainer,
	LogInImage,
	Right,
	MenuLoginMobile,
} from './RightPart.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../../responsive';
import { CartContext } from '../../../../context/cart.context';

export const RightPart = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const handleMenu = event => {
		setOpenMenu(!openMenu);
	};

	const { isAuthenticated, user } = useSelector(state => state.auth);
	const closeOpenMenus = e => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	document.addEventListener('mousedown', closeOpenMenus);

	const [optionMenu, setOptionMenu] = useState('zakupy');
	const catMenu = useRef(null);

	const { cart } = useContext(CartContext);
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

	const Menu = isMobile ? MenuLoginMobile : MenuLogged;

	return (
		<Right isMobile={isMobile}>
			<CustomIcon icon={StarBorderIcon} />
			<CustomIcon icon={ForumOutlinedIcon} badgeContent={3} />
			<CustomIcon icon={NotificationsNoneOutlinedIcon} badgeContent={1} />
			<RedirectOnClick to='/cart'>
				<CustomIcon icon={ShoppingCartOutlinedIcon} badgeContent={cart.length} />
			</RedirectOnClick>
			{isAuthenticated ? (
				<>
					<StyledBadge badgeContent={2} overlap='rectangular'>
						<Text>{user?.name}</Text>
					</StyledBadge>
					<IconDown ref={catMenu}>
						<ArrowBackIosIcon onClick={handleMenu} size={11} />

						<Menu openMenu={openMenu} ref={catMenu} isMobile={isMobile}>
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
						</Menu>
					</IconDown>
				</>
			) : (
				<>
					<Text> Moje allegro</Text>
					<IconDown ref={catMenu}>
						<ArrowBackIosIcon onClick={handleMenu} size={11} />
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
										<Text color='green'> Zarejestruj się</Text>
									</Link>
								</Flex>
							</MenuLoginContainer>
						</Menu>
					</IconDown>
				</>
			)}
		</Right>
	);
};
