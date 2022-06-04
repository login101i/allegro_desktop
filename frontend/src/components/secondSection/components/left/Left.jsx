import { useEffect, useState } from "react";

import {
  Text,
  BorderAndTitle,
  ProductContainer,
  DirectionArrows
} from "../../../../components";

import {
  Container,
  TimeContainer,
  TimeItem,
  Colon,
  Wrapper
} from "./Left.styles";

export const Left = ({ products }) => {
  const [hours, setHours] = useState("-");
  const [minutes, setMinutes] = useState("-");
  const [seconds, setSeconds] = useState("-");

  const zero = "0";

  var countDownDate = new Date(`6 5, 2022 8:00:00`).getTime();

  const counDownFunction = () => {
    setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

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

  // const dogProducts = products.filter((p) => p.category === "Pupil");

  return (
    <Container>
      <Text title="Weekendowe okazje dnia kończą się za:" />
      <Wrapper>
        <TimeContainer>
          <TimeItem>{hours < 10 ? zero : hours.toString().charAt(0)}</TimeItem>
          <TimeItem>
            {hours >= 10
              ? hours.toString().charAt(1)
              : hours.toString().charAt(0)}
          </TimeItem>
          <Colon>:</Colon>
          <TimeItem>
            {minutes < 10 ? zero : minutes.toString().charAt(0)}
          </TimeItem>
          <TimeItem>
            {minutes >= 10
              ? minutes.toString().charAt(1)
              : minutes.toString().charAt(0)}
          </TimeItem>
          <Colon>:</Colon>
          <TimeItem>
            {seconds < 10 ? zero : seconds.toString().charAt(0)}
          </TimeItem>
          <TimeItem>
            {seconds >= 10
              ? seconds.toString().charAt(1)
              : seconds.toString().charAt(0)}
          </TimeItem>
        </TimeContainer>

        <DirectionArrows>
          {products.map((dogProduct) => (
            <ProductContainer
              key={dogProduct._id}
              img={dogProduct.img[0].url}
              discount={dogProduct.discount}
              oldPrice={dogProduct.oldPrice}
              price={dogProduct.price}
              product={dogProduct}
              extended={true}
            />
          ))}
        </DirectionArrows>
      </Wrapper>

      <BorderAndTitle title="Przejdź do strefy okazji" />
    </Container>
  );
};
