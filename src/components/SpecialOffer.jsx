import React from "react";
import { special01, special02, special03, special04 } from "../assets/images";

const SpecialOffer = () => {
  return (

      <main className="grid grid-cols-4 gap-4 mt-5 p-8">
        <div
          className="h-48"
          style={{
            backgroundImage: `url(${special01})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pl-4">
            <p className="text-white font-bold text-xl my-4">
              Get extra 50% OFF <br /> Everyday Fresh
            </p>
            <p className="text-white font-bold my-4">New Arrival</p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${special02})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pl-4">
            <p className="text-white font-bold text-xl my-4">
              15% OFF <br /> WHOLE CAKE
            </p>
            <p className="text-white font-bold my-4">It's Time For Sweets</p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${special04})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pl-4">
            <p className="text-white font-bold text-xl my-4">
              Summer Sale <br /> Special Offer
            </p>
            <p className="text-white font-bold my-4">Up To 60% OFF</p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${special03})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pl-4">
            <p className="text-white font-bold text-xl my-4">
              Avocado <br /> Weekend
            </p>
            <p className="text-white font-bold my-4">Special 25% OFF</p>
          </div>
        </div>
      </main>

  );
};

export default SpecialOffer;
