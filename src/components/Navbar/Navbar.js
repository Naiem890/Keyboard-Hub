import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  justify-center my-6 font-medium container">
      <Link to="/home" className="hover:bg-orange-200 px-6 py-2">
        Home
      </Link>
      <Link to="/review" className="hover:bg-orange-200 px-6 py-2">
        Review
      </Link>
      <Link to="/dashboard" className="hover:bg-orange-200 px-6 py-2">
        Dashboard
      </Link>
      <Link to="/blogs" className="hover:bg-orange-200 px-6 py-2">
        Blogs
      </Link>
      <Link to="/about" className="hover:bg-orange-200 px-6 py-2">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
