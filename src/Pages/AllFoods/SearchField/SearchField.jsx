const SearchField = ({ handleSearch }) => {
  return (
    <section className="px-5 pt-10 mx-auto lg:pt-16 max-w-7xl lg:px-0">
      <div className="">
        <form
          onSubmit={handleSearch}
          className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
        >
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              name="search"
              className="block w-full py-2 bg-white border rounded-none text-secondary px-11 focus:ring-2 ring-opacity-60 focus:outline-none ring-2 ring-secondary focus:ring-secondary"
              placeholder="Search"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-secondary rounded"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchField;
