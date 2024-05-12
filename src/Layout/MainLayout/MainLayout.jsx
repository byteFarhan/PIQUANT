import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../Pages/Shared/Navbar/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
