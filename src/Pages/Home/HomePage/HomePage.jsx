import Navbar from "../../Shared/Navbar/Navbar";
import bannerBg from "../../../assets/home-1-slide-background.jpg";
import Carousel from "../Carousel/Carousel";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="relative py-16 bg-center bg-no-repeat bg-cover md:py-20 lg:py-28"
      >
        <Carousel />
      </section>
      {/* <Carousel /> */}
    </section>
  );
};

export default HomePage;
