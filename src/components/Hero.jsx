import React from "react";
import { Link, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
const Hero = () => {
  return (
    <div className="text-[#C9CED6] w-full py-5 md:py-15 px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-[800] text-center  py-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, #144EE3, #EB568E, #A353AA, #144EE3)",
          }}
        >
          Shorten Your Loooong Links :)
        </h1>
        <p className="text-[16px] md:text-[18px] font-light max-w-[634px] text-center leading-relaxed text-[#C9CED6]">
          UrlKit is your intelligent link companion — combining lightning-fast
          URL shortening with the power of AI to Secure, Manage, and Optimize
          your links effortlessly.
        </p>
        <div className=" flex p-[3px] rounded-[48px] items-center justify-center  bg-[#181E29] md:w-2xl border-4 border-[#353C4A]">
          <Link className="size-8 ml-3" />
          <input
            placeholder="Enter you Loooong Link here"
            type="url"
            className="outline-0 w-full px-6 "
          />
          <button
            className="md:w-[178px] w-20 h-[40px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer "
            style={{
              boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
            }}
          >
            <span className="hidden md:inline ">Shorten Now!</span>
            <span className="md:hidden flex items-center justify-center ">
              <ArrowRight className="text-center" />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4 font-medium tex-[#C9CED6] leading-normal">
          <Switch />
          <span>Use Custom Slug / Alias </span>
        </div>
        <div className="flex rounded-[48px] items-center justify-center h-10 bg-[#181E29] md:w-2xl border-4 border-[#353C4A]">
            <h3 className="w-1/2 text-center font-medium text-sm md:text-[16px] h-full rounded-l-[48px] flex items-center justify-center bg-[#353C4A]">https://mysite.com/</h3>
          <input type="text" placeholder="Enter your Slug/Alias Here" className="outline-0 w-1/2 px-2 h-full  text-sm md:text-[16px]"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
