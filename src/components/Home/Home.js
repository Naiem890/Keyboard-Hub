import React from "react";
import Hero from "../Hero/Hero";
import Review from "../Review/Review";
import useReview from "../../hooks/useReview";
import { Link } from "react-router-dom";

const Home = () => {
  const [review] = useReview();
  return (
    <div className="md:mx-28 mx-8 my-10 ">
      <Hero></Hero>

      <div className="my-16">
        <h2 className="text-4xl text-center font-semibold">Customer Review</h2>
        <div className="grid grid-cols-3  gap-10 my-10">
          {review.slice(0, 3).map((r) => (
            <Review review={r}></Review>
          ))}
        </div>
        <Link
          to="/reviews"
          className="px-6 w-32 py-3 mx-auto block rounded-xl text-center w-  border-2 text-orange-600 font-bold border-orange-500 hover:bg-orange-100"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Home;
