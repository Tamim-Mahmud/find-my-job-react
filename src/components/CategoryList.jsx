import React from 'react';
import img1 from "../assets/icons/chip.png"
import img2 from "../assets/icons/accounts.png"
import img3 from "../assets/icons/creative.png"
import img4 from "../assets/icons/marketing.png"

const CategoryList = ({categories}) => {
    console.log(categories)
    return (
        <div className="mx-auto">
             <h1>Job Category List</h1>
             <h3>Explore thousands of job opportunities with all the information you need. Its your future</h3>
             <div className="flex gap-10">
                {
                    categories.map(category =>{
                        return (<>
                            <div className="">
                                <img src={category.logo} alt="" />
                                <h2>{}</h2>
                                <h3>{category.availability}</h3>
                            </div>
                        </>)
                    })
                }
             </div>

        </div>
    );
};

export default CategoryList;