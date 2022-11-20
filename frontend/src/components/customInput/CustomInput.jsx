import { Container } from './CustomInput.styles';

const CustomInput = ({
	rightPart,
	onChange,
	placeholder,
	borderRadius,
	rows,
	sx = { padding: '10px', fontSize: '20px', color: 'LightGrey' },
	size = 30,
	icon,
	color,
	children,
	width,
	startAdornment,
	multiline = true,
	type,
	inputProps,
	...props
}) => {
	return (
		<>
			<Container
				{...props}
				placeholder={placeholder}
				disableUnderline={true}
				onChange={onChange}
				endAdornment={rightPart}
				borderRadius={borderRadius}
				minRows={rows}
				multiline={multiline}
				sx={sx}
				width={width}
				hovered
				type={type}
				InputProps={{ disableUnderline: true }}
				variant='outlined'
				fullWidth
			>
				{children}
			</Container>
		</>
	);
};

export default CustomInput;
