import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AllFoods from "../Pages/AllFoods/AllFoods";
// import useAxiosSecure from "../Hooks/useAxiosSecure";

// const axiosSecure = useAxiosSecure();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "food/:id",
        element: <FoodDetails />,
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_BASE_URL}/food/${params.id}`);
        },
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
        loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/foods`),
      },
      {
        path: "registation",
        element: <Registation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
