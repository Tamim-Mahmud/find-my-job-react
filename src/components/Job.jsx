import React from "react";
import img from "../assets/logo/netflix.png";

const Job = ({ job }) => {
  const {
    company_name,
    location,
    logo,
    salary,
    remote_or_onsite,
    job_title,
    job_type,
  } = job;
  // console.log(company_name,location,logo,salary,remote_or_onsite,job_title)
  console.log(job);
  return (
    <div className="text-left border border-1 p-8 space-y-6">
      <img className="w-32" src={img} alt="" />
      <h1>{job_title}</h1>
      <h1>{company_name}</h1>
      <div className="">
        <button className="btn btn-outline btn-primary text-white rounded-md mr-5">
          {remote_or_onsite}
        </button>
        <button className="btn btn-btn btn-outline btn-primary text-white rounded-md ">
          {job_type}
        </button>
      </div>
      <div className=" flex gap-4">
        <h2 className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {location}
        </h2>
        <h2 className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        Salary : {salary}
        </h2>
      </div>
      <button className="btn btn-primary text-white rounded-md">View Details</button>
    </div>
  );
};

export default Job;
