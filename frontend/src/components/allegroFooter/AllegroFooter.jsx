import LogoWhite from '../../assets/pictures/logoWhite.svg';
import { Text } from '..';
import { Container, Wrapper, Logo } from './AllegroFooter.styles';

const AllegroFooter = ({ width, isMobile }) => {
	return (
		<Container>
			<Wrapper width={width} isMobile={isMobile}>
				<Text color='white' textAlign='center' wrap='true'>
					Korzystanie z serwisu oznacza akceptację regulaminu
				</Text>
				<Logo src={LogoWhite} alt='Allegro' />
			</Wrapper>
		</Container>
	);
};

export default AllegroFooter;
