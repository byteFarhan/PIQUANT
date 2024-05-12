import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../Pages/Shared/Navbar/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import ScrollToTop from "../../Pages/Shared/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Toaster />
      <Footer />
    </>
  );
};

export default MainLayout;
