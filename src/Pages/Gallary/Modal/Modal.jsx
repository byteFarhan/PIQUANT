import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ reviews, setReviews }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const getUserReview = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You have to sign in your account!");
      navigate("/login");
      return;
    }
    const form = e.target;
    // console.log(form);
    const userName = form.name.value;
    const foodImage = form.foodImage.value;
    const userReview = form.description.value;
    const newReview = {
      foodImage,
      userReview,
      author: {
        userName,
        userEmail: user?.email,
      },
    };
    // console.log(newReview);
    axiosSecure
      .post("/reviews", newReview)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Your review has been added success fully.");
          form.reset();
          setReviews([newReview, ...reviews]);
          //   setReviews([...reviews, newReview]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto mt-6 text-center md:mt-8 lg:mt-10">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="px-5 py-3 btn-base btn-secondary"
        onClick={() => document.getElementById("modal").showModal()}
      >
        Add Review
      </button>
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="relative p-5 mr-10 bg-white rounded md:p-8 lg:px-5 md:mr-0">
          <div className="modal-action">
            <form
              onSubmit={getUserReview}
              className="flex flex-col gap-5 w-80 md:w-96"
            >
              <input
                type="text"
                name="name"
                placeholder="User Name"
                value={user?.displayName}
                className="input-field"
                required
                readOnly
              />
              <input
                type="text"
                name="foodImage"
                placeholder="Food Image URL"
                required
                className="input-field"
              />
              <textarea
                name="description"
                id="description"
                rows="2"
                placeholder="Write Your Review"
                required
                className="input-field"
              ></textarea>
              <div className="flex w-full gap-4">
                <input
                  type="submit"
                  value="Add"
                  className="btn-base w-full cursor-pointer btn-primary px-3.5 py-2.5"
                />
              </div>
            </form>
            <form method="dialog" className="absolute -top-4 -right-3">
              <button className="text-white border-none cursor-pointer btn btn-circle hover:bg-secondary bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
