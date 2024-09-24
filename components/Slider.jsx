import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from 'next/link'

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
          <Link href={`/sell/${slide.id}`}>
            <img
              className="h-60 w-72  cursor-pointer"
              src={slide.image}
              alt=""
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
