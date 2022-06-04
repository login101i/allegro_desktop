import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import PayPalLogo from "../assets/pictures/PayPalLogo.png";

const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightBlue};
  width: 176px;
  height: 64px;
  padding: 7px 4px 8px 12px;
  border: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  right: -110px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  z-index: 100;
  transition: 0.6s ease-in-out;
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 12px;
  cursor: pointer;
`;
const Container = styled.div`
  position: fixed;
  top: 33vh;
  right: ${(props) => (props.payPalMove ? "0px" : "-115px")};
  visibility: ${(props) => (props.isPaypalShow ? "visible" : "hidden")};
  transition: 0.6s ease-in-out;
`;

const PayPalText = styled.div`
  cursor: pointer;
`;

const PayPalButton = ({ isPaypalShow, handlePayPalMove, payPalMove }) => {
  const navigate = useNavigate();
  return (
    <Container isPaypalShow={isPaypalShow} payPalMove={payPalMove}>
      <Button onClick={handlePayPalMove}>
        <Logo src={PayPalLogo} />
        <Link to="/login">
          <PayPalText>Zapłać za 30 dni</PayPalText>
        </Link>
      </Button>
    </Container>
  );
};

export default PayPalButton;
