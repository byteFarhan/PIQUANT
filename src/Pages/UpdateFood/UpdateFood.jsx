import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import InputForm from "../Shared/InputForm/InputForm";

const UpdateFood = () => {
  return (
    <section>
      <PageTitle pageTitle={"Update The Food"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:px-10 md:py-20 lg:py-32"
      >
        <div className="p-5 mx-auto bg-white shadow md:p-8 lg:px-10 lg:py-16 max-w-7xl"></div>
      </section>
    </section>
  );
};

export default UpdateFood;
