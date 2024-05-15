import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCurrentDateFormatted from "../../Hooks/useCurrentDateFormatted";
import toast from "react-hot-toast";

const PurchaseFood = () => {
  const food = useLoaderData();
  //   console.log(food);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  //   console.log(user?.displayName);
  const axiosSecure = useAxiosSecure();
  const currentDate = useCurrentDateFormatted();
  const navigate = useNavigate();

  const handlePurchase = (data) => {
    // console.log(data);
    const { foodName, buyerName, price, quantity } = data;
    if (food?.author?.authorEmail === user?.email) {
      toast.error("You can't buy your own added food!");
      navigate("/");
      return;
    } else if (!food?.availableQuantity) {
      toast.error("The food is not available!");
      reset();
      navigate("/");
      return;
    } else if (
      food?.availableQuantity &&
      food?.availableQuantity < parseInt(quantity)
    ) {
      toast.error(
        `The food availability is only ${food?.availableQuantity} units.`
      );
      reset();
      return;
    }

    const purchasedFood = {
      foodName,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      buyingDate: currentDate,
      slug: food?._id,
      foodImage: food?.foodImage,
      foodAuthor: food?.author,
      buyerInfo: {
        buyerName: user?.displayName,
        buyerEmail: user?.email,
      },
    };
    // console.log(purchasedFood);
    axiosSecure
      .post("/purchases", purchasedFood)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("You sucessfully purchased the food.");
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <PageTitle pageTitle={"Food Purchase"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 lg:py-32 md:px-8 lg:px-0"
      >
        <div className="px-6 py-10 mx-auto bg-white md:px-8 lg:p-10 max-w-7xl">
          <form
            onSubmit={handleSubmit(handlePurchase)}
            className="space-y-4 md:px-10"
          >
            {/* row -- 1 */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="w-full form-control">
                <label className="label">
                  <span className="text-xl font-medium">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Food Name"
                  value={food?.foodName}
                  readOnly
                  className="input-field"
                  {...register("foodName", { required: true })}
                />
                {errors.foodName && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full form-control">
                <label className="label">
                  <span className="text-xl font-medium">Buyer Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Buyer Name"
                  value={user?.displayName}
                  readOnly
                  className="input-field"
                  //   {...register("buyerName", { required: true })}
                  {...register("buyerName")}
                />
                {/* {errors.buyerName && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )} */}
              </div>
            </div>
            {/* row -- 2 */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="w-full form-control">
                <label className="label">
                  <span className="text-xl font-medium">Food Price (USD)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Pirce"
                  value={food?.price}
                  className="input-field"
                  readOnly
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full form-control">
                <label className="label">
                  <span className="text-xl font-medium">Quantity</span>
                </label>
                <input
                  type="number"
                  min={1}
                  //   max={5}
                  placeholder="Quantity you needed"
                  className="input-field"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mb-5 btn-base btn-secondary py-2.5"
            >
              Purchase Food
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default PurchaseFood;
