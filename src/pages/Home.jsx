import React,{useEffect} from "react";
import cubes from "../assets/Cubes.png";
import swirl from "../assets/Swirl.png";
import NavBar from "@/components/home.components/NavBar";
import Hero from "@/components/home.components/Hero";
import LocalHistory from "@/components/home.components/LocalHistory";
import useAuthStore from "@/store/auth.store";
import { Link } from "react-router-dom";

const Home = () => {
  

  const { isAuthenticated ,loading} = useAuthStore();
  useEffect(() => {
    if (!isAuthenticated) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAuthenticated]);
  return (
    // <div
    //   className={`w-full bg-[#0B101B] ${
    //     !isAuthenticated ? "h-screen" : ""
    //   } text-[#C9CED6] relative flex flex-col`}
    // >
    <div className="w-full min-h-screen bg-[#0B101B] text-[#C9CED6] relative flex flex-col">
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
      <div
        className={`relative z-20 flex-1 ${
          !isAuthenticated ? "overflow-hidden" : ""
        }`}
      >
        <LocalHistory />
      </div>
      {!isAuthenticated && (
        <div className="z-30 w-full fixed bottom-0">
          <div
            className="max-w-7xl mx-auto h-16 backdrop-blur-sm"
            style={{
              background: "linear-gradient(360deg, #0b101b00, #0b101b91)",
            }}
          />
        </div>
      )}
      {loading ? "" : !isAuthenticated && (
        <div className="z-40 fixed bottom-0 w-full ">
          <div className="max-w-7xl mx-auto h-16 flex items-center justify-center">
            <p className="text-[#C9CED6] text-sm font-light">
              <span className="text-[#144EE3] underline ">
                <Link to={"auth/signup"}>Register Now</Link>
              </span>{" "}
              to enjoy Unlimited History
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
