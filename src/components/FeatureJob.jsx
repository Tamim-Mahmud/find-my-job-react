import React, { useContext } from 'react';
import { DataContext } from './Home';
import Job from './Job';

const FeatureJob = () => {
    let [ ,jobs,seeAll]=useContext(DataContext);
    if(!seeAll){
        jobs=jobs.slice(0,4);
    }
    // console.log(jobs)
    return (
        <div className=" w-fit mx-auto text-center mt-5">
            <h1 className="text-2xl font-bold mb-3">Featured Jobs</h1>
            <h2>Explore thousands of job opportunities with all the information you need. Its your future</h2>
            <div className="grid grid-cols-2 gap-6 mt-10">
                {
                    jobs.map(job =><Job key={job.id} job={job}/>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;