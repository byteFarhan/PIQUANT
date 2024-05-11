import Navbar from "../../Shared/Navbar/Navbar";
import bannerBg from "../../../assets/home-1-slide-background.jpg";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="h-[70vh] bg-center bg-cover bg-no-repeat relative"
      ></section>
      {/* <Carousel /> */}
    </section>
  );
};

export default HomePage;
