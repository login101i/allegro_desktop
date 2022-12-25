import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { newProduct } from '../../../redux/actions/productActions';
import { rightPartContent } from '../utils/AllegroLocal.utils';
import { RightPart, RightCont, RightContInfo } from '../AllegroLocal.styles';
import { Flex, Text, CustomIcon, Button, Loader } from '../../../components';

const RightPartComponent = ({ sellingType, data, images, isMobile }) => {
	const { loading, error, success } = useSelector(state => state.newProduct);

	const dispatch = useDispatch();

	const submitHandler = e => {
		e.preventDefault();
		const { range, shipping, stateOfProduct, sellingType, ...rest } = data;
		const productData = rest;
		const imagesArray = [];
		images.forEach(url => {
			const imageUrl = { url };
			imagesArray.push(imageUrl);
		});
		productData.img = imagesArray;
		dispatch(newProduct(productData));
	};

	return (
		<RightPart>
			<RightCont isMobile={isMobile}>
				<Flex space fullWidth align>
					<Text color={[sellingType.infoPosition || 0].color} size={33} bold>
						{rightPartContent[sellingType.infoPosition || 0].title}
					</Text>
					<CustomIcon
						icon={rightPartContent[sellingType.infoPosition || 0].icon}
						size={60}
						color={rightPartContent[sellingType.infoPosition || 0].color}
					/>
				</Flex>
				<Flex column>
					{rightPartContent[sellingType.infoPosition || 0].info.map((item, index) => (
						<Flex align key={item.info + index}>
							<CustomIcon icon={CheckIcon} size={22} />
							<Text wrap ="true">{item.info}</Text>
						</Flex>
					))}

					<Flex align style={{ marginBottom: '16px' }}>
						<CustomIcon icon={InfoOutlinedIcon} color='var(--allegroColor)' />
						<Text size={22} color='var(--allegroColor)'>
							Dodaj zdjęcie
						</Text>
					</Flex>
				</Flex>
				{loading ? (
					<Loader />
				) : (
					<Button
						background='#C3C3C3'
						width='100%'
						borderRadius
						style={{
							padding: '12px 12px',
							height: '48px',
							marginTop: '16px',
						}}
						onClick={e => {
							submitHandler(e);
						}}
					>
						<Text wrap='true' size={14}>
							{' '}
							{rightPartContent[sellingType.infoPosition || 0].buttonText}
						</Text>
					</Button>
				)}
				{error && <Text color='red'>Wystąpił błąd. Proszę uzupełnić wszystkie wymagane pola.</Text>}
				{success && <Text color='green'> Pomyślnie dodano produkt</Text>}

				<RightContInfo>
					<Flex column align>
						<Flex>
							<Text wrap='true'>Wystawiając przedmiot akceptujesz regulamin </Text>
						</Flex>
						<Flex>
							<Text wrap='true'>Możesz też wystawić przez dotychczasowy formularz</Text>
						</Flex>
					</Flex>
				</RightContInfo>
			</RightCont>
		</RightPart>
	);
};

export default RightPartComponent;
