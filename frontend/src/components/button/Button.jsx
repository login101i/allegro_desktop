import { ButtonContainer, Icon } from './Button.styles';

const Button = ({
	title,
	background,
	icon,
	children,
	outlined,
	color = 'white',
	onClick,
	width = '250px',
	borderRadius,
	style,
	bold,
	hovered,
	height,
	disabled,
	...rest
}) => {
	return (
		<ButtonContainer
			background={background}
			outlined={outlined}
			color={color}
			onClick={onClick}
			width={width}
			borderRadius={borderRadius}
			style={style}
			bold={bold}
			hovered={hovered}
			height={height}
			disabled={disabled}
			{...rest}
		>
			<Icon />
			{title}
			{children}
		</ButtonContainer>
	);
};

export default Button;
