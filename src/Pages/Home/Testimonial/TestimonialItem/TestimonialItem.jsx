import { SwiperSlide } from "swiper/react";

const TestimonialItem = ({ name, description }) => {
  return (
    <>
      <div className="space-y-4 bg-transparent">
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
            />
          </div>
        </div>
        <h4 className="text-2xl font-bold text-center text-white">{name}</h4>
      </div>
    </>
  );
};

export default TestimonialItem;
