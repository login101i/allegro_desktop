import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";

import SidebarLeft from "./components/sideBarLeft/SideBarLeft";
import Center from "./components/center/Center";
import SidebarRight from "./components/sidebarRight/SideBarRight";

import { MainContainer } from "./FirstSection.styles";

const FirstSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	if (isMobile) {
		return (
			<MainContainer isMobile={isMobile}>
				<Center />
			</MainContainer>
		);
	} else
		return (
			<>
				<MainContainer>
					<SidebarLeft />
					<Center />
					<SidebarRight />
				</MainContainer>
			</>
		);
};

export default FirstSection;
