import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";

import SidebarLeft from "../FirstSection/SidebarLeft";
import Center from "../FirstSection/Center";
import SidebarRight from "../FirstSection/SideBarRight";

const MainContainer = styled.div`
	width: 1660px;
	display: grid;
	grid-template-columns: 292px 16px minmax(0, 985px) 16px 292px;
	height: auto;
	margin-top: ${(props) => props.isMobile ? "0px" : "16px"};
	display: flex;
`;
const Space = styled.div`
	width: 20px;
`;
const FirstSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	if (isLarge) {
		return (
			<MainContainer>
				<SidebarLeft />
				<Space />

				<Center />

				<Space />
				<SidebarRight />
			</MainContainer>
		);
	} else if (isMobile) {
		return (
			<>
				<MainContainer isMobile={isMobile}>
					<Center />
				</MainContainer>
			</>
		);
	}
};

export default FirstSection;
