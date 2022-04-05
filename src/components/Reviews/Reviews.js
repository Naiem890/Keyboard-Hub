import React from "react";
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [review] = useReview();

  return (
    <div className="md:mx-28 mx-8 my-10 ">
      <h2 className="text-4xl text-center font-semibold">
        What Our Customer Says
      </h2>
      <div className="grid md:grid-cols-3  gap-10 my-10">
        {review.map((r) => (
          <Review key={r._id} review={r}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
