import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-12 mx-20 my-10 items-center">
      <div className="col-span-6">
        <h1 className="text-4xl mb-10 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Buy Your First </span>{" "}
          <span className="block text-orange-500 xl:inline">
            Mechanical Keyboard
          </span>
        </h1>

        <p className="mt-3 mb-10 w-3/4 text-base text-gray-500 sm:mt-5 sm:text-lg ">
          Mechanical keyboards are computer keyboards that have switches under
          each key, rather than the rubber membranes used in most common
          keyboards.
        </p>
        <div className="">
          <a
            href="/"
            className="px-10 inline-block  py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg "
          >
            Live demo
          </a>
        </div>
      </div>
      <div className="col-span-6">
        <img
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F08%2Fkeychron-k3-hot-swappable-slim-wireless-mechanical-keyboard-release-000.jpg?w=960&cbr=1&q=90&fit=max"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
