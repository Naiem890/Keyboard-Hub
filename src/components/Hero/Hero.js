import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="grid md:grid-cols-12 items-center">
        <div className="col-span-6 md:text-left text-center ">
          <h1 className="text-4xl mb-10 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Buy Your First </span>{" "}
            <span className="block text-orange-500 xl:inline">
              Mechanical Keyboard
            </span>
          </h1>

          <p className="mt-3 mb-6 sm:w-3/4 md:mx-0 mx-auto text-base text-gray-500 sm:mt-5 sm:text-lg ">
            Mechanical keyboards are computer keyboards that have switches under
            each key, rather than the rubber membranes used in most common
            keyboards.
          </p>
          <div className="">
            <a
              href="/"
              className="px-10 inline-block  py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg "
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="col-span-6">
          <img src="https://i.ibb.co/g3pmWgR/Group-69385.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
