import { useLoaderData } from "react-router-dom";
import sectionBg from "../../assets/pattern-2.png";
import PageTitle from "../Shared/PageTitle/PageTitle";
import GallaryCard from "./GallaryCard/GallaryCard";

const Gallary = () => {
  const reviews = useLoaderData();
  return (
    <section>
      <PageTitle pageTitle={`Gallery of Reviews `} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <div className="grid grid-cols-1 gap-6 p-6 mx-auto bg-white max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:p-8 lg:p-16">
          {reviews?.length > 0 &&
            reviews?.map((review) => (
              <GallaryCard key={review._id} reviewItem={review} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default Gallary;
