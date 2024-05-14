import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import InputForm from "../Shared/InputForm/InputForm";

const AddFood = () => {
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
