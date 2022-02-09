import { useReducer } from "react";

import CheckIcon from "@mui/icons-material/Check";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

import { BlackDot, ProductState } from "../AllegroLocal.styles";
import { Flex, Text, CustomIcon } from "../../../components";

import { wyroznijReducer } from "../utils/AllegroLocal.utils";

const HighlightItemAs = ({ isMobile }) => {
	const [wyroznijState, dispatchWyroznijReducer] = useReducer(wyroznijReducer, {
		wyroznij30: true,
		wyroznij14: false,
		wyroznij3: false
	});

	return (
		<>
			<Text title="Nowe, lepsze wyróżnienia!" />
			<Flex align>
				<BlackDot />
				<Text>wyróżnienie aż na 30 dni</Text>
				<Text
					background="#0fb91b"
					color="white"
					style={{ marginLeft: "20px" }}
					subTitle="	Nowość!"
					textAlign="center"
				></Text>
			</Flex>
			<Flex align>
				<BlackDot />
				<Text>niższe ceny pozostałych opcji</Text>
			</Flex>
			<Flex align>
				<Text>Szczegóły w</Text>
				<Text color="var(--greenLocalnie)" hovered>
					regulaminie promocji
				</Text>
			</Flex>
			<Flex column>
				<ProductState
					onClick={() => dispatchWyroznijReducer({ type: "30" })}
					style={{
						border: wyroznijState.wyroznij30 ? "1px solid #f7ae10" : ""
					}}
				>
					<Flex align column={isMobile}>
						<Flex>
							<CustomIcon icon={AutoGraphIcon} size={40} color="#f7ae10" />
							<Flex column>
								<Text>Wyróżnij na Allegro Lokalnie i Allegro</Text>
								<Text size={16}>przez 30 dni</Text>
							</Flex>
						</Flex>

						<Flex>
							<Text style={{ textDecoration: "line-through" }}>13,90 zł</Text>
							<Text bold>1.00 zł</Text>

							{wyroznijState.wyroznij30 && (
								<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
							)}
						</Flex>
					</Flex>
					<Text
						textAlign={isMobile && "center"}
						wrap
						color="grey"
						subTitle="Nawet do 10x więcej wyświetleń i do 5x większa szansa na
									sprzedaż!"
					></Text>
				</ProductState>

				<ProductState
					onClick={() => dispatchWyroznijReducer({ type: "14" })}
					style={{
						border: wyroznijState.wyroznij14 ? "1px solid #f7ae10" : ""
					}}
				>
					<Flex align column={isMobile}>
						<Flex>
							<CustomIcon icon={SpeedIcon} size={40} color="#f7ae10" />
							<Flex column>
								<Text>Wyróżnij na Allegro Lokalnie i Allegro</Text>
								<Text size={16}>przez 10 dni</Text>
							</Flex>
						</Flex>

						<Flex>
							<Text style={{ textDecoration: "line-through" }}>11,90 zł</Text>
							<Text bold>1.00 zł</Text>

							{wyroznijState.wyroznij14 && (
								<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
							)}
						</Flex>
					</Flex>
					<Text
						textAlign={isMobile && "center"}
						wrap
						subTitle="Nawet do 7x więcej wyświetleń i do 3x większa szansa na
									sprzedaż!"
					></Text>
				</ProductState>

				<ProductState
					onClick={() => dispatchWyroznijReducer({ type: "3" })}
					style={{
						border: wyroznijState.wyroznij3 ? "1px solid #f7ae10" : ""
					}}
				>
					<Flex align column={isMobile}>
						<Flex>
							<CustomIcon
								icon={LocalFireDepartmentIcon}
								size={40}
								color="#f7ae10"
							/>
							<Flex column>
								<Text wrap>Wyróżnij na Allegro Lokalnie i Allegro</Text>
								<Text size={16}>przez 3 dni</Text>
							</Flex>
						</Flex>
						<Flex>
							<Text style={{ textDecoration: "line-through" }}>4,90 zł</Text>
							<Text bold>1.00 zł</Text>

							{wyroznijState.wyroznij3 && (
								<CustomIcon icon={CheckIcon} size={20} color="#f7ae10" />
							)}
						</Flex>
					</Flex>
					<Text
						textAlign={isMobile && "center"}
						wrap
						color="grey"
						subTitle="Nawet do 3x więcej wyświetleń!"
					></Text>
				</ProductState>
			</Flex>
		</>
	);
};

export default HighlightItemAs;
