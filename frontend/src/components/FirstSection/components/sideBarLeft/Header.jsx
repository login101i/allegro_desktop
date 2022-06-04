import { useState } from "react";

import {
	Header,
	HeaderLeft,
	SpanText,
	HeaderRight
} from "./SideBarLeft.styles";

export const HeaderComponent = ({showCategories}) => {
	const [sections, setSections] = useState(true);
	const [benefits, setbenefits] = useState(false);

	const toggleBenefits = () => {
		setbenefits(true);
		setSections(false);
		showCategories('korzysci')
	};
	const togglehead = () => {
		setbenefits(false);
		setSections(true);
		showCategories('dzialy')

	};

	return (
		<Header>
		<HeaderLeft head={sections}>
				<SpanText onClick={togglehead} head={sections}>
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
