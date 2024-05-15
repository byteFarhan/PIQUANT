import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import sectionBg from "../../assets/pattern-2.png";

import PageTitle from "../Shared/PageTitle/PageTitle";
import TableB from "./TableB/TableB";

const MyFoods = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/foods?authorEmail=${user?.email}`)
      .then((res) => {
        setMyFoods(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, user]);
  console.log(myFoods);
  return (
    <section>
      <PageTitle pageTitle={`Your Added Foods`} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <section className="mx-auto max-w-7xl">
          <div className="">
            <TableB />
          </div>
        </section>
      </section>
    </section>
  );
};

export default MyFoods;
