import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo-light.png";
import logo from "../../../assets/logo-normal.png";
import useAuth from "../../../Hooks/useAuth";
import { IoExitOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const handleLogout = () => {
    userSignOut()
      .then(() => {
        toast.success("Logout successfull.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
                  {/* <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                      `nav-item ${
                        isPending ? "" : isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink> */}
                  <NavItem routeName={"Home"} routePath={"/"} />
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
                  <NavItem
                    routeName={"My Purchase"}
                    routePath={"/my-purchase"}
                  />

                  <NavLink
                    to={`/add-food`}
                    className={({ isActive, isPending }) =>
                      `nav-item ${
                        isPending ? "" : isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    Add Food
                  </NavLink>
                  {!user && navItems}
                </ul>

                {user && (
                  <>
                    <div
                      className={`flex items-center mt-4 lg:mt-0 lg:tooltip lg:tooltip-bottom z-20 dropdown dropdown-bottom dropdown-end`}
                      data-tip={user?.displayName}
                    >
                      <button
                        type="button"
                        className="flex items-center focus:outline-none"
                        aria-label="toggle profile dropdown"
                      >
                        <div
                          className={`overflow-hidden border-2 border-gray-400 rounded-full w-9 h-9`}
                          // data-tip={user?.displayName}
                        >
                          <div tabIndex={0} role="button" className="">
                            <img
                              src={user?.photoURL}
                              className="object-cover w-full h-full"
                              alt="avatar"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[3] menu px-3 py-4 shadow bg-base-100 rounded-box w-52 text-white hidden lg:block"
                        >
                          <li>
                            <p
                              onClick={handleLogout}
                              className="btn-base btn-secondary px-5 py-2.5 cursor-pointer"
                            >
                              Logout <IoExitOutline />
                            </p>
                          </li>
                        </ul>
                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                          {user?.displayName}
                        </h3>
                      </button>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="btn-base btn-secondary px-5 py-2.5 lg:hidden mt-4"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
