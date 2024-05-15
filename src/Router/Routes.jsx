import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AllFoods from "../Pages/AllFoods/AllFoods";
import AddFood from "../Pages/AddFood/AddFood";
import Gallary from "../Pages/Gallary/Gallary";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";
import MyPurchase from "../Pages/MyPurchase/MyPurchase";
import MyFoods from "../Pages/MyFoods/MyFoods";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
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
        path: "/gallary",
        element: <Gallary />,
        loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/reviews`),
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/update/food/:id",
        element: <UpdateFood />,
      },
      {
        path: "/purchase/food/:id",
        element: <PurchaseFood />,
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_BASE_URL}/food/${params?.id}`);
        },
      },
      {
        path: "/my-purchase",
        element: <MyPurchase />,
      },
      {
        path: "/my-foods",
        element: <MyFoods />,
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
