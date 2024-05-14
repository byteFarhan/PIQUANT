import bannerBg from "../../../assets/home-1-slide-background.jpg";
import Carousel from "../Carousel/Carousel";
import BookATable from "../BookATable/BookATable";
import Awards from "../Awards/Awards";
import Testimonial from "../Testimonial/Testimonial";
import BestFoods from "../BestFoods/BestFoods";
import GallaryCard from "../../Gallary/GallaryCard/GallaryCard";
// import Test from "../Testimonial/Test";

const HomePage = () => {
  const rI = {
    imageUrl: bannerBg,
    userReview:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    userName: "Farhan Mazumder",
  };
  return (
    <section>
      <section
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="relative py-16 bg-center bg-no-repeat bg-cover md:py-20 lg:py-28"
      >
        <Carousel />
      </section>
      <BookATable />
      <BestFoods />
      <Testimonial />
      <GallaryCard reviewItem={rI} />
      {/* <Test /> */}
      <Awards />
    </section>
  );
};

export default HomePage;
