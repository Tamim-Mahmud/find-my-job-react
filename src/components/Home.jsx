import React, { useEffect, useState } from "react";
import LandPage from "./LandPage";
import CategoryList from "./CategoryList";
import FeatureJob from "./FeatureJob";
import { createContext } from "react";

export const DataContext = createContext([]);

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [seeAll,setSeeAll]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData, jobsData] = await Promise.all([
        fetch("categories.json").then((res) => res.json()),
        fetch("jobs.json").then((res) => res.json()),
      ]);
      setCategories(categoriesData);
      setJobs(jobsData);
    };
    fetchData();
  }, []);
  console.log(seeAll);
  return (
    <div className="">
      <DataContext.Provider value={[categories, jobs, seeAll]}>
        <LandPage />
        <CategoryList />
        <FeatureJob />
      {seeAll || <button className="btn btn-primary text-white mx-auto block mt-5 mb-5" onClick={()=>setSeeAll(!seeAll)}>See All Jobs</button>}
      {seeAll && <button className="btn btn-primary text-white mx-auto block mt-5 mb-5" onClick={()=>setSeeAll(!seeAll)}>See Less Jobs</button>}
      </DataContext.Provider>
    </div>
  );
};

export default Home;
