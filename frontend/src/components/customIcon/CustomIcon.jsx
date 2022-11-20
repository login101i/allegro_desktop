import { Icon, StyledBadge } from './CustomIcon.styles';

const CustomIcon = ({ badgeContent, size = 30, icon, color, style }) => {
	const IconName = icon;

	return (
		<Icon style={style}>
			{badgeContent ? (
				<StyledBadge badgeContent={badgeContent}>
					<IconName style={{ fontSize: `${size}px` }} />
				</StyledBadge>
			) : (
				<IconName
					style={{
						fontSize: `${size}px`,
						color: `${color}`,
						textAlign: 'center',
					}}
				/>
			)}
		</Icon>
	);
};

export default CustomIcon;
