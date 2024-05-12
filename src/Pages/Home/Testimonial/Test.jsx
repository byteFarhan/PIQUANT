import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialBg from "../../../assets/new-parallax-2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
const Test = () => {
  return (
    <div
      style={{ backgroundImage: `url(${testimonialBg})` }}
      className="bg-no-repeat bg-cover py-28"
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialItem
            name={`Savor Haven`}
            description={`Delightful Bites offers a tantalizing array of flavors! From succulent steaks to gourmet salads, each dish is crafted with care, ensuring a delightful dining experience every visit.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            name={`Gourmet Oasis`}
            description={`Indulge in culinary perfection at Delightful Bites. With impeccable service and a menu bursting with innovative dishes, this restaurant elevates dining to an unforgettable gastronomic journey.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            name={`Culinary Bliss Bistro`}
            description={`Delightful Bites is a culinary gem! From the ambiance to the delectable dishes, every aspect exudes excellence. It's a must-visit destination for anyone seeking a truly memorable dining experience.`}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Test;
