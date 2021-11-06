import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { screens } from "../responsive";
import WeekOcasion1 from "../../assets/pictures/WeekOcasion1.png";
import WeekOcasion2 from "../../assets/pictures/WeekOcasion2.png";
import Image31 from "../../assets/pictures/Image31.png";
import Image32 from "../../assets/pictures/Image32.png";
import Image33 from "../../assets/pictures/Image33.png";
import Image34 from "../../assets/pictures/Image34.png";
import BorderAndTitle from "../BorderAndTitle";

import ProductContainer from "../../components/ProductContainer";
import DirectionArrows from "../DirectionArrows";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 524px;
  padding: 20px 10px;
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

const TimeContainer = styled.div`
  display: absolute;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
`;
const TimeItem = styled.div`
  height: 36px;
  width: 24px;
  background-color: #ff5a00;
  color: white;
  margin-right: 1.3px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Colon = styled.span`
  color: #ff5a00;
  font-size: 25px;
  margin: 0px 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 441px;
  position: relative;
`;

const FlexRow = styled.div`
  display: flex;
`;

const Left = () => {
  const [hours, setHours] = useState("-");
  const [minutes, setMinutes] = useState("-");
  const [seconds, setSeconds] = useState("-");

  const isMedium = useMediaQuery({ maxWidth: screens.lg });

  const zero = "0";

  var countDownDate = new Date("Oct 29, 2021 8:00:00").getTime();

  const counDownFunction = () => {
    setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  };

  useEffect(() => {
    counDownFunction();
  }, [minutes, hours]);

  return (
    <Container isMedium>
      <Title>Okazje dnia kończą się za </Title>

      <Wrapper>
        <TimeContainer>
          <TimeItem>{hours < 10 ? zero : hours.toString().charAt(0)}</TimeItem>
          <TimeItem>{hours >= 10 ? hours.toString().charAt(1) : hours.toString().charAt(0)}</TimeItem>
          <Colon>:</Colon>
          <TimeItem>{minutes < 10 ? zero : minutes.toString().charAt(0)}</TimeItem>
          <TimeItem>{minutes >= 10 ? minutes.toString().charAt(1) : minutes.toString().charAt(0)}</TimeItem>
          <Colon>:</Colon>
          <TimeItem>{seconds < 10 ? zero : seconds.toString().charAt(0)}</TimeItem>
          <TimeItem>{seconds >= 10 ? seconds.toString().charAt(1) : seconds.toString().charAt(0)}</TimeItem>
        </TimeContainer>

        <DirectionArrows>
          <ProductContainer img={WeekOcasion1} discount={232} oldPrice={389.0} price={(299, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={WeekOcasion2} discount={28} oldPrice={189.0} price={(99, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image31} discount={232} oldPrice={389.0} price={(299, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image33} discount={28} oldPrice={189.0} price={(99, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image33} discount={232} oldPrice={389.0} price={(299, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image34} discount={28} oldPrice={189.0} price={(99, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />

          <ProductContainer img={WeekOcasion1} discount={232} oldPrice={389.0} price={(299, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={WeekOcasion2} discount={28} oldPrice={189.0} price={(99, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image31} discount={232} oldPrice={389.0} price={(299, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
          <ProductContainer img={Image33} discount={28} oldPrice={189.0} price={(99, 89)} description={"Elektryczny grill opiekacz FIT beztłuszczowy FIRST"} />
        </DirectionArrows>
      </Wrapper>

      <BorderAndTitle title="Przejdź do strefy okazji" />
    </Container>
  );
};

export default Left;
