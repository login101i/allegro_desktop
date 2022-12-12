import { Icon, StyledBadge } from './CustomIcon.styles';
import { Text } from '../../components';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../responsive';

const CustomIcon = ({ badgeContent, size = 26, icon, color, style, onClick, children }) => {
	const IconName = icon;
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Icon style={style} onClick={onClick}>
			{badgeContent ? (
				<StyledBadge badgeContent={badgeContent}>
					<IconName style={{ fontSize: isMobile ? '19px' : `${size}px` }} />
				</StyledBadge>
			) : (
				<IconName
					style={{
						fontSize: isMobile ? '19px' : `${size}px`,
						color: `${color}`,
						textAlign: 'center',
						marginRight: '10px',
						style,
					}}
				/>
			)}
			<Text color={color} marginTop='4px'>
				{' '}
				{children}
			</Text>
		</Icon>
	);
};

export default CustomIcon;
