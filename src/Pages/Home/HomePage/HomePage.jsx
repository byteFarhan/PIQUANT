import bannerBg from "../../../assets/home-1-slide-background.jpg";
import Carousel from "../Carousel/Carousel";
import BookATable from "../BookATable/BookATable";
import Awards from "../Awards/Awards";
import Testimonial from "../Testimonial/Testimonial";
import BestFoods from "../BestFoods/BestFoods";
// import Test from "../Testimonial/Test";

const HomePage = () => {
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
      {/* <Test /> */}
      <Awards />
    </section>
  );
};

export default HomePage;
