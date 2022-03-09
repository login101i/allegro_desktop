import styled from "styled-components";
import { Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-rows: auto;
	gap: 16px 16px;
	grid-template-areas: "filterContainer ResultsContainer";
	margin-top: 16px;
`;

export const FilterContainer = styled.div`
	grid-area: filterContainer;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex-grow: grow;
	padding: 12px;
`;

export const ResultsContainer = styled.div`
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	align-items: center;
`;

export const CustomInput = styled(Input)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	width: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 42px;
`;

export const ResultsNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	flex-direction: row;
	margin-top: 16px;
`;

export const StyledFormControll = styled(FormControl)(({ theme }) => ({
	backgroundColor: theme.colors.allegroColor,
	border: `2px solid ${(props) => props.theme.colors.allegroColor}`,
	color: "green",
	maxHeight: 42,
	width: 300
}));
