import React, { useEffect, useState, useRef, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import { sliderItems } from "../../../../utils/data";
import { screens } from "../../../responsive";
import Recomended from "../Recomended";
import { OptionComponent, Flex } from "../../..";
import {
  firstSectionImages,
  firstSectionOptions
} from "../../../../utils/data";

import {
  MainContainer,
  WrapperOption,
  Carousel,
  Slide,
  ImgContainer,
  Image,
  Container,
  Dot,
  BorderLine
} from "./Center.styles";

let myCounter = 0;
let timeout = null;

const Center = () => {
  const [distance, setDistance] = useState();
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: screens.md });

  useEffect(() => {
    startInterval();
    return () => clearInterval(timeout);
  }, []);

  myCounter = slideIndex;
  const startInterval = () => {
    timeout = setInterval(() => {
      setSlideIndex((slideIndex) => slideIndex + 1);
      if (myCounter >= 6) {
        setSlideIndex(0);
      }
    }, 10000);
  };

  const handleIndex = (index) => {
    setSlideIndex(index);
    if (isMobile) {
      const distance = sliderRef.current.getBoundingClientRect().width;
      setDistance(distance);
    }
  };

  if (isMobile) {
    return (
      <MainContainer isMobile={isMobile}>
        <Container isMobile={isMobile}>
          <Carousel
            slideIndex={slideIndex}
            distance={distance}
            isMobile={isMobile}
          >
            {sliderItems.map((item) => (
              <Slide key={item.id} >
                <ImgContainer ref={sliderRef}>
                  <Image src={item.img} isMobile={isMobile} />
                </ImgContainer>
              </Slide>
            ))}
          </Carousel>
          <Flex align style={{ margin: "0 auto" }}>
            {sliderItems.slice(0,5).map((item, i) => (
              <Dot
                key={i}
                onClick={() => handleIndex(i)}
                i={i}
                slideIndex={slideIndex}
              />
            ))}
          </Flex>
        </Container>
        <Recomended images={firstSectionImages}  />
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <Container>
          <Slide>
            <ImgContainer>
              <Image src={sliderItems[slideIndex].img} slideIndex />
            </ImgContainer>
          </Slide>

          <WrapperOption>
            <BorderLine slideIndex={slideIndex} />
            <Flex>
              {firstSectionOptions.map((option, index) => (
                <OptionComponent
                  key={option[index]}
                  onClick={() => handleIndex(index)}
                  option={option}
                />
              ))}
            </Flex>
          </WrapperOption>
        </Container>
        <Recomended images={firstSectionImages} />
      </MainContainer>
    );
  }
};

export default Center;
