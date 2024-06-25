import React from "react";
import { collection01, collection02 } from "../assets/images";

const Collection = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 mt-5 p-8">
        <div
          className="h-48"
          style={{
            backgroundImage: `url(${collection02})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-48"
          style={{
            backgroundImage: `url(${collection01})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Collection;
