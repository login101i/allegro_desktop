import styled from "styled-components";
import { Button } from "../../components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1500px;
  background: ${(props) => props.theme.colors.allegroBackground};
  margin-bottom: 100px;
  align-items: center;
`;
export const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-top: 36px;
  justify-content: center;
`;

export const SmartBanner = styled.img`
  width: 100vw;
`;

export const BannerButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translate(0%, -50%);
  width: auto;
  padding: 4px 18px;
  border-radius: 3px;
`;
