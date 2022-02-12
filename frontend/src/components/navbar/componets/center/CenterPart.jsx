import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { Text, Button, CustomIcon } from "../../../../components";

import {
	Center,
	CenterContainer,
	SearchContainer,
	SelectContainer,
	Input
} from "./CenterPart.styles";

export const CenterPart = ({ isMobile }) => {
	const [keyword, setKeyword] = useState("");

	const navigate = useNavigate();

	const searchHandler = (e) => {
		e.preventDefault();

		if (keyword.trim()) {
			navigate(`/listing/${keyword}`);
		} else {
			navigate("/");
		}
	};
	return (
		<Center>
			<CenterContainer onSubmit={searchHandler}>
				<SearchContainer>
					<Input
						placeholder="Czego szukasz?"
						type="text"
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<Text color="var(--linkColor)">szukaj wielu</Text>
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
