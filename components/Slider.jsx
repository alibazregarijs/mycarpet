import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import carpet1 from "../public/assets/images/carpet1.jpg";
import carpet2 from "../public/assets/images/carpet2.jpg";
import carpet3 from "../public/assets/images/carpet3.webp";
import carpet4 from "../public/assets/images/carpet4.jpg";

const Slider = () => {
  const slides = [
    {
      name: "Mashhad",
      img: carpet1,
    },
    {
      name: "Shiraz",
      img: carpet2,
    },
    {
      name: "Ahvaz",
      img: carpet3,
    },
    {
      name: "Mashhad",
      img: carpet4,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.img}>
          <Image
            className="h-60"
            src={slide.img}
            width={0}
            height={0}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
