import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import InputForm from "../Shared/InputForm/InputForm";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useCurrentDateFormatted from "../../Hooks/useCurrentDateFormatted";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const AddFood = () => {
  const { user } = useAuth();
  const currentDate = useCurrentDateFormatted();
  const hookFormItems = useForm();
  const axiosSecure = useAxiosSecure();
  //   console.log(hookFormItems);
  const { reset } = hookFormItems;

  const handleAddFood = (data) => {
    // console.log(data);
    const {
      foodName,
      foodImage,
      foodCategory,
      availableQuantity,
      price,
      foodOrigin,
      foodQuantity,
      rating,
      description,
    } = data;
    const food = {
      foodName,
      foodImage,
      foodCategory,
      availableQuantity,
      price,
      rating,
      foodOrigin,
      description,
      madeBy: user?.displayName,
      postedDate: currentDate,
      author: {
        authorName: user?.displayName,
        authorEmail: user?.email,
        authorImg: user?.photoURL,
      },
      numberOfPurchases: 0,
      foodQuantity: foodQuantity,
      tags: ["Ice Cream", "Dessert", "Sweet"],
      ingredients: ["Milk", "Cream", "Sugar", "Nougat Pieces"],
      makingProcedure:
        "Blend the milk, cream, and sugar until smooth. Fold in the nougat pieces gently. Freeze until set.",
      reacts: {
        thumbsUp: 95,
        heart: 25,
        laugh: 8,
      },
    };
    console.log(food);
    axiosSecure
      .post("/foods", food)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("The food has been added successfully.");
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <PageTitle pageTitle={"Add A Food"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:px-10 md:py-20 lg:py-32"
      >
        <div className="p-5 mx-auto bg-white shadow md:p-8 lg:px-10 lg:py-16 max-w-7xl">
          <InputForm
            taitle="Add New Food"
            description={`Introducing our latest feature: the Add New Food page! Now, you can effortlessly expand our database by contributing your favorite recipes. Share your culinary creations and inspire others today!`}
            submitText="Add Food"
            formFunctions={hookFormItems}
            submitFunc={handleAddFood}
          />
        </div>
      </section>
    </section>
  );
};

export default AddFood;
