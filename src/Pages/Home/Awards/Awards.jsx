import chef from "../../../assets/home-4-the-chef-b.jpg";
import awards from "../../../assets/home-1-awards.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoShareSocialSharp, IoWifiSharp } from "react-icons/io5";
import { IoIosPrint } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
const Awards = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-10 px-5 py-12 mx-auto lg:flex-row md:py-16 max-w-7xl lg:px-0">
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl">AWARD WINNING RESTAURANT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa.
        </p>
        <img src={awards} alt="awards" draggable={false} />
        <h5 className="text-lg">CONTACT INFO</h5>
        <div className="flex flex-col gap-4 md:items-center md:gap-20 md:flex-row">
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaLocationDot />
              Raymond Boulevard 224, New York
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> piquant@qodeinteractive.com
            </p>
            <p className="flex items-center gap-2">
              <IoWifiSharp />
              Home
            </p>
          </div>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <IoIosPrint />
              1-202-555-0158
            </p>{" "}
            <p className="flex items-center gap-2">
              <IoShareSocialSharp />
              social media link
            </p>
            <p className="flex items-center gap-2">
              <FaPhone />
              1-444-123-4559
            </p>
          </div>
        </div>

        {/* <div className="flex items-center gap-10 pr-10"></div> */}
      </div>
      <div className="flex-1">
        <img src={chef} alt="chef" />
      </div>
    </section>
  );
};

export default Awards;
