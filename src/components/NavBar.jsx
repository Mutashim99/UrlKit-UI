import React, { useState } from "react";
import { ArrowRightToLine, Menu, X } from "lucide-react";
const NavBar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleIsMobileNav = ()=>{
    setIsMobileNav(!isMobileNav)
  }
  return (
    <div className="bg-transparent text-white w-full max-w-7xl mx-auto px-4 py-8 box-border ">
      <div className="flex items-center justify-between h-16">
        {/* Right */}
        <div>
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #EB568E,#144EE3)",
            }}
          >
            UrlKit
          </h1>
        </div>
        {/* Left */}
        <div className="hidden md:block">
          <div className="flex gap-6 ">
            <button
              className="w-[123px] h-[50px] font-medium text-[16px] bg-[#181E29] rounded-[48px] border-2 border-[#353C4A] flex items-center justify-center gap-2 cursor-pointer"
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              Login{" "}
              <span>
                <ArrowRightToLine className="size-6 text-[#C9CED6]" />
              </span>
            </button>
            <button
              className="w-[178px] h-[50px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer "
              style={{
                boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
              }}
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Button toggle logic for mobile nav */}
        <div className="md:hidden " onClick={handleIsMobileNav}>
          {isMobileNav ? (
            <Menu className="size-10"></Menu>
          ) : (
            <X className="size-10"></X>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
