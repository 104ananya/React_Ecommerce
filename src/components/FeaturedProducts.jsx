import React from "react";
import { useProductContext } from "../context/productcontext";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  
  // console.log(featureProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (


    <div>
    <h2 className="text-4xl font-bold mb-4">Best Sellers</h2>
    <p className="text-lg text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
      congue eros
    </p>
    <div className="grid grid-cols-3 gap-6">
      {featureProducts.map((curElem) => {
        return <ProductCard key={curElem.id} {...curElem}/>
      })}
    </div>
  </div>

  );
};

export default FeaturedProducts;
