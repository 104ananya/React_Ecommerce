import React from "react";
import HeroSection from "../components/HeroSection";
import { man_grp_1 } from "../assets/images";

const About = () => {
  const data = {
    title: "About Us",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus ut faucibus pulvinar elementum. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Tristique risus nec feugiat in fermentum posuere. ",
    paragraph2:
      "Auctor eu augue ut lectus arcu bibendum at varius vel. Massa id neque aliquam vestibulum morbi blandit cursus risus. ",
    buttonText: "Contact Us",
    imageUrl: man_grp_1,
    navLinkUrl: "/contact",
  };

  return (
    <main className=" relative mt-[75px]">
      <section>
        <HeroSection heroData={data} />
      </section>
    </main>
  );
};

export default About;
