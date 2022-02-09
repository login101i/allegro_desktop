import { LoadImages } from "../utils/AllegroLocal.utils";

import {
	Flex,
	Text,
	Button,
	ImageComponent
} from "../../../components";

import { LoadImagesComponent, BorderContainer } from "../AllegroLocal.styles";

const UploadImages = ({ setImages }) => {
	return (
		<>
			<Flex>
				<ImageComponent
					size={60}
					img="https://upload.wikimedia.org/wikipedia/commons/d/dd/Aparat_Icon.png"
					style={{ marginRight: "30px" }}
				/>
				<Flex column>
					<Text title="Dodaj zdjęcia pzedmiotu"></Text>
					<Text wrap>
						Możesz dodać do 15 zdjęć w formacie JPG, PNG, BMP, maks. 2MB
					</Text>
				</Flex>
			</Flex>
			<BorderContainer></BorderContainer>
			<Flex column align space style={{ height: "190px" }}>
				<Text
					textAlign
					color="#7770bd"
					title="	Przeciągnij i upuść zdjęcia tutaj"
				></Text>
				<Text textAlign>lub</Text>

				<LoadImagesComponent
					type="file"
					onChange={(e) => LoadImages(e, setImages)}
					multiple
				/>
				<Button
					color="#7770bd"
					bold
					background="#edecf7"
					borderRadius
					hovered
					type="file"
					onChange={LoadImages}
					multiple
				>
					Wybierz zdjęcia z dysku
				</Button>
			</Flex>
			<BorderContainer> </BorderContainer>
		</>
	);
};

export default UploadImages;
