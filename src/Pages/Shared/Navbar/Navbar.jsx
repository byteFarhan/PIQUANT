import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo-light.png";
import logo from "../../../assets/logo-normal.png";

const Navbar = () => {
  const user = false;
  const navItems = (
    <>
      {/* <NavLink
        to={`/registation`}
        className={({ isActive, isPending }) =>
          `nav-item ${isPending ? "" : isActive ? "bg-gray-200" : ""}`
        }
      >
        Registation
      </NavLink> */}
      <NavLink
        to={`/login`}
        className={({ isActive, isPending }) =>
          `nav-item ${isPending ? "" : isActive ? "bg-gray-200" : ""}`
        }
      >
        Login
      </NavLink>
    </>
  );
  const [isOpen, setIsOpen] = useState(false);
  //   const handleToggleMenue = () => {
  //     setIsOpen(!isOpen);
  //     console.log(isOpen);
  //   };
  return (
    <>
      <nav>
        <div
          // x-data="{ isOpen: false }"
          className="relative bg-white shadow"
        >
          <div className="px-6 py-4 mx-auto lg:px-0 max-w-7xl">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <Link to={`/`}>
                  <img className="w-auto md:h-10 h-7" src={logo} alt="logo" />
                </Link>

                {/* <!-- Mobile menu button --> */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 *:text-2xl font-medium *:text-black"
                    aria-label="toggle menu"
                  >
                    <GiHamburgerMenu className={`${isOpen ? "hidden" : ""}`} />
                    <GrClose className={`${isOpen ? "" : "hidden"}`} />
                  </button>
                </div>
              </div>

              {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
              <div
                className={`${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "opacity-0 -translate-x-full"
                } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
              >
                <ul className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                  <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                      `nav-item ${
                        isPending ? "" : isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={`/all-foods`}
                    className={({ isActive, isPending }) =>
                      `nav-item ${
                        isPending ? "" : isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    All Foods
                  </NavLink>
                  <NavLink
                    to={`/gallary`}
                    className={({ isActive, isPending }) =>
                      `nav-item ${
                        isPending ? "" : isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    Gallary
                  </NavLink>
                  {!user && navItems}
                </ul>

                <div
                  className={`${
                    user ? "" : "hidden"
                  } flex items-center mt-4 lg:mt-0`}
                >
                  {/* <button
                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                    aria-label="show notifications"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button> */}

                  <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div
                      className={`overflow-hidden border-2 border-gray-400 rounded-full w-9 h-9`}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className="object-cover w-full h-full"
                        alt="avatar"
                      />
                    </div>

                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                      Khatab wedaa
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
