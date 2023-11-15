import React from "react";
import user from "../assets/images/user.png";
const LandPage = () => {
  return (
    <div className="flex items-center ">
      <div className="">
        <h2 className="">
          <span className="text-4xl font-bold">
            One Step <br /> Closer To Your <br />
            <span className="text-blue-800">Dream Job</span>
          </span>{" "}
          <br />
        </h2>
        <h3 className="mt-5 mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </h3>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <img className="w-96" src={user} alt="" />
    </div>
  );
};

export default LandPage;
