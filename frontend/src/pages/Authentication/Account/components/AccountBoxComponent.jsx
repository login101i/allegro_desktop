import React from "react";
import styled from "styled-components";

import { MenuContentBox } from "../../../../components";

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: left;
	margin: 4px 0px;
	justify-content: ${(props) => (props.space ? "space-between" : "")};
`;

const FlexCol = styled(FlexRow)`
	flex-direction: column;
	flex: 4;
`;
const IconContainer = styled.div`
	flex: 1;
`;

const AccountBoxComponent = ({ icon, title, subTitles }) => {
	return (
		<FlexRow>
			<IconContainer>{icon}</IconContainer>
			<FlexCol>
				<MenuContentBox
					title="Zakupy na allegro lokakbue"
					subTitles={["Moje zakupy", "Licytuję", "Zarezewowane dla mnie"]}
				/>
			</FlexCol>
		</FlexRow>
	);
};

export default AccountBoxComponent;
