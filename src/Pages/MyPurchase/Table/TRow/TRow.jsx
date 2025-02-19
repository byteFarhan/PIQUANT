import { Link } from "react-router-dom";

const TRow = ({ rowData, handleDelete }) => {
  const {
    foodName,
    foodImage,
    price,
    quantity,
    buyingDate,
    foodAuthor,
    slug,
    _id,
  } = rowData;

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <Link to={`/food/${slug}`}>
              <img
                src={foodImage}
                alt={foodName}
                className="object-cover cursor-pointer size-12"
              />
            </Link>
            <Link to={`/food/${slug}`}>
              <h2 className="font-normal text-gray-800 dark:text-white">
                {foodName}
              </h2>
            </Link>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
          <span className="pl-3 lg:pl-5">{quantity}</span>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {buyingDate}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          ${price}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {foodAuthor?.authorName}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => handleDelete(_id)}
              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TRow;
