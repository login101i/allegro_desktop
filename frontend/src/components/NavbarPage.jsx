import React from "react";

import { PathComponent, Flex } from "../components";

const NavbarPage = ({ rightPart, leftPart }) => {
	const href = window.location.href;
	const removeLocalhost = href.split("localhost:3000/").pop();
	let replaceChar = removeLocalhost.replace(/-/g, " ");
	const pathItems = replaceChar.split("/");

	return (
		<Flex space>
			<PathComponent path={pathItems} />
			<Flex>{leftPart}</Flex>
			<Flex> {rightPart}</Flex>
		</Flex>
	);
};

export default NavbarPage;
