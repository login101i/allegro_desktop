import { useReducer } from "react";
import { useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { newProduct } from "../../../redux/actions/productActions";
import {
	rightPartContent
	
} from "../utils/AllegroLocal.utils";
import { RightPart, RightCont, RightContInfo } from "../AllegroLocal.styles";
import { Flex, Text, CustomIcon, Button, Loader } from "../../../components";

const RightPartComponent = ({
	stateSellingType,
	title,
	price,
	description,
	category,
	seller,
	stock = 1,
	loading,
	error,
	success,
	images
}) => {
	const dispatch = useDispatch();
	

	const submitHandler = (e) => {
		e.preventDefault();
		const productData = {
			title,
			price,
			description,
			category,
			seller,
			stock
		};
		const imagesArray = [];
		images.forEach((url) => {
			const imageUrl = { url };
			imagesArray.push(imageUrl);
		});
		productData.img = imagesArray;
		dispatch(newProduct(productData));
	};

	return (
		<RightPart>
			<RightCont>
				<Flex space fullWidth align>
					<Text
						color={[stateSellingType.infoPosition].color}
						size={33}
						bold
					>
						{rightPartContent[stateSellingType.infoPosition].title}
					</Text>
					<CustomIcon
						icon={rightPartContent[stateSellingType.infoPosition].icon}
						size={60}
						color={rightPartContent[stateSellingType.infoPosition].color}
					/>
				</Flex>
				<Flex column>
					{rightPartContent[stateSellingType.infoPosition].info.map((item) => (
						<>
							<Flex align>
								<CustomIcon icon={CheckIcon} size={22} />
								<Text wrap>{item.info}</Text>
							</Flex>
						</>
					))}

					<Flex align style={{ marginBottom: "16px" }}>
						<CustomIcon icon={InfoOutlinedIcon} color="var(--allegroColor)" />
						<Text size={22} color="var(--allegroColor)">
							Dodaj zdjęcie
						</Text>
					</Flex>
				</Flex>
				{loading ? (
					<Loader />
				) : (
					<Button
						background="#C3C3C3"
						width="90%"
						borderRadius
						style={{
							padding: "16px 32px",
							height: "48px",
							marginTop: "16px"
						}}
						onClick={(e) => {
							submitHandler(e);
						}}
					>
						{rightPartContent[stateSellingType.infoPosition].buttonText}
					</Button>
				)}
				{error && (
					<Text color="red">
						Wystąpił błąd. Proszę uzupełnić wszystkie wymagane pola.
					</Text>
				)}
				{success && <Text color="green"> Pomyślnie dodano produkt</Text>}

				<RightContInfo>
					<Flex column align>
						<Flex>
							<Text>Wystawiając przedmiot akceptujesz </Text>
							<Text color="var(--linkColor)">regulamin</Text>
						</Flex>
						<Flex>
							<Text>Możesz też wystawić przez</Text>
							<Text color="var(--linkColor)"> dotychczasowy formularz</Text>
						</Flex>
					</Flex>
				</RightContInfo>
			</RightCont>
		</RightPart>
	);
};

export default RightPartComponent;
