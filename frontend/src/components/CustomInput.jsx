import React from "react";
import styled from "styled-components";

import { Input } from "@mui/material";

const Container = styled(Input)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
`;

const CustomInput = ({ rightPart, onChange, placeholder }) => {
	return (
		<Container
			fullWidth
			placeholder={placeholder}
			disableUnderline={true}
			onChange={onChange}
			endAdornment={rightPart}
		></Container>
	);
};

export default CustomInput;
