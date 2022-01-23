import React from "react";
import styled from "styled-components";

import { Text, PathComponent } from "../components";

const NavContainer = styled.div`
	color: var(--linkColor);
	display: flex;
	align-items: center;

	justify-content: space-between;
	width: 100%;
	padding: 8px 20px;
`;
const FlexRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;
`;

const NavbarPage = ({ rightPart, path }) => {
	const href = window.location.href;
	const removeLocalhost = href.split("localhost:3000/").pop();
	let replaceChar = removeLocalhost.replace(/-/g, " ");

	const pahtItems = replaceChar.split("/");

	return (
		<NavContainer>
			{path ? (
				<FlexRow>
					<PathComponent path={pahtItems} />
				</FlexRow>
			) : (
				<Text bold>Ścieżka dostępu</Text>
			)}

			<FlexRow>{rightPart}</FlexRow>
		</NavContainer>
	);
};

export default NavbarPage;
