
import {Container, ItemContainer, Image} from "./ThirdSection.styles"
import { Text } from "../../components";
import {thirdSectionImages} from "../../utils/data"


const ThirdSection = () => {
	return (
		<Container>
			{thirdSectionImages.map((item) => (
				<ItemContainer key={item.id}>
					<Image src={item.img} />
					<Text>{item.title}</Text>
				</ItemContainer>
			))}
		</Container>
	);
};

export default ThirdSection;
