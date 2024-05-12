import { SwiperSlide } from "swiper/react";
import testimonialBg from "../../../../assets/new-parallax-2.jpg";
const TestimonialItem = ({ name, description }) => {
  return (
    <>
      <div
        className="space-y-4 bg-transparent"
        // className="bg-no-repeat bg-cover py-28"
        // style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <p className="text-center text-white">{description}</p>

        <div className="text-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="bg-orange-400 mask mask-star-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-orange-400 mask mask-star-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-orange-400 mask mask-star-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-orange-400 mask mask-star-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-orange-400 mask mask-star-2"
              checked
              readOnly
            />
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center text-white">{name}</h4>
      </div>
    </>
  );
};

export default TestimonialItem;
