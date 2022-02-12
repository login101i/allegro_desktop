import React from "react";
import styled from "styled-components";
import BikeMain from "../assets/pictures/NavAdd.png";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const NavbarAd = () => {
  return (
    <Container>
      <Image src={BikeMain} alt="Navbar Picture Lenor" />
    </Container>
  );
};

