import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import { FaRegEdit } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { MdOutlineCoffeeMaker, MdOutlineDiscount } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { PiChefHatDuotone } from "react-icons/pi";

const FoodDetails = () => {
  const food = useLoaderData();
  //   console.log(food);
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    foodQuantity,
    availableQuantity,
    tags,
    foodOrigin,
    description,
    ingredients,
    makingProcedure,
    madeBy,
    price,
    rating,
    postedDate,
    reacts,
    author: { authorName, authorEmail, authorImg },
    numberOfPurchases,
  } = food;
  //   console.log(reacts);
  console.log(ingredients);
  return (
    <section>
      <PageTitle pageTitle={foodName} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:px-8 md:py-20 lg:py-32 lg:px-0"
      >
        <div className="p-3 mx-auto bg-white lg:grid md:p-6 lg:p-14 max-w-7xl lg:grid-cols-6 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src={foodImage}
                alt={foodName}
                className="object-cover w-full h-[450px]"
              />
              <div className="absolute z-20 p-3 md:p-4 lg:p-6 text-lg md:text-xl lg:text-2xl font-bold -rotate-[30deg] md:-rotate-[35deg] lg:-rotate-[45deg] rounded-full -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-8 bg-primary text-secondary font-oswald">
                ${price}
              </div>
            </div>
            <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-2">
                <div className="bg-[#f5f5f5] py-2 px-4 mb-4 lg:mb-0">
                  <h4 className="text-2xl font-semibold text-center font-roboto-slab">
                    {postedDate}
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-2.5">
                  <h3 className="text-2xl">{foodName}</h3>
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
                  <div className="flex gap-10 *:flex *:items-center *:gap-2 mt-6 *:text-secondary">
                    <p>
                      <GiWorld /> {foodOrigin}
                    </p>
                    <p>
                      <PiChefHatDuotone /> {madeBy}
                    </p>
                  </div>
                  <div className="mt-4 space-y-6">
                    <p>{description}</p>
                    <p className="pl-4 border-l-4 border-secondary">
                      {makingProcedure}
                    </p>
                    <p className="flex flex-col gap-3 md:items-center md:flex-row text-secondary">
                      Ingredients:{" "}
                      <span className="flex flex-wrap gap-2 md:gap-3">
                        {ingredients?.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-natural bg-[#f5f5f5] text-sm font-medium p-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>
                </div>
                <Link>
                  <button className="px-5 py-3 mt-6 uppercase btn-base btn-secondary">
                    Purchase Food
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <div className="border-2 min-h-32"></div>
          </div>
        </div>
        {/* <div className="relative inline-block align-middle -mt-[100px] z-20">
          <div className="static block w-full p-16 mx-auto text-center bg-white max-w-7xl">
            <div className="block"></div>
          </div> 
        </div>*/}
      </section>
    </section>
  );
};

export default FoodDetails;
