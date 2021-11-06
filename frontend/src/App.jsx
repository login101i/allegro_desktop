import HomePage from "./pages/HomePage";
import styled, { ThemeProvider } from "styled-components";

import "./style.css";

const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:16px;
`;

const theme = {
  color: "green",
  bgColor: "orange",
  payPalColor: "#0E5CAA",
};

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
