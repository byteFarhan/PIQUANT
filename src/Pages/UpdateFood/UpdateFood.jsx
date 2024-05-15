import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import InputForm from "../Shared/InputForm/InputForm";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateFood = () => {
  const theFood = useLoaderData();
  const hookFormItems = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleUpdateFood = (data) => {
    // console.log(data);
    const {
      foodName,
      foodImage,
      foodQuantity,
      availableQuantity,
      price,
      rating,
      description,
      foodCategory,
      foodOrigin,
    } = data;
    const updatedFood = {
      foodName,
      foodImage,
      foodCategory,
      foodQuantity,
      availableQuantity: parseInt(availableQuantity),
      foodOrigin,
      description,
      price: parseFloat(price),
      rating: parseFloat(rating),
    };
    // console.log(updatedFood);
    axiosSecure
      .put(`/food/${theFood._id}`, updatedFood)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          toast("The food updated successfully.");
          hookFormItems.reset();
          navigate("/my-foods");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <PageTitle pageTitle={"Update The Food"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:px-10 md:py-20 lg:py-32"
      >
        <div className="p-5 mx-auto bg-white shadow md:p-8 lg:px-10 lg:py-16 max-w-7xl">
          <InputForm
            taitle="Update The Food"
            description={`Enhance the food page with new updates for better user experience and improved functionality. Explore the latest features now!`}
            submitText="Update Food"
            submitFunc={handleUpdateFood}
            formFunctions={hookFormItems}
            food={theFood}
          />
        </div>
      </section>
    </section>
  );
};

export default UpdateFood;
