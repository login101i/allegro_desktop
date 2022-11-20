import React from 'react';

import { Category } from './SideBarLeft.styles';
import CustomIcon from '../../../customIcon/CustomIcon';
import { Flex } from '../../../../components';
import { sideBarCategoriesAdvantagesSecII, sideBarCategoriesBenefitsSecII } from '../../../../utils/data';

export const CategoriesComponent = ({ categoriesData }) => {
	const categories = categoriesData === 'dzialy' ? sideBarCategoriesAdvantagesSecII : sideBarCategoriesBenefitsSecII;

	return (
		<>
			{categories.map(cat => (
				<Flex
					key={cat.category}
					center
					style={{
						margin: '1px 0px',
						paddingLeft: '50px',
					}}
				>
					<CustomIcon size={22} icon={cat.icon} style={{ marginRight: '5px' }} />
					<Category>{cat.category}</Category>
				</Flex>
			))}
		</>
	);
};
