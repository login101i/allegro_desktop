import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Text, NavbarPage } from "../../../components";

const PathComponent = ({ keyword, count }) => {
	return (
		<NavbarPage
			leftPart={
				<>
					<Text bold>Szukasz "{keyword}"</Text>
					<Text> spośród ({count} ofert)</Text>
				</>
			}
			rightPart={
				<>
					<StarBorderIcon style={{ fontSize: "30px" }} />
					<Text uppercase size={20} color="var(--linkColor)">
						Obserwuj wyszukiwanie
					</Text>
				</>
			}
		/>
	);
};

export default PathComponent;
