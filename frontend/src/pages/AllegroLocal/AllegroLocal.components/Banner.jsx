
import {
	TopLeftCont,
} from "../AllegroLocal.styles";

import { Flex, Text, ImageComponent } from "../../../components";


const Banner = ({isMobile}) => {
	return (
		<TopLeftCont isMobile={isMobile}>
			<ImageComponent
				size={70}
				img="https://upload.wikimedia.org/wikipedia/commons/d/dd/Aparat_Icon.png"
				style={{ marginRight: "30px" }}
			/>
			<Flex column>
				<Text bold title="Zamień nietrafione prezenty!" size={28} />
				<Flex column={isMobile}>
					<Text>Zganirj kasę i nawet 20 Monet.</Text>
					<Text color="var(--linkColor)">Sprawdź szczegóły</Text>
				</Flex>
			</Flex>
		</TopLeftCont>
	);
};

export default Banner;
