import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
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
