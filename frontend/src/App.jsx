import styled, { ThemeProvider } from "styled-components";

import "./style.css";
import HomePage from "./pages/HomePage";
import { theme } from "./infrastructure/theme";

const Container = styled.div`
	background-color: grey;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.allegroBackground};
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<HomePage />
			</Container>
		</ThemeProvider>
	);
};

export default App;
