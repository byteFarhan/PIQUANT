import PropTypes from "prop-types";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";
// import img from "../../../../assets/single-food-1a.jpg";
const BestFood = ({ food }) => {
  const { _id, foodName, foodImage, price, postedDate, description } = food;
  return (
    <div className="">
      <div
        className="h-[300px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${foodImage})` }}
      >
        {/* <img
          src={img}
          alt=""
          className="h-[250px] object-cover w-auto cursor-pointer"
        /> */}
        <div className="transition-all duration-150 ease-in-out delay-150 hover:bg-gradient-to-l from-[#00000066] size-full cursor-pointer"></div>
      </div>
      <div className="p-6 space-y-4 border-b-2 border-x-2 border-secondary">
        <p className="flex items-center gap-2">
          <BsCalendar2Date /> {postedDate}
        </p>
        <div className="flex items-start justify-between">
          <h3 className="text-xl">{foodName}</h3>
          <p className="text-lg font-medium">Pirce: ${price}</p>
        </div>
        <p>{description?.substring(0, 70 - 3) + "..."}</p>
        <div>
          <Link to={`/food/${_id}`}>
            <button className="btn-base btn-outline px-4 py-2.5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestFood;
BestFood.propTypes = {
  food: PropTypes.object.isRequired,
};
