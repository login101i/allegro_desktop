import { ForumOutlined } from "@mui/icons-material";

import { ProductState } from "../AllegroLocal.styles";

import { Flex, Text, CustomIcon } from "../../../components";


const SellAs = ({ stateSellingType, dispatchSellingTypeReducer }) => {
	return (
		<>
			<Text bold titole="Wystaw jako" />

			<Flex column>
				<ProductState
					onClick={() => dispatchSellingTypeReducer({ type: "kup teraz" })}
					style={{
						border: stateSellingType.kupTeraz ? "1px solid #ff5a00" : ""
					}}
				>
					<Flex space>
						<Text size={20} color="#ff5a00">
							Kup Teraz
						</Text>
						{stateSellingType.kupTeraz && (
							<CustomIcon icon={ForumOutlined} size={20} color="#ff5a00" />
						)}
					</Flex>
					<Text wrap>
						Widoczne na Allegro Lokalnie i Allegro Kupujący mogą zapłacić online
					</Text>
				</ProductState>
				<ProductState
					onClick={() => dispatchSellingTypeReducer({ type: "licytacja" })}
					style={{
						border: stateSellingType.licytacja ? "1px solid #7770bd" : ""
					}}
				>
					<Flex space>
						<Text color="#7770bd" size={20}>
							Licytacja
						</Text>
						{stateSellingType.licytacja && (
							<CustomIcon icon={ForumOutlined} size={20} color="#7770bd" />
						)}
					</Flex>
					<Text wrap>
						Widoczna przez 7 dni na Allegro Lokalnie i Allegro Kupujący mogą
						zapłacić online
					</Text>
				</ProductState>

				<ProductState
					onClick={() => dispatchSellingTypeReducer({ type: "darmowe" })}
					style={{
						border: stateSellingType.darmowe ? "1px solid #f7ae10" : ""
					}}
				>
					<Flex space>
						<Text size={20} color="#f7ae10">
							Darmowe Ogłoszenie
						</Text>
						{stateSellingType.darmowe && (
							<CustomIcon icon={ForumOutlined} size={20} color="#f7ae10" />
						)}
					</Flex>
					<Text wrap>
						Widoczne na Allegro Lokalnie i Allegro Sposób zapłaty sam ustalasz z
						kupującym
					</Text>
				</ProductState>
			</Flex>

			<Flex bold title="Wyróżnij swoje ogłoszenie"></Flex>
			<Text wrap borderBottom>
				Jeśli wyróżnisz ogłoszenie, będzie ono widoczne wyżej w wynikach
				wyszukiwania. Możesz wybrać jedną z poniższych opcji:
			</Text>
		</>
	);
};

export default SellAs;
