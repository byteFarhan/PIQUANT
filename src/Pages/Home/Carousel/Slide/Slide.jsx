import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Slide = ({ slideImg, subImg, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-10 mx-auto lg:flex-row max-w-7xl">
      <Fade direction="left">
        <div className="px-5 space-y-5 text-center lg:text-left lg:px-0">
          <img src={subImg} alt="" className="mx-auto lg:mx-0" />
          <h1 className="text-3xl font-bold text-white uppercase md:text-5xl font-oswald lg:text-7xl">
            {title}
          </h1>
          <p className="text-white lg:w-3/4 font-roboto-slab">{description}</p>
          <Link to={`/all-foods`} className="inline-block">
            <button className="px-4 py-2 text-lg uppercase bg-yellow-400 font-oswald">
              See All Foods
            </button>
          </Link>
        </div>
      </Fade>
      <Fade direction="up">
        {/* <AttentionSeeker effect="pulse"> */}
        <div className="">
          <img src={slideImg} alt="" />
        </div>
        {/* </AttentionSeeker> */}
      </Fade>
    </div>
  );
};

export default Slide;
