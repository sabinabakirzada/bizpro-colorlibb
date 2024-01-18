// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
export default function Slider() {
  return (
    <>
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide slide-1">
          <h1 className="slide-h1">HELLO WE'RE BIZPRO</h1>
          <h5 className="slide-h5">SUB HEAD, MOTTO OR MISSION SUBTITLE</h5>
          <button className="slide-btn">SEE OUR PROJECTS</button>
        </SwiperSlide>
        <SwiperSlide className="slide slide-2">
          <h1 className="slide-h1">HELLO WE'RE BIZPRO</h1>
          <h5 className="slide-h5">SUB HEAD, MOTTO OR MISSION SUBTITLE</h5>
          <button className="slide-btn">SEE OUR PROJECTS</button>
        </SwiperSlide>
        <SwiperSlide className="slide slide-3">
          <h1 className="slide-h1">HELLO WE'RE BIZPRO</h1>
          <h5 className="slide-h5">SUB HEAD, MOTTO OR MISSION SUBTITLE</h5>
          <button className="slide-btn">SEE OUR PROJECTS</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
