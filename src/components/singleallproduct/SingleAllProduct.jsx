import React from "react";
import { formatMillions } from "../../utilities/Utilities";
import { Download } from 'lucide-react';
const SingleAllProduct = ({ product }) => {

    //console.log(product);

    const {downloads,ratingAvg,image,title}= product;

   console.log(downloads,ratingAvg,image);
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
             
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions flex justify-between">
              <div className="flex gap-1"> <Download  className="text-purple-600" />{formatMillions(downloads)}</div>
              <div className="badge badge-outline">{ratingAvg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAllProduct;
