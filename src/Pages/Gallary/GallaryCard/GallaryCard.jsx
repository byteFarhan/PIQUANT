import PropTypes from "prop-types";

const GallaryCard = ({ reviewItem }) => {
  const { imageUrl, userName, userReview } = reviewItem;
  return (
    <div className="relative">
      <img src={imageUrl} alt="Image" className="object-cover w-full h-full" />

      {/* <!-- Overlay container --> */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-secondary hover:opacity-100 hover:bg-opacity-80">
        <div className="space-y-3 text-left text-white">
          <h2 className="text-2xl text-white font-oswald">{userName}</h2>
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
