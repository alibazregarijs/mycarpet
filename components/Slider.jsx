import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            className="h-60  cursor-pointer" 
            src={slide.img}
            width={0}
            height={0}
            alt={slide.name + "" + slide.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
