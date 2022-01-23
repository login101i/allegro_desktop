import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Badge } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Logo from "../assets/pictures/logo.svg";

import { Text, Button, MenuContentBox, CustomIcon } from "../components";

import { screens } from "./responsive";

import { logoutUser } from "../redux/actions/userActions";
import LoginImage from "../assets/pictures/LoginImage.png";
import { OptionComponent } from "../components";

import { Flex } from "../components";

const Navbar = ({ history }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isMedium = useMediaQuery({ maxWidth: screens.lg });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const Container = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: ${isMobile ? "2px" : "16px 16px"};
		justify-content: center;
		align-items: center;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 99;
		width: 100%;
	`;

	const Wrapper = styled.div`
		display: flex;
		// align-items: center;
		// justify-content: center;
		height: 100%;
		// width: 1600px;
		width: 100%;
	`;

	const Left = styled.div`
		display: flex;
		align-items: center;
		justify-content: left;
		// min-width: 150px;
		background-color: white;
	`;

	const Image = styled.div`
		transform: ${(props) => (props.isMobile ? "scale(0.7)" : "scale(1.15)")};
	`;

	const LogInImage = styled.img`
		width: 100%;
		object-fit: contain;
	`;

	const Center = styled.div`
		flex-grow: grow;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: ${isMobile ? "4px" : "0px 20px"};
	`;
	const CenterContainer = styled.form`
		display: flex;
		flex-grow: 1;
	`;

	const SearchContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		border: 0.5px solid #d2d2d2;
	`;
	const Input = styled.input`
		border: none;
		height: 38px;
		line-height: 38px;

		outline: none;
		font-size: 15px;
		margin-left: 10px;
		paddgin-right: 8px;
	`;

	const SearchMore = styled.div`
		fontsize: 20px;
		color: lightBlue;
		letter-spacing: 1.5px;
		border: none;
		margin-right: 3px;
		color: var(--linkColor);
		display: flex;
	`;
	const SelectContainer = styled.select`
		flex: 2;
		outline: none;
		border: 0.5px solid #d2d2d2;
	`;

	const FlexRow = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`;

	const Right = styled.div`
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	`;

	const Icon = styled.div`
		color: grey;
		padding: 4px;
		font-size: 30px;
		margin: 0px 10px;
		cursor: pointer;
		margin: 6px 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: relative;
	`;

	const IconDown = styled(Icon)`
		transform: translateX(10px);
		font-size: 30px;
		// border: 2px solid black;
	`;

	const MenuLogin = styled.div`
		border: 1px solid lightGrey;
		display: ${(props) => (props.openMenu ? "block" : "none")};
		position: absolute;
		top: 45px;

		right: 0;
		width: 285px;
		height: auto;
		min-height: 200px;
		padding: 16px;
		background-color: white;
		border: 1px solid lightGrey;
		zindex: 112;
	`;
	const MenuLogged = styled(MenuLogin)`
		padding: 0px;
		background-color: ${(props) => props.theme.colors.allegroBackground};
	`;
	const MenuLoginContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		background-color: white;
	`;

	const AccountNavbar = styled.div`
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		background-color: white;
	`;

	const AccountMainCont = styled.div`
		width: 100%;
	`;

	const StyledBadge = styled(Badge)(({ theme }) => ({
		"& .MuiBadge-badge": {
			backgroundColor: theme.colors.allegroColor,
			border: `2px solid ${(props) => props.theme.colors.allegroColor}`,
			padding: "0 4px",
			right: -2,
			top: 30,
			color: "white"
		}
	}));

	const [openMenu, setOpenMenu] = useState(false);
	console.log(openMenu);

	const handleClick = (event) => {
		console.log("clikam");
		setOpenMenu(!openMenu);
		console.log("Open Menu: ", openMenu);
	};

	const { isAuthenticated, user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		console.log("logout user");
		dispatch(logoutUser());
		navigate("/");
	};

	const catMenu = useRef(null);
	const closeOpenMenus = (e) => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};

	document.addEventListener("mousedown", closeOpenMenus);

	const [keyword, setKeyword] = useState("");
	const [zakupy, setZakupy] = useState(true);
	const [sprzedaz, setSprzedaz] = useState(false);
	const [konto, setKonto] = useState(false);
	const [optionMenu, setOptionMenu] = useState("zakupy");

	const handleChangeMenu = (value) => {
		if (value == "sprzedaz") setOptionMenu("sprzedaz");
		else if (value === "konto") setOptionMenu("konto");
		else setOptionMenu("zakupy");
	};

	console.log(keyword);
	const searchHandler = (e) => {
		e.preventDefault();

		if (keyword.trim()) {
			navigate(`/listing/${keyword}`);
			console.log("Szukam");
		} else {
			navigate("/");
		}
	};
	const leftPart = () => {
		return (
			<Left>
				<Link to="/">
					<Image isMobile={isMobile}>
						<img src={Logo} alt="Allegro" />
					</Image>
				</Link>
			</Left>
		);
	};

	const centerPart = ({ isMobile }) => {
		return (
			<Center>
				<CenterContainer onSubmit={searchHandler}>
					<SearchContainer>
						<Input
							placeholder="Czego szukasz?"
							type="text"
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<SearchMore>szukaj wielu</SearchMore>
					</SearchContainer>
					{isMobile ? (
						<SelectContainer placeholder="Wszystkie kategorie"></SelectContainer>
					) : null}

					{isMobile ? (
						<Button type="submit" width="auto" onClick={searchHandler}>
							Szukaj
						</Button>
					) : (
						<Button
							type="submit"
							width="auto"
							onClick={searchHandler}
							width="38px"
							style={{
								padding: "0px",
								marginRight: "0px"
							}}
						>
							<CustomIcon icon={StarBorderIcon} color="#fffafa" />
						</Button>
					)}
				</CenterContainer>
			</Center>
		);
	};

	const rightPart = () => {
		return (
			<Right>
				<CustomIcon icon={StarBorderIcon} />
				<CustomIcon icon={ForumOutlinedIcon} badgeContent={3} />
				<CustomIcon icon={NotificationsNoneOutlinedIcon} badgeContent={1} />
				<CustomIcon icon={ShoppingCartOutlinedIcon} />
				{isAuthenticated ? (
					<>
						<StyledBadge badgeContent={2}>
							<Text>{user.name}</Text>
						</StyledBadge>

						<IconDown ref={catMenu}>
							<ArrowBackIosIcon
								onClick={handleClick}
								style={{ fontSize: "15px", position: "relative" }}
							/>

							<MenuLogged openMenu={openMenu} ref={catMenu}>
								<AccountNavbar>
									<OptionComponent
										size="17px"
										option="zakupy"
										borderBottom={true}
										upperCase
										onClick={() => handleChangeMenu("zakupy")}
									/>
									<OptionComponent
										size="17px"
										option="sprzedaż"
										borderBottom={true}
										upperCase
										onClick={() => handleChangeMenu("sprzedaz")}
									/>
									<OptionComponent
										size="17px"
										option="konto"
										borderBottom={true}
										upperCase
										onClick={() => handleChangeMenu("konto")}
									/>
								</AccountNavbar>

								<AccountMainCont>
									<MenuContentBox
										subTitles={["Wyloguj się"]}
										style={{ marginBottom: "0px" }}
										onClick={handleLogout}
									/>

									{optionMenu === "zakupy" && (
										<>
											<MenuContentBox
												title="Zakupy na allegro"
												subTitles={[
													"Moje zakupy",
													"Licytuję",
													"Obserwowane",
													"oceń produkty",
													"oceń sprzedawcę"
												]}
											/>
											<MenuContentBox
												title="Zakupy na allegro lokakbue"
												subTitles={[
													"Moje zakupy",
													"Licytuję",
													"Zarezewowane dla mnie"
												]}
											/>
											<MenuContentBox
												title="Programy zniżkowe"
												subTitles={[
													"Allegro Smart!",
													"Centrum kuponów",
													"Twoje monety i kupony"
												]}
											/>
											<MenuContentBox
												title="Allegro finanse"
												subTitles={["Allegro Pay"]}
											/>
										</>
									)}
									{optionMenu === "sprzedaz" && (
										<>
											<MenuContentBox
												title="Sprzedaż na Allegro Lokalnie"
												subTitles={[
													{
														subTitle: "Wystaw przedmiot",
														link: "/oferty/wystaw/kup-teraz"
													}
												]}
											/>
											<MenuContentBox
												title="Zakupy na allegro lokakbue"
												subTitles={[
													"Moje zakupy",
													"Licytuję",
													"Zarezewowane dla mnie"
												]}
											/>
											<MenuContentBox
												title="Programy zniżkowe"
												subTitles={[
													"Allegro Smart!",
													"Centrum kuponów",
													"Twoje monety i kupony"
												]}
											/>
											<MenuContentBox
												title="Allegro finanse"
												subTitles={["Allegro Pay"]}
											/>
										</>
									)}
									{optionMenu === "konto" && (
										<>
											<MenuContentBox
												title="Twoje konto"
												subTitles={[
													"Moje zakupy",
													"Licytuję",
													"Obserwowane",
													"oceń produkty",
													"oceń sprzedawcę"
												]}
											/>
											<MenuContentBox
												title="Zakupy na allegro lokakbue"
												subTitles={[
													"Moje zakupy",
													"Licytuję",
													"Zarezewowane dla mnie"
												]}
											/>
											<MenuContentBox
												title="Programy zniżkowe"
												subTitles={[
													"Allegro Smart!",
													"Centrum kuponów",
													"Twoje monety i kupony"
												]}
											/>
											<MenuContentBox
												title="Allegro finanse"
												subTitles={["Allegro Pay"]}
											/>
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
							<ArrowBackIosIcon
								onClick={handleClick}
								style={{ fontSize: "30px", position: "relative" }}
							/>

							<MenuLogin openMenu={openMenu} ref={catMenu}>
								<MenuLoginContainer>
									<LogInImage src={LoginImage} />

									<Text bold size={25}>
										Witaj w allegro
									</Text>
									<Text
										subTitle="Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
											powiadomienia. W Allegro jesteś u siebie!"
									></Text>
									<Link to="/login">
										<Button>Zaloguj się</Button>
									</Link>

									<FlexRow>
										<Text> Nie masz konta? </Text>
										<Link to="/register">
											<Text color="green"> Zarejestruj się</Text>
										</Link>
									</FlexRow>
								</MenuLoginContainer>
							</MenuLogin>
						</IconDown>
					</>
				)}
			</Right>
		);
	};
	return isMobile ? (
		<Container>
			<Wrapper>
				<Flex column fullWidth>
					<Flex space>
						{leftPart()}
						{rightPart()}
					</Flex>
					<Flex fullWidth>{centerPart(isMobile)}</Flex>
				</Flex>
			</Wrapper>
		</Container>
	) : (
		<Container>
			<Wrapper>
				{leftPart()}
				{centerPart(isMobile)}
				{rightPart()}
			</Wrapper>
		</Container>
	);
};

export default Navbar;
