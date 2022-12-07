import { Icon, StyledBadge } from './CustomIcon.styles';
import { Text } from '../../components';

const CustomIcon = ({ badgeContent, size = 28, icon, color, style, children }) => {
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
						marginRight: '10px',
						style
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
