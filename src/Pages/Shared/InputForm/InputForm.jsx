import PropTypes from "prop-types";

const InputForm = ({
  taitle,
  description,
  submitText,
  submitFunc,
  food,
  formFunctions,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formFunctions;
  return (
    <div className="bg-top bg-no-repeat bg-cover bg-gray">
      <div className="mx-3 bg-transparent rounded md:mx-6 max-w-7xl lg:mx-auto">
        <div className="mb-5 space-y-6 text-center">
          <h1
            style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="text-3xl text-opacity-75 md:text-5xl text-secondary font-oswald"
          >
            {taitle}
          </h1>
          <p className="mx-auto md:w-4/5 lg:w-2/3">{description}</p>
        </div>
        <form
          onSubmit={handleSubmit(submitFunc)}
          className="space-y-4 md:px-10"
        >
          {/* row-1 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                id="foodName"
                placeholder="Food Name"
                defaultValue={food?.foodName}
                className="input-field"
                {...register("foodName", { required: true })}
              />
              {errors.foodName && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Category</span>
              </label>
              <input
                type="text"
                name="foodCategory"
                id="foodCategory"
                placeholder="Food Category"
                defaultValue={food?.foodCategory}
                className="input-field"
                {...register("foodCategory", { required: true })}
              ></input>
              {errors.foodCategory && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* row-2 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Origin</span>
              </label>
              <input
                type="text"
                name="foodOrigin"
                placeholder="Food Origin"
                defaultValue={food?.foodOrigin}
                className="input-field"
                {...register("foodOrigin", { required: true })}
              />
              {errors.foodOrigin && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Available Quantity</span>
              </label>
              <input
                type="number"
                min={3}
                name="availableQuantity"
                placeholder="Available Quantity"
                defaultValue={food?.availableQuantity}
                className="input-field"
                {...register("availableQuantity", { required: true })}
              />
              {errors.availableQuantity && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* row-3 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Price</span>
              </label>
              <input
                type="number"
                name="price"
                min={5}
                step="0.01"
                placeholder="Price (USD)"
                defaultValue={food?.price}
                className="input-field"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Quantity</span>
              </label>
              <input
                type="text"
                name="foodQuantity"
                placeholder="Food Quantity (200gm / 2pice)"
                defaultValue={food?.foodQuantity}
                className="input-field"
                {...register("foodQuantity", { required: true })}
              />
              {errors.foodQuantity && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* row-4 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Rating</span>
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                name="rating"
                placeholder="Rating"
                defaultValue={food?.rating}
                className="input-field"
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Food Image</span>
              </label>
              <input
                type="text"
                name="foodImage"
                placeholder="Food Image URL"
                defaultValue={food?.foodImage}
                className="input-field"
                {...register("foodImage", { required: true })}
              />
              {errors.foodImage && (
                <span className="mt-2 text-red-600">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* row-5 */}
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Food Details</span>
            </label>
            <textarea
              name="description"
              id="description"
              cols="10"
              rows="3"
              placeholder="Food Details"
              defaultValue={food?.description}
              className="input-field"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          {errors.description && (
            <span className="mt-2 text-red-600">This field is required</span>
          )}
          <button className="w-full mb-5 btn-base btn-secondary py-2.5">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

InputForm.propTypes = {
  taitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  submitText: PropTypes.string.isRequired,
  submitFunc: PropTypes.func.isRequired,
  food: PropTypes.object,
  formFunctions: PropTypes.object,
};
export default InputForm;
