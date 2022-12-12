import { SubTitle, TextContainer } from './Test.styles';
const Text = ({
	title,
	size =16,
	marginTop,
	bold,
	children,
	subTitle = '',
	color,
	borderBottom,
	hovered,
	onClick,
	wrap,
	textAlign,
	style,
	background,
	fullWidth,
	firstSmall,
	capitalize,
}) => {
	return (
		<TextContainer
			size={title ? 22 : size}
			marginTop={marginTop}
			bold={bold}
			color={color}
			borderBottom={borderBottom}
			hovered={hovered}
			onClick={onClick}
			wrap={wrap}
			textAlign={textAlign}
			style={style}
			background={background}
			fullWidth={fullWidth}
			firstSmall={firstSmall}
			capitalize={capitalize}
		>
			{title}
			{children}
			{subTitle && (
				<SubTitle color={color} textAlign={textAlign}>
					{subTitle}
				</SubTitle>
			)}
		</TextContainer>
	);
};

export default Text;
