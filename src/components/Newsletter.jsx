import React from "react";
import { newletter, paperplane } from "../assets/images";

const Newsletter = () => {
  return (
    <main className="bg-gray-200 flex flex-col justify-center items-center pt-4 pb-8" style={{
        backgroundImage: `url(${paperplane})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat"
      }}>
      <p className="text-4xl font-bold my-4">Subscribe</p>
      <div className="w-44 border-t-2 border-black"></div>
      <p className="text-lg my-5">
        Subscribe our newsletter to stay updated every moment
      </p>

      <form action="https://formspree.io/f/xrbzzood" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your valid email address"
          className="w-96 px-3 py-2  mx-4"
          required
        />
        <button
          type="submit"
          value="submit"
          className=" bg-[#F1C8B2] hover:bg-coral-red font-medium px-4 py-2"
        >
          Subscribe
        </button>
      </form>
    </main>
  );
};

export default Newsletter;
