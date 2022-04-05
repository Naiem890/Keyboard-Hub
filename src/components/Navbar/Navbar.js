import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="flex flex-wrap
      justify-center py-6 font-medium "
      >
        <NavLink to="/home" className="hover:bg-orange-200 px-6 py-2">
          Home
        </NavLink>
        <NavLink to="/reviews" className="hover:bg-orange-200 px-6 py-2">
          Reviews
        </NavLink>
        <NavLink to="/dashboard" className="hover:bg-orange-200 px-6 py-2">
          Dashboard
        </NavLink>
        <NavLink to="/blogs" className="hover:bg-orange-200 px-6 py-2">
          Blogs
        </NavLink>
        <NavLink to="/about" className="hover:bg-orange-200 px-6 py-2">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
