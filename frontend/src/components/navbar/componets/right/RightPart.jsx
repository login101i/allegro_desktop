import { useState, useRef, useContext } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CustomIcon, MenuLoginLogout, RedirectOnClick } from '../../../../components';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../../responsive';
import { CartContext } from '../../../../context/cart.context';
import { MenuLogged, Right, MenuLoginMobile, MenuLoginLogoutContainer } from './RightPart.styles';

export const RightPart = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [optionMenu, setOptionMenu] = useState('zakupy');

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const catMenu = useRef(null);

	const closeOpenMenus = e => {
		if (catMenu.current && openMenu && !catMenu.current.contains(e.target)) {
			setOpenMenu(false);
		}
	};
	document.addEventListener('mousedown', closeOpenMenus);

	const { cart } = useContext(CartContext);
	const Menu = isMobile ? MenuLoginMobile : MenuLogged;

	return (
		<Right isMobile={isMobile}>
			<CustomIcon icon={StarBorderIcon} />
			<CustomIcon icon={ForumOutlinedIcon} badgeContent={3} />
			<CustomIcon icon={NotificationsNoneOutlinedIcon} badgeContent={1} />
			<RedirectOnClick to='/cart'>
				<CustomIcon icon={ShoppingCartOutlinedIcon} badgeContent={cart.length} />
			</RedirectOnClick>
			<MenuLoginLogout />
		</Right>
	);
};
