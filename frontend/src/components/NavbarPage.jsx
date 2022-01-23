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

const NavbarPage = ({ leftPart, rightPart, path }) => {
	const href = window.location.href;
	console.log(href);
	const removeLocalhost = href.split("localhost:3000/").pop();
	console.log(removeLocalhost);
	let replaceChar = removeLocalhost.replace(/-/g, " ");
	console.log(replaceChar);

	const pahtItems = replaceChar.split("/");
		console.log(pahtItems);


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
