import React from 'react';

const SingleCategory = ({getCategoryImage,category}) => {
    return (
        <div>
            <div className="p-5 bg-slate-100 rounded-lg">
                <img
                  className="mb-9 w-fit"
                  src={getCategoryImage(category.id)}
                  alt=""
                />
                <h2 className="font-bold text-xl mb-3">
                  {category.category_name}
                </h2>
                <h3 className="text-left">{category.availability}</h3>
              </div>
        </div>
    );
};

export default SingleCategory;