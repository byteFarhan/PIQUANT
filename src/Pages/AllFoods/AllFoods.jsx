import { useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import FoodB from "./FoodB/FoodB";

const AllFoods = () => {
  const allFoods = useLoaderData();
  //   console.log(allFoods);
  return (
    <section>
      <PageTitle pageTitle={`All Foods Page`} />
      <section className="px-5 py-16 mx-auto lg:grid lg:grid-cols-6 lg:gap-10 max-w-7xl lg:px-0 md:py-20 lg:py-32">
        <div className="space-y-6 lg:col-span-4 md:space-y-8 lg:space-y-10">
          {allFoods?.length > 0 &&
            allFoods?.map((food) => <FoodB key={food._id} food={food} />)}
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <div className="border-2 min-h-96"></div>
        </div>
      </section>
    </section>
  );
};

export default AllFoods;
