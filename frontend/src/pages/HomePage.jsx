import React from "react";
import styled from "styled-components";

import NavbarAd from "../components/NavbarAd";
import Navbar from "../components/Navbar";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/secondSection/SecondSection";
import ThirdSection from "../components/thirdSection/ThirdSection";
import FourthSection from "../components/fourthSection/FourthSection";
import FifthSection from "../components/fifthSection/FifthSection";
import PayPalButton from "../components/PayPalButton";
import { ThemeProvider } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 10000px;
  background: lightGrey;
`;

const HomePage = () => {
  return (
    <div style={{ width: "100vw" }}>
      {/* <NavbarAd /> */}
      <MainContainer>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FifthSection />

        <FourthSection />

        <PayPalButton />
      </MainContainer>
    </div>
  );
};

export default HomePage;
