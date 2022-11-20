import { useState, useEffect, useReducer } from "react";
import { useMediaQuery } from "react-responsive";
import { screens } from "../../components/responsive";
import { useDispatch, useSelector } from "react-redux";

import { CartTitle } from "../../components";
import { clearErrors } from "../../redux/actions/productActions";
import { localVersion } from "../../redux/actions/versionAction";
import { NEW_PRODUCT_RESET } from "../../redux/constants/productConstants";

import { typeOfSelligReducer } from "./utils/AllegroLocal.utils";

import {
	MainContainer,
	Container,
	LeftPart,
	BottomLeftCont,
	RequiredFields
} from "./AllegroLocal.styles";

import {
	RightPartComponent,
	Banner,
	UploadImages,
	Description,
	StateOfProduct,
	ItemPrice,
	ItemLocation,
	ShippingMetod,
	SellAs,
	HighlightItemAs
} from "./AllegroLocal.components";

export const AllegroLocal = () => {
	const [range, setRange] = useState("false");
	const [shipping, setShipping] = useState(false);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [stock, setStock] = useState(1);
	const [images, setImages] = useState([]);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const dispatch = useDispatch();
	const { loading, error, success } = useSelector((state) => state.newProduct);

	useEffect(() => {
		const CLEAR_ERRORS = 3000;
		if (error) {
			setTimeout(() => {
				dispatch(clearErrors());
			}, CLEAR_ERRORS);
		}
		if (success) {
			setTitle("");
			setPrice("");
			setDescription("");
			setCategory("");
			setStock("");
			setImages([]);
			dispatch({ type: NEW_PRODUCT_RESET });
		}
	}, [dispatch, error, success]);

	dispatch(localVersion());

	const [stateSellingType, dispatchSellingTypeReducer] = useReducer(
		typeOfSelligReducer,
		{
			kupTeraz: true,
			licytacja: false,
			darmowe: false,
			infoPosition: 0
		}
	);

	return (
		<MainContainer isMobile={isMobile}>
			<CartTitle title="Allegro lokalnie" />
			<Container isMobile={isMobile}>
				<LeftPart isMobile={isMobile}>
					<Banner isMobile={isMobile} />
					<BottomLeftCont isMobile={isMobile}>
						<UploadImages setImages={setImages} />
						<Description
							setTitle={setTitle}
							setCategory={setCategory}
							setDescription={setDescription}
							category={category}
						/>
						<StateOfProduct />
						<ItemPrice setPrice={setPrice} isMobile={isMobile} />
						<ItemLocation
							setRange={setRange}
							range={range}
							isMobile={isMobile}
						/>
						<ShippingMetod setShipping={setShipping} shipping={shipping} />
						<SellAs
							stateSellingType={stateSellingType}
							dispatchSellingTypeReducer={dispatchSellingTypeReducer}
						/>
						<HighlightItemAs isMobile={isMobile} />
						<RequiredFields>* Oznacza wymagane pola</RequiredFields>
					</BottomLeftCont>
					<RightPartComponent
						stateSellingType={stateSellingType}
						title={title}
						price={price}
						description={description}
						category={category}
						seller={"maćko"}
						stock={stock}
						loading={loading}
						error={error}
						success={success}
						images={images}
					/>
				</LeftPart>
			</Container>
		</MainContainer>
	);
};
