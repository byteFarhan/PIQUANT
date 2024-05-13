import { GrNext, GrPrevious } from "react-icons/gr";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-20 flex justify-between w-full px-4 md:px-5 lg:px-10 top-1/4 lg:top-0">
      <div onClick={() => swiper.slidePrev()} className="">
        <GrPrevious className="text-2xl font-black text-white transition-all duration-75 ease-in cursor-pointer lg:text-3xl hover:text-gray-300" />
      </div>
      <div onClick={() => swiper.slideNext()} className="">
        <GrNext className="text-2xl font-black text-white transition-all duration-75 ease-in cursor-pointer lg:text-3xl hover:text-gray-300" />
      </div>
    </div>
  );
};

export default SwiperNavButtons;
