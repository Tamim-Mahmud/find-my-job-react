import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../assets/fakedb";
import img from "../assets/images/bg2.png";
import img2 from "../assets/images/bg1.png";

const JobDetails = () => {
  let job = useLoaderData();

  const { id } = useParams();
  for (const j of job) {
    if (j.id == id) {
      job = j;
      break;
    }
  }
  const {
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const handleApplyNow =(id)=>{
    addToDb(id);

  }
  return (
    <div className="mt-24">
        <div className="mb-5">
        <img className="fixed top-0 right-0" src={img} alt="" />
        <img className="fixed top-12  w-" src={img2} alt="" />
      </div>
      <h2 className="text-center text-3xl font-bold">Job Details</h2>
      <div className="grid grid-cols-3 gap-x-14 mt-20">
        <div className="space-y-5 col-span-2">
          <h2>
            <span className="font-bold">Job Description</span> :{" "}
            {job_description}
          </h2>
          <h2>
            <span className="font-bold">Job Responsibility</span> :{" "}
            {job_responsibility}
          </h2>
          <h2>
            <span className="font-bold">Educational Requirements</span> : <br />{" "}
            {educational_requirements}
          </h2>
          <h2>
            <span className="font-bold">Experience</span> : <br /> {experiences}
          </h2>
        </div>
        <div className="">
          <div className="bg-purple-200 p-6 rounded-xl space-y-4">
            <h1>Job Details</h1>
            <hr className="bg-black-700 "/>
            <div className="">
              <h1>Salary : {salary}</h1>
              <h1>Job Title : {job_title}</h1>
            </div>
            <h1>Contact Information</h1>
            <hr />
            <div className="">
              <h1>Phone : {contact_information.phone}</h1>
              <h1>Email : {contact_information.email}</h1>
              <h1>Address : {contact_information.address}</h1>
            </div>
          </div>
          <button className="btn btn-primary  text-white mt-5 w-full" onClick={()=>handleApplyNow(id)}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
