import sectionBg from "../../assets/pattern-2.png";
import PageTitle from "../Shared/PageTitle/PageTitle";

const MyFoods = () => {
  return (
    <section>
      <PageTitle pageTitle={`Your Added Foods`} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <section className="mx-auto max-w-7xl"></section>
      </section>
    </section>
  );
};

export default MyFoods;
