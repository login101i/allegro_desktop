import { useState } from 'react';
import BorderAndTitle from '../../../borderAndTitle/BorderAndTitle';
import { HeaderComponent } from './Header';
import { CategoriesComponent } from './Categories';
import { MainContainer } from './SideBarLeft.styles';

const SidebarLeft = () => {
	const [categoriesData, setCategoriesData] = useState('dzialy');

	const showCategories = input => {
		setCategoriesData(input);
	};
	return (
		<MainContainer>
			<HeaderComponent showCategories={input => showCategories(input)} />
			<CategoriesComponent categoriesData={categoriesData} />
			{categoriesData === 'dzialy' ? <BorderAndTitle title='Wszystkie kategorie' border /> : null}
		</MainContainer>
	);
};

export default SidebarLeft;
