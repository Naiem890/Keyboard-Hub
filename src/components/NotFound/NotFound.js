import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../image/404.png";

const NotFound = () => {
  return (
    <div>
      <img src={notFoundImage} className="block w-2/4 mx-auto" alt="" />
      <p className="text-center pb-10 text-4xl text-slate-400 font-bold font-mono">
        Page Not Found
      </p>
      <Link
        to="/home"
        className="px-6 w-44 py-3 mx-auto block rounded-xl text-center w-  border-2 text-orange-600 font-bold border-orange-500 hover:bg-orange-100"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
