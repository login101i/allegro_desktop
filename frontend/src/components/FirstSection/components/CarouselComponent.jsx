import  { useState } from "react";

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// const slide1 = {
//   image: Slide1,
// };

// const slide2 = {
//   image: Slide2,
// };

// const Container = styled.div``;
// const slides = [<Slide {...slide1} />, <Slide {...slide1} />];

const CarouselComponent = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Carousel
      value={current}
      onChange={setCurrent}
      plugins={[
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 1,
          },
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ],
        },
        900: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ],
        },
      }}
    >
      {slides}
    </Carousel>
  );
};

export default CarouselComponent;
