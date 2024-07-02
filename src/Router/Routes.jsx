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
import PrivetRoute from "./PrivetRoute/PrivetRoute";
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
        element: (
          <PrivetRoute>
            <FoodDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_BASE_URL}/food/${params.id}`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
        loader: () =>
          fetch(`${import.meta.env.VITE_BASE_URL}/foods`, {
            credentials: "include",
          }),
      },
      {
        path: "/gallary",
        element: <Gallary />,
        loader: () =>
          fetch(`${import.meta.env.VITE_BASE_URL}/reviews`, {
            credentials: "include",
          }),
      },
      {
        path: "/add-food",
        element: (
          <PrivetRoute>
            <AddFood />
          </PrivetRoute>
        ),
      },
      {
        path: "/update/food/:id",
        element: (
          <PrivetRoute>
            <UpdateFood />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_BASE_URL}/food/${params.id}`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/purchase/food/:id",
        element: (
          <PrivetRoute>
            <PurchaseFood />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(`${import.meta.env.VITE_BASE_URL}/food/${params?.id}`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/my-purchase",
        element: (
          <PrivetRoute>
            <MyPurchase />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <PrivetRoute>
            <MyFoods />
          </PrivetRoute>
        ),
      },
      {
        path: "/registation",
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
