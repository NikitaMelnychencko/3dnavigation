"use client";
import { useState } from "react";
import s from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Scaler from "@Root/middleware/Scaler";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Mousewheel } from "swiper/modules";

const detailsConf = [
  ["Home", 1, 2, 3, 4, 5],
  ["Store", 1, 2, 3, 4, 5],
  ["News", 1, 2, 3, 4, 5],
  ["Social", 1, 2, 3, 4, 5],
  ["Vote", 1, 2, 3, 4, 5],
  ["About us", 1, 2, 3, 4, 5],
];

export default function FebruaryHolidays() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [size, setSize] = useState();
  const handleSlideChange = (swiper) => setActiveSlideIndex(swiper.realIndex);

  return (
    <Scaler setSize={setSize}>
      <div
        className={s.wrapper}
        style={{
          transform: size >= 800 ? `scale(${1})` : `scale(${size / 550})`,
          transformOrigin: "top left",
          width: size >= 800 ? "100%" : "550px",
        }}
      >
        <div className={s.slider}>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            mousewheel={true}
            centeredSlides={true}
            loop={true}
            modules={[Mousewheel]}
            className="mySwiper"
          >
            <>
              {detailsConf[activeSlideIndex].map((el, idx) => (
                <SwiperSlide key={idx}>
                  <div className={`wrapper-slide`}>
                    <p className={'slide-text'}>{el}</p>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
        <div className={s.verticalSlider}>
          <Swiper
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={30}
            mousewheel={true}
            centeredSlides={true}
            loop={true}
            modules={[Mousewheel]}
            className="myVerticalSwiper"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide id={0}>
              <div className={'wrapper-slide'}>
                <p className={'slide-text'}>Home</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id={1}>
              <div className={`wrapper-slide`}>
                {" "}
                <p className={'slide-text'}>Store </p>
              </div>
            </SwiperSlide>
            <SwiperSlide id={2}>
              <div className={`wrapper-slide`}>
                {" "}
                <p className={'slide-text'}>News</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id={3}>
              <div className={`wrapper-slide`}>
                {" "}
                <p className={'slide-text'}>Social</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id={4}>
              <div className={`wrapper-slide`}>
                {" "}
                <p className={'slide-text'}>Vote</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id={5}>
              <div className={`wrapper-slide`}>
                {" "}
                <p className={'slide-text'}>About us</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div></Scaler>
  );
}
