import React from "react";
import { StarIcon } from "@heroicons/react/solid";
const Review = (props) => {
  const { reviewText, rating, userName, userImage } = props.review;
  return (
    <div className="border rounded-lg flex flex-col justify-between  p-6 text-xl bg-white">
      <p className="text-slate-500  mb-6">{reviewText}</p>
      <div className="flex items-center">
        <img
          src={userImage}
          alt=""
          width={52}
          height={52}
          className="rounded-full"
        />
        <h4 className="ml-4 font-semibold">{userName}</h4>
        <p className=" text-orange-500 font-bold ml-auto mr-2">{rating}/5</p>
        <StarIcon className="text-orange-500" height={28}></StarIcon>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Review;
