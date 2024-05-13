import toast from "react-hot-toast";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const BookATable = () => {
  //   const date = new Date();
  //   const options = {
  //     day: "numeric",
  //     month: "numeric",
  //     year: "numeric",
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("This feature is under development.");
    // console.log(e.target);
  };
  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     console.log(e.target.person.value);
  //   };
  return (
    <section className="bg-[#f5f5f5] py-8 lg:py-10">
      <div className="px-5 mx-auto max-w-7xl lg:px-0">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-4 md:flex-row lg:gap-8">
            {/* <label
              //   for="email"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Email Address
            </label> */}
            <div className="relative flex items-center w-full">
              <span className="absolute flex items-center justify-center">
                <IoPersonSharp className="block mx-3 text-2xl align-middle" />
              </span>
              <select
                // onChange={handleSelect}
                className="block w-full py-2.5 text-socendary placeholder-gray-400/70 bg-white pl-11 pr-5 rtl:pr-11 rtl:pl-5 rounded-none focus:outline-none ring-2 ring-secondary"
                name="person"
                id="person"
              >
                <option value="1 person">1 Person</option>
                <option value="2 people">2 People</option>
                <option value="3 people">3 People</option>
                <option value="4 people">4 People</option>
                <option value="5 people">5 People</option>
                <option value="6 people">6 People</option>
                <option value="7 people">7 People</option>
                <option value="8 people">8 People</option>
              </select>
              {/* <input
                type=""
                // placeholder="john@example.com"
                className="block w-full py-2.5 text-socendary placeholder-gray-400/70 bg-white pl-11 pr-5 rtl:pr-11 rtl:pl-5 rounded-none focus:outline-none ring-2 ring-secondary"
              /> */}
            </div>
            <div className="relative flex items-center w-full">
              <span className="absolute flex items-center justify-center">
                <BsCalendarDateFill className="block mx-3 text-2xl align-middle" />
              </span>

              <input
                type="date"
                placeholder=""
                className="block w-full py-2.5 text-socendary placeholder-gray-400/70 bg-white pl-11 pr-5 rtl:pr-11 rtl:pl-5 rounded-none focus:outline-none ring-2 ring-secondary"
              />
            </div>
            <div className="relative flex items-center w-full">
              <span className="absolute flex items-center justify-center">
                <MdEmail className="block mx-3 text-2xl align-middle" />
              </span>

              <input
                type="email"
                placeholder="john@example.com"
                className="block w-full py-2.5 text-socendary placeholder-gray-400/70 bg-white pl-11 pr-5 rtl:pr-11 rtl:pl-5 rounded-none focus:outline-none ring-2 ring-secondary"
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 btn-base btn-primary"
              >
                <FaHandPointRight className="mr-2" /> Book A Table
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATable;
