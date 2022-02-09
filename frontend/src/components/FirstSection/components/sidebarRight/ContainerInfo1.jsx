
import { useSelector } from "react-redux";

import PayPalLogo from "../../../../assets/pictures/PayPalLogo.png";
import Logo2 from "../../../../assets/pictures/goodToSee3.png";
import Logo3 from "../../../../assets/pictures/goodToSee2.png";
import { Button, Text, Flex } from "../../../../components";
import { Container1, Icon } from "../sidebarRight/SideBarRight.styles";

const ContainerInfo1 = () => {
	const { isAuthenticated, user } = useSelector((state) => state.auth);

	return (
		<Container1>
			<Flex column space style={{ width: "85%", height: "90%" }}>
				{isAuthenticated ? (
					<Text title={"Cześć " + user.name + "!"} bold />
				) : (
					<Text title={"Witaj na allegro!"} bold />
				)}
				<Flex>
					<Icon src={PayPalLogo} />
					<Text>Twoje środki Allegro Pay: 4 000 zł.</Text>
				</Flex>
				<Flex>
					<Icon src={Logo2} />
					<Text>W Allegro Family darmowe dostawy dla 10 członków rodziny!</Text>
				</Flex>
				<Flex>
					<Icon src={Logo3} />
					<Text>W Allegro Family darmowe dostawy dla 10 członków rodziny</Text>
				</Flex>
				<Button title={"Poznaj swoje korzyści"} />
			</Flex>
		</Container1>
	);
};

export default ContainerInfo1;
