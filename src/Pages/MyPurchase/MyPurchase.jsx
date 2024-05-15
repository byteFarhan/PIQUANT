import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import Table from "./Table/Table";

const MyPurchase = () => {
  return (
    <section>
      <PageTitle pageTitle={"My Purchase"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <section className="mx-auto bg-white max-w-7xl"></section>
        <div className="p-6 md:p-8 lg:p-16">
          <Table />
        </div>
      </section>
    </section>
  );
};

export default MyPurchase;
