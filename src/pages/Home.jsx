import React from "react";
import HeroSection from "../components/HeroSection";
import { laptops } from "../assets/images";

const Home = () => {
  const data = {
    title: "Introducing the New Dell Laptop Series",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Shop Now",
    imageUrl: laptops, 
    navLinkUrl: "/products", 
  };

  return (
    <main className="relative mt-[75px]">
      <section className=" h-full">
        <HeroSection heroData={data} />
      </section>
      <section className="padding">Popular Products</section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">Special Offers</section>
      <section className="bg-pale-blue padding">Customer reviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className=" bg-black padding-x padding-t pb-8">Footer</section>
    </main>
  );
};

export default Home;
