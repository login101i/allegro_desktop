import React from "react";

import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import AnchorIcon from "@mui/icons-material/Anchor";
import AnimationIcon from "@mui/icons-material/Animation";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import BedIcon from "@mui/icons-material/Bed";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";



import {

	CategoriesContainer,
	Category
} from "./SideBarLeft.styles";

export const CategoriesComponent = () => {
	return (
		<>
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
		</>
	);
};
