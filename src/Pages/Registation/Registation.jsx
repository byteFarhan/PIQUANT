import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-normal.png";
import img from "../../assets/home-1-image-3.jpg";
import bgImg from "../../assets/pattern-2.png";
import { IoPersonOutline } from "react-icons/io5";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Registation = () => {
  const { createUserWithEmail, setUser, user } = useAuth();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setSuccess("");
    setError("");
    // console.log(data);
    const { name, email, password, photoURL } = data;

    if (password.length < 6) {
      setError("Password must be longer than 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase character!");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password should have at least one spacial character!");
      return;
    }

    createUserWithEmail(email, password)
      .then((result) => {
        // console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({ ...result.user, displayName: name, photoURL });
          setSuccess("Registation successfull.");
          toast.success("Registation successfull.");
          reset();
          navigate(location.state ? location.state : "/");
        });
        setSuccess("Registation successfull.");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
  return (
    <section className="" style={{ backgroundImage: `url(${bgImg})` }}>
      <Helmet>
        <title>PIQUANT | Register</title>
      </Helmet>
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-white shadow-md md:max-w-md lg:max-w-4xl">
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
            {/* <p className="mt-3 text-xl font-semibold text-center text-gray-800 font-oswald">
              Sign Up Your Account
            </p> */}
            <SocialLogin />

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase">
                or Sign Up with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  //   htmlFor="LoggingEmailAddress"
                >
                  Your Name
                </label>
                <div className="relative flex items-center mt-2">
                  <span className="absolute text-center opacity-60">
                    <IoPersonOutline className="ml-2.5 text-2xl" />
                  </span>

                  <input
                    type="text"
                    className="block w-full py-2.5 text-secondary bg-white border rounded-none px-11 focus:ring-2 ring-opacity-60 focus:outline-none ring-2 ring-secondary focus:ring-secondary"
                    placeholder="John Doe"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  //   htmlFor="LoggingEmailAddress"
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
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label
                  //   for="domain name"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Photo Url
                </label>

                <div className="flex items-center mt-2">
                  <p className="py-[10px] text-secondary bg-white border-l-2 border-y-2 border-secondary rounded-none px-1 opacity-60">
                    http://
                  </p>
                  <input
                    type="text"
                    placeholder="example.com"
                    className="block w-full py-2.5 text-secondary bg-white border rounded-none px-2 focus:ring-2 ring-opacity-60 focus:outline-none ring-2 ring-secondary focus:ring-secondary"
                    {...register("photoURL", { required: true })}
                  />
                </div>
                {errors.photoURL && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
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
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-2">
                {success && <p className="text-sm text-gray-700">{success}</p>}
                {error && <p className="text-sm text-red-700">{error}</p>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 transform btn-base btn-secondary"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4 text-center">
              {/* <span className="w-1/5 border-b md:w-1/4"></span> */}

              <Link
                to="/login"
                className="text-sm text-blue-600 transition-all duration-100 ease-in-out delay-100 hover:underline"
              >
                {`Already have an account Login`}
              </Link>

              {/* <span className="w-1/5 border-b md:w-1/4"></span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registation;
