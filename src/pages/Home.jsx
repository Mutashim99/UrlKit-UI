import React from "react";
import cubes from "../assets/Cubes.png";
import swirl from "../assets/Swirl.png";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] relative">
      <div
        className="absolute top-0 left-0 w-full z-0 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${swirl})` }}
      ></div>

      <div
        className="hidden md:block md:absolute md:top-0 md:left-0 h-full w-full z-10 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${cubes})` }}
      ></div>
      {/* from here start all the components uses z-20 to be at the top of the images swirl and cubes and it will start from top cause the previous ones are absolute positioned */}
      <div className="relative z-20">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
