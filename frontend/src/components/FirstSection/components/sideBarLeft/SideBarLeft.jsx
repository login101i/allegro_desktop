import BorderAndTitle from "../../../BorderAndTitle";
import { HeaderComponent } from "./Header";
import { CategoriesComponent } from "./Categories";
import { MainContainer } from "./SideBarLeft.styles";

const SidebarLeft = () => {
	return (
		<MainContainer>
			<HeaderComponent />
			<CategoriesComponent />
			<BorderAndTitle title="Wszystkie kategorie" />
		</MainContainer>
	);
};

export default SidebarLeft;
