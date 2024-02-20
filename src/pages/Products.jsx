import React from "react";
import { useProductContext } from "../context/productcontext";

const Products = () => {
  // const {name} = useContext(AppContext);
  const {name} = useProductContext();



  return (
    <div className="mt-[75px]">
      <p>Name: {name}</p>
      <div>Products</div>
    </div>
  );
};

export default Products;
