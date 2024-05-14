import { useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import FoodB from "./FoodB/FoodB";
import SearchField from "./SearchField/SearchField";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [loadedFoods, setLoadedFoods] = useState([]);
  const allFoods = useLoaderData();
  //   console.log(allFoods);
  useEffect(() => {
    setLoadedFoods(allFoods);
  }, [allFoods]);
  console.log(loadedFoods);
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchFor = form.search.value;
    // console.log(searchFor);
    form.reset();
    axiosSecure
      .get(`/foods?searchFor=${searchFor}`)
      .then((res) => setLoadedFoods(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
  //   console.log(loadedFoods);
  return (
    <section>
      <PageTitle pageTitle={`All Foods Page`} />
      <SearchField
        handleSearch={handleSearch}
        setLoadedFoods={setLoadedFoods}
      />
      <section className="px-5 py-16 mx-auto lg:grid lg:grid-cols-6 lg:gap-10 max-w-7xl lg:px-0 md:py-20 lg:pb-32 lg:pt-20">
        <div className="space-y-6 lg:col-span-4 md:space-y-8 lg:space-y-10">
          {loadedFoods?.length > 0 &&
            loadedFoods?.map((food) => <FoodB key={food._id} food={food} />)}
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <div className="border-2 min-h-96"></div>
        </div>
      </section>
    </section>
  );
};

export default AllFoods;
