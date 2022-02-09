import { useState } from "react";

import {
	Header,
	HeaderLeft,
	SpanText,
	HeaderRight
} from "./SideBarLeft.styles";

export const HeaderComponent = () => {
	const [head, setHead] = useState(true);
	const [benefits, setbenefits] = useState(false);

	const toggleBenefits = () => {
		setbenefits(true);
		setHead(false);
	};
	const togglehead = () => {
		setbenefits(false);
		setHead(true);
	};

	return (
		<Header>
			<HeaderLeft head={head}>
				<SpanText onClick={togglehead} head={head}>
					Działy
				</SpanText>
			</HeaderLeft>
			<HeaderRight benefits={benefits}>
				<SpanText benefits={benefits} onClick={toggleBenefits}>
					Korzyści
				</SpanText>
			</HeaderRight>
		</Header>
	);
};
