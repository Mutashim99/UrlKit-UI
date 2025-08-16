import React, { useState } from "react";
import { ArrowRightToLine, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/auth.store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const NavBar = () => {
  const { isAuthenticated, loading, logout, currentUser } = useAuthStore();
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleIsMobileNav = () => {
    setIsMobileNav((prev) => !prev);
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-transparent text-white w-full max-w-7xl mx-auto  py-4 box-border ">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Right */}
        <div>
          <Link to={"/"}>
            <h1
              className="md:text-4xl text-3xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #EB568E,#144EE3)",
              }}
            >
              UrlKit
            </h1>
          </Link>
        </div>
        {/* Left */}
        {loading ? (
          <div className=" hidden md:flex gap-6 animate-pulse">
            <div className="w-[123px] h-[50px] rounded-[48px] bg-gray-700"></div>
            <div className="w-[178px] h-[50px] rounded-[48px] bg-gray-700"></div>
          </div>
        ) : isAuthenticated ? (
          <div className=" gap-4 items-center justify-center hidden md:flex">
            <Link to={"/dashboard"}>
              <button
                className="w-[123px] h-[50px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer "
                style={{
                  boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                }}
              >
                dashboard
              </button>
            </Link>
            <Accordion type="single" collapsible className="relative">
              <AccordionItem value="profile">
                <AccordionTrigger className="h-auto py-2 w-[110px] gap-1 px-2 sm:min-w-[140px] bg-[#181E29] rounded-[48px] flex items-center justify-center border-2 border-[#353C4A]">
                  <div className="flex flex-col truncate px-1 max-w-[2/3]">
                    <p className="text-[10px] font-extralight">Welcome</p>
                    <p className="font-bold truncate">{currentUser.name}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className="absolute top-full mt-2 right-0 bg-[#144EE3] shadow-md rounded-md w-32 z-50 text-white"
                  style={{
                    boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                  }}
                >
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 cursor-pointer py-2 text-sm"
                  >
                    Logout
                  </button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : (
          <div className="hidden md:block">
            {" "}
            <div className="flex gap-6 ">
              {" "}
              <Link to={"/auth/login"}>
                {" "}
                <button
                  className="w-[123px] h-[50px] font-medium text-[16px] bg-[#181E29] rounded-[48px] border-2 border-[#353C4A] flex items-center justify-center gap-2 cursor-pointer"
                  style={{ boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.10)" }}
                >
                  Login
                  <span>
                    <ArrowRightToLine className="size-6 text-[#C9CED6]" />{" "}
                  </span>
                </button>
              </Link>
              <Link to={"/auth/signup"}>
                <button
                  className="w-[178px] h-[50px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer "
                  style={{
                    boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                  }}
                >
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Button toggle logic for mobile nav */}
        <div className="md:hidden " onClick={handleIsMobileNav}>
          {isMobileNav ? (
            <X className="md:size-10 size-8"></X>
          ) : (
            <Menu className="md:size-10 size-8"></Menu>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isMobileNav &&
          (isAuthenticated ? (
            // 🔹 Authenticated mobile UI goes here
            <motion.div
              className=" fixed top-20 left-0 right-0 bottom-0 flex flex-col gap-6 bg-[#0B101B] w-full h-screen px-4 py-16 z-50"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="text-white text-center flex flex-col items-center justify-center gap-6 w-full">
                <Link to={"/dashboard"}>
                  <button
                    className="w-[123px] h-[50px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer "
                    style={{
                      boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                    }}
                  >
                    dashboard
                  </button>
                </Link>
                <Accordion
                  type="single"
                  collapsible
                  className="relative w-[123px] h-[50px]"
                >
                  <AccordionItem value="profile">
                    <AccordionTrigger className="h-auto py-2 w-[110px] gap-1 px-2 sm:min-w-[140px] bg-[#181E29] rounded-[48px] flex items-center justify-center border-2 border-[#353C4A]">
                      <div className="flex flex-col truncate px-1 max-w-[2/3]">
                        <p className="text-[10px] font-extralight">Welcome</p>
                        <p className="font-bold truncate">{currentUser.name}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className="absolute top-full mt-2 right-0 bg-[#144EE3] shadow-md rounded-md w-32 z-50 text-white"
                      style={{
                        boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                      }}
                    >
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 cursor-pointer py-2 text-sm"
                      >
                        Logout
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ) : (
            // Login / Register buttons
            <motion.div
              className="fixed top-20 left-0 right-0 bottom-0 flex flex-col gap-6 bg-[#0B101B] w-full h-screen px-4 py-16 z-50"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                className="w-[123px] h-[50px] font-medium text-[16px] bg-[#181E29] rounded-[48px] border-2 border-[#353C4A] flex items-center justify-center gap-2 cursor-pointer mx-auto"
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
                className="w-[178px] h-[50px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] mx-auto border-2 border-[#144EE3] cursor-pointer "
                style={{
                  boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
                }}
              >
                Register Now
              </button>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
