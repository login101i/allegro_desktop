import styled, { useTheme } from "styled-components";

const sizes = {
	small: 1,
	large: 2,
	medium: 3,
	big: 5
};

const positionVariant = {
	top: "marginTop",
	left: "marginLeft",
	right: "marginRight",
	bottom: "marginBottom"
};

const getVariant = (position, size, theme) => {
	const property = positionVariant[position];
	const sizeIndex = sizes[size];
	const value = theme.space[sizeIndex];

	return `${property}:${value}`;
};

const SpacerView = styled.View`
	${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
	const theme = useTheme();
	const variant = getVariant(position, size, theme);
	return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
	positon: "top",
	size: "small"
};
