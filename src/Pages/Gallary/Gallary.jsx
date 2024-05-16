import { useLoaderData } from "react-router-dom";
import sectionBg from "../../assets/pattern-2.png";
import PageTitle from "../Shared/PageTitle/PageTitle";
import GallaryCard from "./GallaryCard/GallaryCard";
import Modal from "./Modal/Modal";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Gallary = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(loadedReviews);
  }, [loadedReviews]);

  return (
    <section>
      <Helmet>
        <title>PIQUANT | Gallary</title>
      </Helmet>
      <PageTitle pageTitle={`Gallery of Reviews `} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 p-6 bg-white md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:p-8 lg:p-16">
            {reviews?.length > 0 &&
              reviews?.map((review) => (
                <GallaryCard key={review._id} reviewItem={review} />
              ))}
          </div>
          {/* modal section */}
          <Modal setReviews={setReviews} reviews={reviews} />
        </div>
      </section>
    </section>
  );
};

export default Gallary;
