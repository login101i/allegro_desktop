import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Left from "./components/left/Left";
import Right from "./components/right/Right";
import PsiSmak from "../../assets/pictures/PsiSmak.png";
import { Loader, Flex } from "../../components";

import {
	getProducts,
	getProductDetails
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { screens } from "../responsive";

import { Container, BackgroundImage, Image } from "./fifthSection.styles";

const FifthSection = () => {
	const dispatch = useDispatch();
	const { loading, products } = useSelector((state) => state.products);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getProductDetails("61c10b44649cdf618b815c43"));
		console.log("Pobieram produkty.");
	}, [dispatch]);

	return (
		<Container>
			{isMobile ? (
				<>
					<Flex column>
						<Image src={PsiSmak} />

						{loading ? <Loader /> : <Left isMobile products={products} />}
						{loading ? <Loader /> : <Right isMobile products={products} />}
					</Flex>
				</>
			) : (
				<>
					<BackgroundImage src={PsiSmak} />
					<Flex space>
						{loading ? <Loader /> : <Left products={products} />}
						{loading ? <Loader /> : <Right products={products} />}
					</Flex>
				</>
			)}
		</Container>
	);
};

export default FifthSection;
