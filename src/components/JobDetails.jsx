import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl font-bold">Job Details</h2>
      <div className="">
        <div className="">
            <h2>Job Description : {job_description}</h2>
            <h2>JOb Responsibility : {job_responsibility}</h2>
            <h2>Educational Requirments : <br /> {educational_requirements}
            </h2>
            <h2>Experience : <br /> {experiences}</h2>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default JobDetails;
