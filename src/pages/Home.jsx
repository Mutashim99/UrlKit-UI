import React from "react";
import cubes from "../assets/Cubes.png";
import swirl from "../assets/Swirl.png";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] relative">
      <img
        className="absolute top-0 left-0 w-full z-0 h-screen object-cover"
        src={swirl}
        alt="swirl"
      />
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-full w-full z-10 object-contain "
        src={cubes}
        alt="cubes"
      />
        {/* from here start all the components used z-20 to be at the top of the images swirl and cubes and it will start from top cause the previous ones are absolute positioned */}
      <div className="relative z-20">
            <NavBar />
      </div>
    </div>
  );
};

export default Home;
