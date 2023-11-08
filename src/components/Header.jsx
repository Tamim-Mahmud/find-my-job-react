import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mt-5 ">
        <Link to="/">FindMyJob</Link >

        <ul className="flex gap-x-7">
          <Link to="/statistics">Statistics</Link >
          <Link to="/applied-jobs">Applied Jobs</Link >
          <Link to="/blogs">Blog</Link >
        </ul>

        <button className="btn">Star Applying</button>
      </nav>
    </div>
  );
};

export default Header;
