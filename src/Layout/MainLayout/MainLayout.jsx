import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Navbar/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
