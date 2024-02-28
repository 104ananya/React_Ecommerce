import React from "react";
import ProductCard from "./ProductCard";

const GridView = ({ products }) => {
  return (
    <main className="flex flex-wrap">
      {products.map((Item) => {
        return (
          <div key={Item.id} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductCard {...Item} />
          </div>
        );
      })}
    </main>
  );
};

export default GridView;
