import { Link } from "react-router-dom";
import BestFood from "./BestFood/BestFood";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const BestFoods = () => {
  const [bestFoods, setBestFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/top-foods")
      .then((res) => {
        // console.log(res);
        setBestFoods(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [axiosSecure]);
  // console.log(bestFoods);
  return (
    <section className="px-5 py-16 mx-auto max-w-7xl lg:px-0 lg:py-20">
      <div className="w-full mx-auto mb-4 space-y-4 text-center md:w-2/3 md:space-y-5 md:mb-5">
        <h3 className="text-2xl md:text-3xl">Best Foods</h3>
        <p>
          Welcome to Best Foods! Indulge in our exquisite dishes, crafted with
          passion and the freshest ingredients. Experience a memorable dining
          journey with flavors that delight your senses. Join us today!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-6 lg:pt-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bestFoods?.length > 0 &&
          bestFoods?.map((food) => <BestFood key={food._id} food={food} />)}
      </div>
      <div className="mt-6 text-center lg:mt-10">
        <Link to={`all-foods`}>
          <button className="px-5 py-3 btn-base btn-secondary">
            See All Foods
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestFoods;
