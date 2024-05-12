import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonialBg from "../../../assets/new-parallax-2.jpg";
import testimonialIcon from "../../../assets/testimonials-icon.png";
// import "./styles.css";

// import required modules
import { EffectFade } from "swiper/modules";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import SwiperNavButtons from "./SwiperNavButtons/SwiperNavButtons";
const Testimonial = () => {
  return (
    <section
      style={{ backgroundImage: `url(${testimonialBg})` }}
      className="static w-full overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover py-28 lg:bg-auto"
    >
      <div className="">
        <div className="pb-10 space-y-4 text-center">
          <img src={testimonialIcon} alt="" className="mx-auto" />
          <h3 className="text-3xl text-white">HAPPY CUSTOMERS</h3>
          <p className="text-white font-shadows-into-light">
            --------------------{" "}
            <span className="text-2xl">Delicious Food</span>{" "}
            --------------------
          </p>
        </div>
        <div className="px-5 mx-auto max-w-7xl lg:px-0">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            //   navigation={true}
            //   pagination={{
            //     clickable: true,
            //   }}
            modules={[EffectFade]}
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
            <SwiperSlide>
              <TestimonialItem
                name={`Epicurean Delights Eatery`}
                description={`From the first bite to the last, Delightful Bites exceeds expectations. With fresh, locally sourced ingredients and expertly crafted dishes, this restaurant sets the standard for exceptional dining in the city.`}
              />
            </SwiperSlide>
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
