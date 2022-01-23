import React from "react";
import styled from "styled-components";

import { Input } from "@mui/material";
import TextField from "@mui/material/TextField";

const Container = styled(TextField)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: "1px solid lightGrey";
	border-height: 1px;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius + "px" : "none"};

	height: auto;
	max-width: ${(props) => (props.width ? props.width : "100%")};

	&:hover {
		// border: ${(props) => props.hovered && "1px solid lightGrey"};
		// cursor: pointer;
	}
`;

const CustomInput = ({
	rightPart,
	onChange,
	placeholder,
	borderRadius,
	rows,
	sx = { padding: "10px", fontSize: "20px", color: "LightGrey" },
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
				fullWidth
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
				variant="standard"
				InputProps={{ disableUnderline: true }}
				variant="outlined"
				fullWidth
			>
				{children}
			</Container>
		</>
	);
};

export default CustomInput;
