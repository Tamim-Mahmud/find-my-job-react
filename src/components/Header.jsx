import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky  top-0 bg-white z-50">
      <nav className="flex justify-between items-center mt-5">
        <Link className="text-2xl font-bold" to="/">Find<span className="text-blue-800">My</span>Job</Link >

        <ul className="flex gap-x-7 text-lg">
          <NavLink className={({isActive})=> isActive ? "text-blue-600" :"default"} to="/statistics">Statistics</NavLink >
          <NavLink className={({isActive})=> isActive ? "text-blue-600" :"default"} to="/applied-jobs">Applied Jobs</NavLink >
          <NavLink className={({isActive})=> isActive ? "text-blue-600" :"default"} to="/blogs">Blog</NavLink >
        </ul>

        <button className="btn btn-primary text-white">Star Applying</button>
      </nav>
    </div>
  );
};

export default Header;
