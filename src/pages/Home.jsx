import React from "react";
import HeroSection from "../components/HeroSection";
import { laptops } from "../assets/images";
import Services from "../components/Services";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import SpecialOffer from './../components/SpecialOffer';
import Collection from "../components/Collection";

const Home = () => {
  const data = {
    title: "Introducing the New Dell Laptop Series",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Shop Now",
    imageUrl: laptops,
    navLinkUrl: "/products",
  };

  return (
    <main className="relative mt-[75px]">
      <section>
        <HeroSection heroData={data} />
      </section>
      <section className="padding-x py-12"><FeaturedProducts/></section>
      <section className="padding-x"><Collection/></section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding-x"><Brands/></section>
      <section className="padding-x"><SpecialOffer/></section>
      <section className="padding-x "><Newsletter/></section>
      
    </main>
  );
};

export default Home;
