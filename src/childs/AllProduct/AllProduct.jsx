import React, { Suspense,  useContext } from "react";
import { AppContext } from "../../main";
import Allproduct from "../../components/allproducts/Allproduct";
import Loading from "../../components/loading/Loading";

const AllProduct = () => {
  const promise = useContext(AppContext);

  

  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <Allproduct promise={promise}></Allproduct>
      </Suspense>
    </div>
  );
};

export default AllProduct;
