import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UrlInput from "../UrlInput";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/auth.store";

const DashboardNav = () => {
  const { loading, logout, currentUser } = useAuthStore();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/auth/login")
  };
  return (
    <div className="relative flex flex-col gap-4 sm:gap-0 ">
      {/* uppar ayega ye dono mein: Logo and Button */}
      <div className="flex w-full items-center justify-between">
        <div className="text-xl font-bold">
          <h1
            className="md:text-4xl text-3xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #EB568E,#144EE3)",
            }}
          >
            UrlKit
          </h1>
        </div>
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
              <button onClick={()=>handleLogout()} className="block w-full text-left px-4 cursor-pointer py-2 text-sm">
                Logout
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* neche ayega ye dono mein: always below */}
      <div className="text-white w-full flex flex-col gap-2 sm:w-[50%] sm:mx-auto">
        <UrlInput />
      </div>
    </div>
  );
};

export default DashboardNav;
