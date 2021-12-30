import React, { useState } from "react";
import styled from "styled-components";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import AnchorIcon from "@mui/icons-material/Anchor";
import AnimationIcon from "@mui/icons-material/Animation";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import BedIcon from "@mui/icons-material/Bed";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";

import BorderAndTitle from "../BorderAndTitle";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  flex:1
  min-width: 244px;
  height:603px;
  padding:8px 24px 0px 24px;
    background-color:white;
    max-width:300px;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid var(--borderColor);
	justify-content: space-evenly;
	margin-bottom: 10px;
`;
const HeaderLeft = styled.div`
	cursor: pointer;
	width: 40%;
	display: flex;
	align-items: center;

	&:hover {
		color: green;
	}
`;
const SpanText = styled.span`
	text-transform: uppercase;
	letter-spacing: 1.25px;
	text-align: center;
	width: 100%;
	padding: 10px 5px;
`;

const HeaderRight = styled.div`
	cursor: pointer;
	width: 40%;
	display: flex;
	align-items: center;

	&:hover {
		color: green;
	}
`;
const CategoriesContainer = styled.div`
	width: 85%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const Category = styled.div`
	padding-left: 16px;
	width: 228px;
	height: 31.2px;
	cursor: pointer;
	transition: 0.15s ease-in-out;
	display: flex;
	justify-content: left;
	align-items: center;
	color: var(--textColor);

	&:hover {
		color: var(--linkColor);
	}
`;

const SidebarLeft = () => {
	const [dzialy, setDzialy] = useState(true);
	const [korzysci, setKorzysci] = useState(false);

	const toggleKorzyski = () => {
		setKorzysci(true);
		setDzialy(false);
	};
	const toggleDzialy = () => {
		setKorzysci(false);
		setDzialy(true);
	};

	console.log(dzialy, korzysci);

	return (
		<MainContainer>
			<Header>
				<HeaderLeft
					style={{
						borderBottom: dzialy ? "3px solid #ff5a00" : "3px solid grey"
					}}
				>
					<SpanText
						style={{ color: dzialy ? "#ff5a00" : "#222" }}
						onClick={toggleDzialy}
					>
						Działy
					</SpanText>
				</HeaderLeft>
				<HeaderRight
					style={{
						borderBottom: korzysci ? "3px solid #ff5a00" : "3px solid grey"
					}}
				>
					<SpanText
						style={{ color: korzysci ? "#ff5a00" : "#222" }}
						onClick={toggleKorzyski}
					>
						Korzyści
					</SpanText>
				</HeaderRight>
			</Header>
			<CategoriesContainer>
				<Category>
					<LaptopChromebookOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Elektronika
				</Category>
				<Category>
					<BathroomOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Moda
				</Category>
				<Category>
					<AnchorIcon style={{ color: "grey", marginRight: "16px" }} />
					Dom i Ogród
				</Category>
				<Category>
					<AnimationIcon style={{ color: "grey", marginRight: "16px" }} />
					SuperMarket
				</Category>
				<Category>
					<BabyChangingStationIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Dziecko
				</Category>
				<Category>
					<BedIcon style={{ color: "grey", marginRight: "16px" }} />
					Sport i Turystyka
				</Category>
				<Category>
					<LaptopChromebookOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Uroda
				</Category>
				<Category>
					<BakeryDiningIcon style={{ color: "grey", marginRight: "16px" }} />
					Zdrowie
				</Category>
				<Category>
					<BathroomOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Kultura i rozrywka
				</Category>
				<Category>
					<BathroomOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Motoryzacja
				</Category>
				<Category>
					<AnchorIcon style={{ color: "grey", marginRight: "16px" }} />
					Nieruchomości
				</Category>
				<Category>
					<AnimationIcon style={{ color: "grey", marginRight: "16px" }} />
					Kolekcje i sztuka
				</Category>
				<Category>
					<BakeryDiningIcon style={{ color: "grey", marginRight: "16px" }} />
					Firma i usługi
				</Category>
				<Category>
					<BedIcon style={{ color: "grey", marginRight: "16px" }} />
					eBilet.pl
				</Category>
				<Category>
					<BathroomOutlinedIcon
						style={{ color: "grey", marginRight: "16px" }}
					/>
					Allegro Lokalnie
				</Category>
			</CategoriesContainer>
			<BorderAndTitle title="Wszystkie kategorie" />
		</MainContainer>
	);
};

export default SidebarLeft;
