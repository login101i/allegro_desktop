import { LoadImages } from '../utils/AllegroLocal.utils';

import { Flex, Text, Button, ImageComponent } from '../../../components';

import { LoadImagesComponent, BorderContainer, InputUploadFile, LabelUploadFile } from '../AllegroLocal.styles';

const UploadImages = ({ setImages }) => {
	return (
		<>
			<Flex>
				<ImageComponent
					size={60}
					img='https://upload.wikimedia.org/wikipedia/commons/d/dd/Aparat_Icon.png'
					style={{ marginRight: '30px' }}
				/>
				<Flex column>
					<Text title='Dodaj zdjęcia pzedmiotu'></Text>
					<Text wrap='true'>Możesz dodać do 15 zdjęć w formacie JPG, PNG, BMP, maks. 2MB</Text>
				</Flex>
			</Flex>
			<BorderContainer></BorderContainer>
			<Flex column align space>
				<Text textAlign color='#7770bd' title='	Przeciągnij i upuść zdjęcia tutaj'></Text>
				<Text textAlign>lub</Text>

				<LabelUploadFile htmlFor='upload' type='file' onChange={e => LoadImages(e, setImages)} multiple>
					<Text class='glyphicon glyphicon-folder-open' aria-hidden='true'>
						Nie wybrano pliku
					</Text>
					<InputUploadFile type='file' id='upload' multiple />
				</LabelUploadFile>
			</Flex>
			<BorderContainer> </BorderContainer>
		</>
	);
};

export default UploadImages;
