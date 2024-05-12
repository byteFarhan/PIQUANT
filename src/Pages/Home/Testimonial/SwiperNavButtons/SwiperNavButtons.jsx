import { GrNext, GrPrevious } from "react-icons/gr";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-10 flex justify-between w-full px-5 lg:px-10 top-1/2 lg:top-0">
      <div onClick={() => swiper.slidePrev()} className="">
        <GrPrevious className="text-xl font-black text-white transition-all duration-75 ease-in cursor-pointer md:text-2xl lg:text-3xl hover:text-gray-300" />
      </div>
      <div onClick={() => swiper.slideNext()} className="">
        <GrNext className="text-xl font-black text-white transition-all duration-75 ease-in cursor-pointer md:text-2xl lg:text-3xl hover:text-gray-300" />
      </div>
    </div>
  );
};

export default SwiperNavButtons;
