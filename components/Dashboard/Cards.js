const Cards = () => {
  return (
    <>
      <div className=" w-full lg:px-24 ">
        <div className="relative max-w-7xl mx-auto ">
          <div className="flex gap-1 flex-col  md:flex-row md:px-0 md:py-0 lg:flex-row py-8 border-b-2 border-gray-800  ">
            <div class="flex-1  text-center">
              <div className="flex px-3 py-4">
                <img
                  loading="lazy"
                  className="h-16 w-16 rounded-full object-cover mr-3"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profilepic"
                />
                <div className="pt-2">
                  <h3 className=" text-left font-bold text-white text-xl ">
                    Hello, Joshua
                  </h3>
                  <p className="text-gray-400 text-left text-lg">
                    Say this is a good afternoon
                  </p>
                </div>
              </div>
            </div>

            <div class="flex-none  flex  gap-2 items-center px-4 pt-2 text-sm font-bold ">
              <button className="bg-white px-5 py-2 text-gray-700 text-lg md:text-sm ">
                Download Report
              </button>
              <button className=" bg-green-400 px-5 py-2 text-gray-700 text-lg md:text-sm">
                {" "}
                Add Keywords
              </button>
            </div>
          </div>
          {/* status text section */}
          <div className="flex items-center px-4 gap-2 pt-12 pb-12 md:mx-4 lg:mx-0  sm:gap-0">
            <div>
              <h2 className="text-2xl lg:mx-4 md:mx-0 sm:pl-4 sm:pr-2">
                Status
              </h2>
            </div>
            <div className="border-b-1 border-gray-300 bg-green-400 h-1 w-12"></div>
          </div>
          {/* start of the grid */}
          <div class="grid grid-cols-1 gap-4  justify-items-stretch px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* the first card  */}
            <div class="bg-gray-700  p-8 rounded-lg cursor-pointer hover:shadow-inner hover:shadow-blue-300   ">
              {/* top section of the card */}
              <div className="flex justify-between items-center ">
                <div
                  className=" bg-gray-600 h-16 w-16 text-center
                 text-red-500 rounded-lg flex items-center justify-center "
                >
                  1
                </div>
                <div className="h-4 w-16 p-3  border-y border-x border-gray-600 rounded-full flex items-center justify-center text-sm ">
                  <h5>+24%</h5>
                </div>
              </div>
              {/* middle text-description section */}
              <p className="text-gray-400 pt-6">Changes in Position</p>
              <h3 className="text-3xl text-gray-200 font-semibold md:text-2xl lg:text-2xl">
                432.4454%
              </h3>
            </div>
            {/* the second card */}
            <div class="bg-gray-700  p-8 rounded-lg cursor-pointer hover:shadow-inner hover:shadow-blue-300">
              {/* top section of the card */}
              <div className="flex justify-between items-center ">
                <div className=" bg-gray-600 h-16 w-16 text-center text-red-500 rounded-lg flex items-center justify-center">
                  2
                </div>
                <div className="h-4 w-16 p-3  border-y border-x border-gray-600 rounded-full flex items-center justify-center text-sm ">
                  <h5>+24%</h5>
                </div>
              </div>
              {/* middle text-description section */}
              <p className="text-gray-400 pt-6">Changes in Position</p>
              <h3 className="text-3xl text-gray-200 font-semibold md:text-2xl lg:text-2xl">
                432.4454%
              </h3>
            </div>
            {/* the third card */}
            <div class="bg-gray-700  p-8 rounded-lg cursor-pointer hover:shadow-inner hover:shadow-blue-300">
              {/* top section of the card */}
              <div className="flex justify-between items-center ">
                <div className=" bg-gray-600 h-16 w-16 text-center text-red-500 rounded-lg flex items-center justify-center">
                  3
                </div>
                <div className="h-4 w-16 p-3  border-y border-x border-gray-600 rounded-full flex items-center justify-center text-sm ">
                  <h5>+24%</h5>
                </div>
              </div>
              {/* middle text-description section */}
              <p className="text-gray-400 pt-6">Changes in Position</p>
              <h3 className="text-3xl text-gray-200 font-semibold md:text-2xl lg:text-2xl">
                432.4454%
              </h3>
            </div>
            {/* the fourth and final card */}
            <div class="bg-gray-700  p-8 rounded-lg cursor-pointer hover:shadow-inner hover:shadow-blue-300">
              {/* top section of the card */}
              <div className="flex justify-between items-center ">
                <div className=" bg-gray-600 h-16 w-16 text-center text-red-500 rounded-lg flex items-center justify-center">
                  4
                </div>
                <div className="h-4 w-16 p-3  border-y border-x border-gray-600 rounded-full flex items-center justify-center text-sm ">
                  <h5>+24%</h5>
                </div>
              </div>
              {/* middle text-description section */}
              <p className="text-gray-400 pt-6">Changes in Position</p>
              <h3 className="text-3xl text-gray-200 font-semibold md:text-2xl lg:text-2xl">
                432.4464%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
