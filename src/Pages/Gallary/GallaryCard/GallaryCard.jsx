import PropTypes from "prop-types";

const GallaryCard = ({ reviewItem }) => {
  const { foodImage, author, userReview } = reviewItem;

  return (
    <div className="relative">
      <img
        src={foodImage}
        alt="Image"
        className="object-cover w-full h-full cursor-pointer"
      />

      {/* <!-- Overlay container --> */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6 transition-all duration-300 delay-300 opacity-0 cursor-pointer bg-gradient-to-t from-secondary hover:opacity-100">
        <div className="space-y-2 text-left text-white cursor-pointer">
          <h2 className="text-2xl text-white font-oswald">
            {author?.userName}
          </h2>
          <p className="text-white">{userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default GallaryCard;
GallaryCard.propTypes = {
  reviewItem: PropTypes.object.isRequired,
};
