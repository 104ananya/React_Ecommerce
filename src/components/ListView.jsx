import React from "react";
import FormatPrice from "../helper/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <main className="w-full padding-x">
      {products.map((Item) => {
        const { id, name, company, price, description, image } = Item;

        return (
          <div key={Item.id} className="grid grid-cols-3 gap-4 p-2">
            {/* Image  */}
            <div className="col-span-1">
              <img src={image} alt={name} />
            </div>

            {/* Details  */}
            <div className="col-span-2 p-4 pt-0">
              <p className="capitalize font-semibold">{name}</p>
              <p className="text-sm uppercase my-2 text-zinc-700">{company}</p>
              <p className="text-gray-500">{description.slice(0, 149)}...</p>
              <div className="w-full flex justify-between my-5">
                <div className="text-zinc-500 font-semibold">
                  <FormatPrice price={price} />
                </div>

                <NavLink to={`/singleproduct/${id}`}>
                  <button className="uppercase text-sm border-2 text-zinc-600 border-coral-red px-4 py-2 hover:bg-coral-red hover:text-white">
                    Read More
                  </button>
                </NavLink>

              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ListView;
