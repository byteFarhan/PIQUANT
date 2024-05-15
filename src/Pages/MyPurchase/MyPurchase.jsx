import PageTitle from "../Shared/PageTitle/PageTitle";
import sectionBg from "../../assets/pattern-2.png";
import Table from "./Table/Table";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyPurchase = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/purchases?userEmail=${user?.email}`)
      .then((res) => {
        setPurchases(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user, axiosSecure]);
  //   console.log(purchases);
  return (
    <section>
      <PageTitle pageTitle={"My Purchase"} />
      <section
        style={{ backgroundImage: `url(${sectionBg})` }}
        className="px-5 py-16 md:py-20 md:px-8 lg:px-0 lg:py-32"
      >
        <section className="mx-auto max-w-7xl">
          <div className="">
            {purchases?.length > 0 ? (
              <>
                <Table purchases={purchases} setPurchases={setPurchases} />
              </>
            ) : (
              <div className="flex items-center justify-center h-96">
                <h3 className="text-3xl font-bold text-center">{`You don't purchase any food yet!`}</h3>
              </div>
            )}
          </div>
        </section>
      </section>
    </section>
  );
};

export default MyPurchase;
