import bannerBg from "../../../assets/home-1-slide-background.jpg";

const PageTitle = ({ pageTitle }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="flex items-center justify-center bg-center bg-no-repeat bg-cover py-36 lg:pb-56 lg:pt-36 "
    >
      <div className="space-y-5 text-center">
        <h3 className="text-3xl font-medium text-white uppercase md:text-4xl lg:text-5xl">
          {pageTitle}
        </h3>
        <p className="">
          ----------------{" "}
          <span className="text-xl font-semibold md:text-2xl font-shadows-into-light">
            Featured Post
          </span>{" "}
          ----------------
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
