import React, { useContext } from "react";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";
import { DataContext } from "./Home";
import SingleCategory from "./SingleCategory";

const CategoryList = () => {
  const [categories] = useContext(DataContext);

  // console.log(categories);


const getCategoryImage = (id) => {
  let image;
  switch(id) {
    case 1:
      image = img1;
      break;
    case 2:
      image = img2;
      break;
    case 3:
      image = img3;
      break;
    case 4:
      image = img4;
      break;
    default:
      // Handle default case or throw an error if necessary
      break;
  }
  return image;
};
  // console.log(categories);
  return (
    <div className="w-fit mx-auto mt-10 text-center">
      <h1 className="mb-5 text-2xl font-bold">Job Category List</h1>
      <h3>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </h3>
      <div className="flex gap-10 mt-12">
        {categories.map((category,index) => <SingleCategory key={index} getCategoryImage={getCategoryImage} category={category}/>)}
      </div>
    </div>
  );
};

export default CategoryList;
