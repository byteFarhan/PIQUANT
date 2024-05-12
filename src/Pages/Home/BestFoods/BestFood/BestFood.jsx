import { BsCalendar2Date } from "react-icons/bs";
import img from "../../../../assets/single-food-1a.jpg";
const BestFood = () => {
  return (
    <div className="">
      <div
        className="h-[300px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
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
          <BsCalendar2Date /> NOV 04, 2015
        </p>
        <div className="flex items-start justify-between">
          <h3 className="text-xl">NOUGAT ICE CREAM</h3>
          <p className="text-lg font-medium">Pirce: ${`59`}</p>
        </div>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque
          at tellus felis. Sed fringilla, tellus non congue porttitor, dui eros
          fauci...
        </p>
        <div>
          <button className="btn-base btn-outline px-4 py-2.5">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestFood;
