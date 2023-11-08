import React, { useEffect, useState } from 'react';
import LandPage from './LandPage';
import CategoryList from './CategoryList';

const Home = () => {
    const [categories,setCategories] =useState([]);
    const [jobs,setJobs]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))


        fetch("jobs.json")
        .then(res=>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div className="mx-auto">
            <LandPage />
            <CategoryList categories={categories} />
        </div>
    );
};

export default Home;