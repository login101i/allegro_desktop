import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../components/responsive';
import { useDispatch, useSelector } from 'react-redux';
import { CartTitle } from '../../components';
import { clearErrors } from '../../redux/actions/productActions';
import { localVersion } from '../../redux/actions/versionAction';
import { NEW_PRODUCT_RESET } from '../../redux/constants/productConstants';
import { MainContainer, Container, LeftPart, BottomLeftCont, RequiredFields } from './AllegroLocal.styles';
import {
	RightPartComponent,
	Banner,
	UploadImages,
	Description,
	StateOfProduct,
	ItemPrice,
	ItemLocation,
	ShippingMethod,
	SellAs,
	HighlightItemAs,
} from './AllegroLocal.components';
import { SelectContainer } from '../../components/navbar/Navbar.styles';
import { Option } from '../../components/option/Option.styles';

const defaultInputValues = {
	title: '',
	price: '',
	description: '',
	category: 'AGD',
	seller: '',
	stock: 1,
	range: false,
	shipping: false,
	stateOfProduct: {},
	sellingType: {},
};

const AllegroLocal = () => {
	const [category, setCategory] = useState('AGD');
	const [images, setImages] = useState([]);
	const [inputs, setInputs] = useState(defaultInputValues);
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const dispatch = useDispatch();
	const { error, success } = useSelector(state => state.newProduct);

	const handleInputs = name => value => {
		setInputs(prev => ({ ...prev, [name]: value }));
	};
	useEffect(() => {
		const CLEAR_ERRORS = 3000;
		if (error) {
			setTimeout(() => {
				dispatch(clearErrors());
			}, CLEAR_ERRORS);
		}
		if (success) {
			setInputs(defaultInputValues);
			setImages([]);
			dispatch({ type: NEW_PRODUCT_RESET });
		}
	}, [success]);

	useEffect(() => {
		dispatch(localVersion());
	}, []);

	return (
		<MainContainer isMobile={isMobile}>
			<CartTitle title='Allegro lokalnie' />
			<Container isMobile={isMobile}>
				<LeftPart isMobile={isMobile}>
					<Banner isMobile={isMobile} />
					<BottomLeftCont isMobile={isMobile}>
						<UploadImages setImages={setImages} />
						<Description
							setTitle={handleInputs('title')}
							// setCategory={setCategory}
							setDescription={handleInputs('description')}
							category={category}
							data={inputs}
						/>
						<StateOfProduct setStateOfProduct={handleInputs('stateOfProduct')} />
						<ItemPrice setPrice={handleInputs('price')} isMobile={isMobile} value={inputs.price} />
						<ItemLocation setRange={handleInputs('range')} range={inputs.range} isMobile={isMobile} />
						<ShippingMethod setShipping={handleInputs('shipping')} shipping={inputs.shipping} />
						<SellAs setSellingType={handleInputs('sellingType')} />
						<HighlightItemAs isMobile={isMobile} />
						<RequiredFields>* Oznacza wymagane pola</RequiredFields>
					</BottomLeftCont>
				</LeftPart>
				<RightPartComponent sellingType={inputs.sellingType} data={inputs} images={images} isMobile={isMobile} />
			</Container>
		</MainContainer>
	);
};

export default AllegroLocal;
