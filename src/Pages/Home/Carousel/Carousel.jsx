import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef } from "react";
import Slide from "./Slide/Slide";
import sliderImg1 from "../../../assets/sliderImg/home-1-slide-1-graphic-2.png";
import sliderImg1sub from "../../../assets/sliderImg/home-1-slide-1-graphic-1.png";
import sliderImg2 from "../../../assets/sliderImg/home-1-slide-1-graphic-8.png";
import sliderImg2sub from "../../../assets/sliderImg/home-1-slide-1-graphic-9.png";
import sliderImg3 from "../../../assets/sliderImg/landing-slide-left-3.png";
import sliderImg3sub from "../../../assets/sliderImg/home-1-slide-1-graphic-10.png";

// import Slide from "./Slide/Slide";
const Carousel = () => {
  const sliderRef = useRef(null);
  //   console.log(sliderRef);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>
      <section className="relative h-full">
        <div className="absolute z-10 flex justify-between w-full px-5 lg:px-10 top-1/2">
          <div onClick={prevSlide} className="">
            <GrPrevious className="text-xl font-black text-white transition-all duration-75 ease-in cursor-pointer md:text-2xl lg:text-3xl hover:text-gray-300" />
          </div>
          <div onClick={nextSlide} className="">
            <GrNext className="text-xl font-black text-white transition-all duration-75 ease-in cursor-pointer md:text-2xl lg:text-3xl hover:text-gray-300" />
          </div>
        </div>

        <div className="">
          <Slider ref={sliderRef} {...settings} className="">
            <Slide
              slideImg={sliderImg1}
              subImg={sliderImg1sub}
              title={`Know Your Food`}
              description={`Discover tranquility in our serene escapes. From luxury spas to secluded hideaways, find your slice of paradise and unwind.`}
            />
            <Slide
              slideImg={sliderImg2}
              subImg={sliderImg2sub}
              title={`Piquant Grill`}
              description={`Discover tranquility in our serene escapes. From luxury spas to secluded hideaways, find your slice of paradise and unwind.`}
            />
            <Slide
              slideImg={sliderImg1}
              subImg={sliderImg3sub}
              title={`High Quality`}
              description={`Discover tranquility in our serene escapes. From luxury spas to secluded hideaways, find your slice of paradise and unwind.`}
            />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Carousel;
