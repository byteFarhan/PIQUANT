import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 font-oswald text-xl font-bold bg-primary p-3 text-secondary transition-opacity duration-300 delay-300 ease-in-out ${
        isVisible ? "" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      {/* <IoIosArrowUp className="" /> */}
      TOP
    </button>
  );
};

export default ScrollToTop;
