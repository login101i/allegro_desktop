import React, { useEffect } from "react";
import styled from "styled-components";
import {useSelector } from "react-redux";



import { Badge } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import Image from "../../../assets/pictures/Kot1.png";
import HomeAllegro from "../../../assets/pictures/HomeAllegro.svg";
import SmartImage from "../../../assets/pictures/Smart.svg";

import Avatar from "@mui/material/Avatar";

import {
	Text,
	BorderAndTitle,
	NavbarPage,
	CustomInput,
	PageWidth,
	MenuContentBox,
	CustomIcon,
	Flex
} from "../../../components";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto auto auto auto;
	gap: 16px 16px;

	grid-template-areas:
		"section4 section5"
		"section6 section7"
		"section8 section9"
		"section10 section11";
	margin-top: 16px;

	> * {
		background-color: white;
		width: 100%;
		padding: 16px;
		height: 100%;
		display: flex;
	}
`;


const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: theme.colors.allegroColor,
		border: `2px solid ${(props) => props.theme.colors.allegroColor}`,
		padding: "0 4px",
		right: 5,
		top: 10,
		color: "white"
	}
}));



const TopContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 16px;
	width: 100%;
	background-color: var(--allegroBackground);
	> * {
		background-color: white;
		padding: 16px;
	}
`;
const Section1 = styled.div`
	grid-area: 1 / 1 / 2 / 6;
	display: flex;
	width: 100%;
`;
const Section2 = styled.div`
	grid-area: 2 / 1 / 3 / 6;
`;
const Section3 = styled.div`
	grid-area: 3 / 1 / 4 / 6;
`;

const Section4 = styled.div`
	grid-area: section4;
`;
const Section5 = styled.div`
	grid-area: section5;
`;
const Section6 = styled.div`
	grid-area: section6;
`;
const Section7 = styled.div`
	grid-area: section7;
`;
const Section8 = styled.div`
	grid-area: section8;
`;
const Section9 = styled.div`
	grid-area: section9;
`;
const Section10 = styled.div`
	grid-area: section10;
`;
const Section11 = styled.div`
	grid-area: section11;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: left;
	justify-content: start;
	width: 70%;
`;

const Right = styled.div`
	border-left: 1px solid lightGrey;
	flex: 1;
	padding-left: 16px;
	display: flex;
	flex-direction: column;
`;

const ImageContainer = styled.img`
	height: 80px;
	width: auto;
`;

const Smart = styled.img`
	color: purple;
	height: 18px;
	display: flex;
	align-items: left;
	width: 100px;
	margin-left: -15px;
`;

const MyAccount = () => {


	const { user } = useSelector((state) => state.auth);

	console.log(user);
	useEffect(() => {}, [user]);


	return (
		<PageWidth width="70%">
			<NavbarPage
				path
				rightPart={
					<CustomInput
						rightPart={<SearchIcon />}
						placeholder="Przeszukaj moje Allegro"
					/>
				}
			/>
			<TopContainer>
				<Section1>
					<Left>
						<Flex column style={{ width: "65%" }}>
							<Text bold title="Cze???? Maciej!"></Text>
							<Text subTitle="maciejkruszyniaK@gmail.com" />
							<Flex>
								<Smart src={SmartImage} />
								<Smart src={SmartImage} />
								<Smart src={SmartImage} />
								<Smart src={SmartImage} />
							</Flex>
						</Flex>
						<StyledBadge badgeContent={2}>
							<Avatar
								alt="User Avatar"
								src={Image}
								sx={{ width: 90, height: 80 }}
							/>
						</StyledBadge>
					</Left>
					<Right>
						<Flex column style={{ borderBottom: "1px solid lightGrey" }}>
							<Text title="Jeste?? z nami:"></Text>
							<Text
								title="14 lat, 5 miesi??cy, 2 dni"
								color="var(--allegroColor)"
							></Text>
						</Flex>
						<Flex
							column
							align="center"
						>
							<Text title="889,60z??"></Text>
							<Text
								subTitle="Smart! oszcz??dno??ci"
								color="var(--allegroColor)"
							/>
							<BorderAndTitle title="Tw??j smart" />
						</Flex>
					</Right>
				</Section1>
				<Section2>
					<Flex space>
						<Flex column>
							<Text title="Po????cz si?? z rodzin??" />

							<Text>
								Allegro Family to oszcz??dno??ci na dostawach, wzajemne wsparcie i
								pe??na prywatno????.
							</Text>
						</Flex>
						<ImageContainer src={HomeAllegro} />
					</Flex>
					<BorderAndTitle title="Wi??cej o allegro Family" border />
				</Section2>

				<Section3>
					{" "}
					<Flex space>
						<Flex column>
							<Text title="Allegro Family" />
						</Flex>
						<BorderAndTitle title="zapro??" />
					</Flex>
				</Section3>
			</TopContainer>

			<Container>
				<Section4>
					<Flex column fullWidth>
						<Text title="Ustawienia konta" />
						<Flex column>
							<Flex space>
								<Text subTitle="Informacje o Tobie i Twoim koncie">
									Twoje dane
								</Text>
								<BorderAndTitle title="zmie??" />
							</Flex>
							<Flex fullWidth space>
								<Text subTitle="Zarz??dzaj swoimi adresami">
									Adresy do wysy??ki
								</Text>
								<BorderAndTitle title="Zmie??" />
							</Flex>
							<Flex space>
								<Text subTitle="Postaw na szybkie zakupy">Karty P??atnicze</Text>
								<BorderAndTitle title="zobacz" />
							</Flex>
							<Flex space>
								<Text subTitle="B??d?? na bie????co">Zgody na powiadomienia</Text>
								<BorderAndTitle title="zmie??" />
							</Flex>
						</Flex>
					</Flex>
				</Section4>
				<Section5>
					<Flex column fullWidth>
						<Text title="Us??ugi" />
						<Flex column>
							<Flex space>
								<Text subTitle=" Aktywny do 17 marca 2022">Allegro Smart</Text>
								<BorderAndTitle title="sprawd??" />
							</Flex>
							<Flex space>
								<Text subTitle="Masz 4 monety">MOnety Allegro</Text>
								<BorderAndTitle title="zobacz" />
							</Flex>
							<Flex space>
								<Text subTitle="KOrzystaj tam, gdzie chcesz">
									Aplikacja Allegro
								</Text>
								<BorderAndTitle title="pobierz" />
							</Flex>
							<Flex space>
								<Text subTitle="Dostosuj Allegro do siebie">
									Personalizacja
								</Text>
								<BorderAndTitle title="zmie??" />
							</Flex>
						</Flex>
					</Flex>
				</Section5>
				<Section6>
					<CustomIcon icon={GppGoodOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Zakupy na allegro lokalnie"
						subTitles={["Moje zakupy", "Licytuj??", "Zarezewowane dla mnie"]}
					></MenuContentBox>
				</Section6>
				<Section7>
					<CustomIcon icon={AccountBalanceWalletOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Rachunki"
						subTitles={[
							"Rozliczenia na allegro",
							"Nadchodz??ce op??aty",
							"Faktury"
						]}
					></MenuContentBox>
				</Section7>
				<Section8>
					<CustomIcon icon={PersonOutlineOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Ustawienia Konta"
						subTitles={[
							"Dane konta",
							"Zgody na powiadomienia",
							"Personalizacja"
						]}
					></MenuContentBox>
				</Section8>
				<Section9>
					<CustomIcon icon={ThumbUpOffAltOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Ocena sprzeda??y"
						subTitles={[
							"Wystaw",
							"Otrzymane",
							"Pro??by o usuni??cie",
							"Moja karta u??ytkowanika"
						]}
					></MenuContentBox>
				</Section9>
				<Section10>
					<CustomIcon icon={MarkAsUnreadOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Wsparcie pozakupowe (dyskusje)"
						subTitles={["Dyskuksje z kupuj??cymi", "Dyskusje ze sprzedaj??cymi"]}
					></MenuContentBox>
				</Section10>
				<Section11>
					<CustomIcon icon={ChatOutlinedIcon} size={60} />

					<MenuContentBox
						style={{ borderLeft: "1px solid lightGrey", paddingLeft: "10px" }}
						color="var(--linkColor)"
						title="Alegro lokalnie"
						subTitles={[
							"Dla sprzedaj??cych",
							"dla kupuj??cych",
							"moje ustawienia"
						]}
					></MenuContentBox>
				</Section11>
			</Container>
		</PageWidth>
	);
};

export default MyAccount;
