import React, { useContext } from "react";
import { getShoppingCart } from "../assets/fakedb";
import { useLoaderData } from "react-router-dom";
import img from "../assets/images/bg2.png";
import img2 from "../assets/images/bg1.png";
import Job from "./Job";

const AppliedJobs = () => {
  const appliedJobsId = getShoppingCart();
  const jobs = useLoaderData();
  const appliedJobs = [];
  for (const id of appliedJobsId) {
    const temp = jobs.find((j) => j.id == id);
    if (temp) {
      appliedJobs.push(temp);
    }
  }

  console.log(appliedJobs);

  return (
    <div className="mt-10">
      <div className=" ">
        <img className="absolute top-0 right-0" src={img} alt="" />
        <h2 className=" font-bold text-3xl text-center">Applied Jobs</h2>
        <img className=" " src={img2} alt="" />
        <br  className=""/>
      </div>

      <div className="">
        <div className="flex justify-end">
          <div className="dropdown dropdown-close">
            <label tabIndex={0} className="btn m-1">
              Filter By
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Date</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-y-5 mt-5">
          {appliedJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
