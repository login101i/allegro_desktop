import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { screens } from '../responsive';
import { LeftPart } from './componets/left/LeftPart';
import { CenterPart } from './componets/center/CenterPart';
import { RightPart } from './componets/right/RightPart';
import { Flex } from '../../components';
import { Container, Wrapper } from './Navbar.styles';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { version } = useSelector(state => state.version);
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const catMenu = useRef(null);

	const closeOpenMenus = e => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};

	useEffect(() => {}, [version]);

	document.addEventListener('mousedown', closeOpenMenus);

	if (version === 'allegro local')
		return (
			<Container>
				<LeftPart />
			</Container>
		);
	return isMobile ? (
		<Container isMobile>
			<Wrapper>
				<Flex column fullWidth align>
					<LeftPart />
					<RightPart />
					<Flex fullWidth>
						<CenterPart isMobile={isMobile} />
					</Flex>
				</Flex>
			</Wrapper>
		</Container>
	) : (
		<Container>
			<Wrapper>
				<LeftPart />
				<CenterPart isMobile={isMobile} />
				<RightPart />
			</Wrapper>
		</Container>
	);
};

export default Navbar;
