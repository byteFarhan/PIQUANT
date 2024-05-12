import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-normal.png";
import img from "../../assets/Mango-Chile-Chutney.jpg";
import bgImg from "../../assets/pattern-2.png";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="flex items-center justify-center py-20">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white shadow-md md:max-w-md lg:max-w-4xl">
          <div
            className="hidden bg-center bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl font-semibold text-center text-gray-800 font-oswald">
              Sign In Your Account
            </p>
            <SocialLogin />

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <div className="relative flex items-center mt-2">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    className="block w-full py-2.5 text-secondary bg-white border rounded-none px-11 focus:ring-2 ring-opacity-60 focus:outline-none ring-2 ring-secondary focus:ring-secondary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-700 dark:text-gray-300">
                  Password
                </label>

                <div className="relative flex items-center mt-2">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer right-3 focus:outline-none rtl:left-0 rtl:right-auto"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="block w-full py-2.5 text-secondary bg-white border rounded-none px-11 focus:ring-2 ring-opacity-60 focus:outline-none ring-2 ring-secondary focus:ring-secondary"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 transform btn-base btn-secondary"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4 text-center">
              {/* <span className="w-1/5 border-b md:w-1/4"></span> */}

              <Link
                to="/registation"
                className="text-sm text-blue-600 transition-all duration-100 ease-in-out delay-100 hover:underline"
              >
                {`Don't have any account Register`}
              </Link>

              {/* <span className="w-1/5 border-b md:w-1/4"></span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
