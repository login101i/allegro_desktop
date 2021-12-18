import React from "react";
import styled from "styled-components";

import ContainerInfo1 from "./ContainerInfo1";
import ContainerInfo2 from "./ContainerInfo2";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 344px;
	height: 100%;
`;

const SidebarRight = () => {
	return (
		<MainContainer>
			<ContainerInfo1 />
			<ContainerInfo2 />
		</MainContainer>
	);
};

export default SidebarRight;
