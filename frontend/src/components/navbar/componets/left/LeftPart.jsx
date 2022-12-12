import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../../../assets/pictures/logo.svg';
import { screens } from '../../../responsive';

import { Left, Image, MobileImage } from './LeftPart.styles';

export const LeftPart = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Left isMobile={isMobile}>
			<Link to='/'>
				<Image isMobile={isMobile}>
					<img src={Logo} alt='Allegro' />
				</Image>
			</Link>
		</Left>
	);
};
