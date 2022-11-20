import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Left from './components/left/Left';
import Right from './components/right/Right';
import PsiSmak from '../../assets/pictures/PsiSmak.png';
import { Loader, Flex } from '../../components';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { screens } from '../responsive';

import { Container, BackgroundImage, Image } from './fifthSection.styles';

const FifthSection = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.products);

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Container>
			{!isMobile && <BackgroundImage src={PsiSmak} />}
			<Flex space >
				{loading ? <Loader /> : <Left />}
				{loading ? <Loader /> : <Right/>}
			</Flex>
		</Container>
	);
};

export default FifthSection;
