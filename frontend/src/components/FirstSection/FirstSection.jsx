import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';
import { Center } from './components/center/Center';
import SidebarRight from './components/sidebarRight/SideBarRight';
import SidebarLeft from './components/sideBarLeft/SideBarLeft';
import { MainContainer } from './FirstSection.styles';

const FirstSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<MainContainer isMobile={isMobile}>
				{!isMobile && <SidebarLeft />}
				<Center />
				{!isMobile && <SidebarRight />}
			</MainContainer>
		</>
	);
};

export default FirstSection;
