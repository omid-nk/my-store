import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperNavigation } from "../../../components/SwiperNavigation";
import { SwiperPagination } from "../../../components/SwiperPagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../../../assets/images/slide-1.jpg";
import slide2 from "../../../assets/images/slide-2.jpg";
import slide3 from "../../../assets/images/slide-3.jpg";

function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <>
      <div className="relative my-2">
        <Swiper
          modules={[Navigation, Pagination]}
          className="custom-swiper"
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
          spaceBetween={10}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={slide1} alt="slide 1" className="w-full xl:rounded" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide 2" className="w-full xl:rounded" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="slide 3" className="w-full xl:rounded" />
          </SwiperSlide>
        </Swiper>
        <SwiperNavigation prevRef={prevRef} nextRef={nextRef} />
      </div>
      <SwiperPagination paginationRef={paginationRef} />
    </>
  );
}

export default HeroSection;
