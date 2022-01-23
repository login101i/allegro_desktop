import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";

import SidebarLeft from "../FirstSection/SidebarLeft";
import Center from "../FirstSection/Center";
import SidebarRight from "../FirstSection/SideBarRight";



const FirstSection = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const isMedium = useMediaQuery({ maxWidth: screens.lg });
	const isLarge = useMediaQuery({ minWidth: screens.lg });

	const MainContainer = styled.div`
		width: 1660px;
		display: grid;
		grid-template-columns: 292px 16px minmax(0, 985px) 16px 292px;
		height: auto;
		margin-top: ${!isMobile && "16px"};
		display: flex;
	`;

	const Space = styled.div`
		width: 20px;
	`;

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
				<MainContainer>
					<Center />
				</MainContainer>
			</>
		);
	}

	return <MainContainer>Hello from mobile resolution</MainContainer>;
};

export default FirstSection;
