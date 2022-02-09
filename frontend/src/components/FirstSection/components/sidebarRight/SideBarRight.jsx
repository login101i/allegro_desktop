import React from "react";

import ContainerInfo1 from "./ContainerInfo1";
import ContainerInfo2 from "./ContainerInfo2";

import { MainContainer } from "./SideBarRight.styles";

const SidebarRight = () => {
	return (
		<MainContainer>
			<ContainerInfo1 />
			<ContainerInfo2 />
		</MainContainer>
	);
};

export default SidebarRight;
