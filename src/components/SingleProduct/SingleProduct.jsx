import React from "react";
import { formatMillions } from "../../utilities/Utilities";
import { Download } from 'lucide-react';
import { FaStar } from "react-icons/fa";

const SingleProduct = ({ product }) => {
  
const {downloads,title,description,image,ratingAvg} = product;
  return (
    <div>
      {downloads> 300000 && (
        <div>
      <div>
        <div className="card bg-base-100 w-96 h-96 shadow-lg">
          <figure className="w-8/12 mx-auto">
            <img 
            className="w-full h-full  object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
             
            </h2>
            <p className="text-sm text-gray-600 font-sans">
              {description}
            </p>
            <div className="card-actions flex justify-between">
              <div className="flex gap-1 text-blue-500 font-bold shadow-lg"> <Download  className="text-blue-500 size-5"/>{formatMillions(downloads)}</div>
              <div className="badge shadow-lg"> <FaStar className="text-yellow-400" />{ratingAvg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default SingleProduct;
