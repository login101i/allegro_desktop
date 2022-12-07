import { Badge } from '@material-ui/core';

const Badged = ({ children, badgeContent }) => {
	return (
		<Badge
			overlap='rectangular'
			badgeContent={badgeContent}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			color='primary'
		>
			{children}
		</Badge>
	);
};

export default Badged;
