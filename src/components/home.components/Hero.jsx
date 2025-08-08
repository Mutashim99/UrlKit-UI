import React from "react";
import { Link, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import UrlInput from "../UrlInput";
const Hero = () => {
  return (
    <div className="text-[#C9CED6] w-full py-5 md:pt-15 px-4">
      <div className="flex flex-col items-center justify-center gap-4">
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

        <div className="w-full max-w-[634px] flex flex-col gap-4">
          <UrlInput />
        </div>
      </div>
    </div>
  );
};

export default Hero;
