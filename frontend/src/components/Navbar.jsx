import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Badge } from "@material-ui/core";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Logo from "../assets/pictures/logo.svg";

import Badged from "../components/Badged";

import { mediumSize } from "../responsive";
import { screens } from "./responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px 20px;
  justify-content:center;
  min-width: 1562px;
  max-width: 1600px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 150px;
  background-color: white;
`;

const Image = styled.div`
  transform: scale(1.12);
`;

const Center = styled.div`
  flex-grow: grow;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin:0px 20px;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 5;
  border: 0.5px solid #d2d2d2;
`;
const Input = styled.input`
  border: none;
  height: 40px;
  line-height: 40px;
  width: 70%;
  outline: none;
  font-size: 15px;
  margin-left: 10px;
  paddgin-right: 8px;
`;

const SearchMore = styled.div`
  fontsize: 22px;
  color: lightBlue;
  letter-spacing: 2px;
  border: none;
  margin-right: 5px;
  color: var(--linkColor);
`;
const SelectContainer = styled.select`
  flex: 2;
  outline: none;
  border: 0.5px solid #d2d2d2;
`;

const Button = styled.div`
  height: 42px;
  background: var(--allegroColor);
  color:white;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  text-transform: font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  line-height: 44px;
  padding:0 13px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.div`
  color: grey;
  padding: 4px;
  font-size: 30px;
  margin: 0px 10px;
  cursor: pointer;
  margin: 6px 10px;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: screens.md });
  const isMedium = useMediaQuery({ maxWidth: screens.lg });
  const isLarge = useMediaQuery({ minWidth: screens.lg });
  console.log(isMobile);
  console.log(isLarge);

  if (isLarge)
    return (
      <Container>
        <Wrapper>
          <Left>
            <Image>
              <img src={Logo} alt="To jest Logo" />
            </Image>
          </Left>

          <Center>
            <CenterContainer>
              <SearchContainer>
                <Input placeholder="Czego szukasz?" />
                <SearchMore>szukaj wielu</SearchMore>
              </SearchContainer>
              <SelectContainer></SelectContainer>
              <Button>Szukaj</Button>
            </CenterContainer>
          </Center>

          <Right>
            <Icon>
              <StarBorderIcon style={{ fontSize: "30px" }} />
            </Icon>

            <Icon>
              <Badged badgeContent={5}>
                <ForumOutlinedIcon style={{ fontSize: "30px" }} />
              </Badged>
            </Icon>
            <Icon>
              <Badged badgeContent={5}>
                <NotificationsNoneOutlinedIcon style={{ fontSize: "30px" }} />
              </Badged>
            </Icon>
            <Icon>
              <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
            </Icon>
            <Icon>
              <Badged badgeContent={5}>
                <PersonOutlineOutlinedIcon style={{ fontSize: "30px" }} />
              </Badged>
            </Icon>
          </Right>
        </Wrapper>
      </Container>
    );
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image>
            <img src={Logo} alt="To jest Logo" />
          </Image>
        </Left>
        <Right>
          <Icon>
            <StarBorderIcon style={{ fontSize: "30px" }} />
          </Icon>

          <Icon>
            <Badged badgeContent={5}>
              <ForumOutlinedIcon style={{ fontSize: "30px" }} />
            </Badged>
          </Icon>
          <Icon>
            <Badged badgeContent={5}>
              <NotificationsNoneOutlinedIcon style={{ fontSize: "30px" }} />
            </Badged>
          </Icon>
          <Icon>
            <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
          </Icon>
          <Icon>
            <Badged badgeContent={5}>
              <PersonOutlineOutlinedIcon style={{ fontSize: "30px" }} />
            </Badged>
          </Icon>
        </Right>
      </Wrapper>
      <Center>
        <CenterContainer>
          <SearchContainer>
            <Input placeholder="Czego szukasz?" />
            <SearchMore>szukaj wielu</SearchMore>
          </SearchContainer>
          <SelectContainer></SelectContainer>
          <Button>Szukaj</Button>
        </CenterContainer>
      </Center>
    </Container>
  );
};

export default Navbar;
