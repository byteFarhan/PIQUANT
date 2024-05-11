import bannerBg from "../../../assets/home-1-slide-background.jpg";
import Carousel from "../Carousel/Carousel";
import BookATable from "../BookATable/BookATable";
import Awards from "../Awards/Awards";
import Testimonial from "../Testimonial/Testimonial";

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
      <Testimonial />
      <Awards />
      {/* <Carousel /> */}
      {/* <button className="btn-base btn-primary">Test Item</button> */}
      {/* <button className="btn-base btn-secondary">Test Item</button> */}
      {/* <button className="btn-base btn-outline">Test Item</button> */}
    </section>
  );
};

export default HomePage;
