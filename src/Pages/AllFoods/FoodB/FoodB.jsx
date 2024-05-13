import PropTypes from "prop-types";
import { FaRegEdit } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";
import { Link } from "react-router-dom";

const FoodB = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    // foodCategory,
    // foodQuantity,
    // availableQuantity,
    // tags,
    // foodOrigin,
    description,
    // ingredients,
    // makingProcedure,
    // madeBy,
    price,
    // rating,
    // postedDate,
    reacts,
    author: { authorName, authorEmail, authorImg },
    // numberOfPurchases,
  } = food;
  return (
    <div>
      <div className="relative mb-4">
        <div className="overflow-hidden">
          <img
            src={foodImage}
            alt={foodName}
            className="object-cover cursor-pointer w-full h-[450px] transition-transform duration-200 delay-200 ease-in-out hover:scale-105"
          />
        </div>

        <div className="absolute z-20 p-3 md:p-4 lg:p-6 text-lg md:text-xl lg:text-2xl font-bold -rotate-[30deg] md:-rotate-[35deg] rounded-full -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-8 bg-primary text-secondary font-oswald">
          ${price}
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="*:flex flex-wrap *:gap-2 *:items-center flex gap-3 lg:gap-6 *:lg:pr-8 *:pr-4 *:text-lg py-2 *:border-r *:border-secondary">
          <p>
            <FaRegEdit /> {authorName}
          </p>
          <p>
            <GoHeart /> {reacts?.heart || 0}
          </p>
          <p className="border-none">
            <MdOutlineDiscount /> Favourit
          </p>
        </div>
        <h3 className="text-2xl">{foodName}</h3>
        <div className="mt-4 space-y-6">
          <p>{description?.substring(0, 135 - 3) + "..."}</p>
        </div>
      </div>
      <Link to={`/food/${_id}`}>
        <button className="px-5 py-3 my-6 btn-base btn-secondary">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default FoodB;
FoodB.propTypes = {
  food: PropTypes.object.isRequired,
};
