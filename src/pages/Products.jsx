import React from "react";
import { useProductContext } from "../context/productcontext";

const Products = () => {
  // const {name} = useContext(AppContext);
  const {name} = useProductContext();



  return (
    <div >
      <p>Name: {name}</p>
      <div>Products</div>
    </div>
  );
};

export default Products;
