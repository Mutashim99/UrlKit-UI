import DashboardNav from "@/components/dashboard.components/DashboardNav";
import React from "react";
import cubes from "../assets/Cubes.png";
import swirl from "../assets/Swirl.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, ChartNoAxesCombined, Link } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#151A24] h-screen text-[#C9CED6] relative flex flex-col">
      <div
        className="absolute top-0 left-0 w-full z-0 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${swirl})` }}
      ></div>

      <div
        className="hidden md:block md:absolute md:top-0 md:left-0 h-full w-full z-10 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${cubes})` }}
      ></div>

      <div className="w-full relative z-20 h-64 bg-[#0b101b77] ">
        <div className="max-w-7xl mx-auto px-4 py-6 ">
          <DashboardNav />
        </div>
      </div>

      <div className="w-full mt-16 sm:mt-0">
        <Tabs defaultValue="My Links" className="w-full">
          <div className="w-full relative z-20 bg-[#181E29]  flex items-center justify-center">
            <TabsList className="flex gap-6  bg-transparent sm:h-[60px] h-[45px]">
              <TabsTrigger
                value="My Links"
                className="relative px-4 py-2 text-sm font-bold bg-transparent text-gray-400 data-[state=active]:text-gray-400 data-[state=active]:bg-transparent
                   transition-colors duration-200 
                   after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                   after:bg-[#144EE3] after:scale-x-0 
                   data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                <Link />
                My Links
              </TabsTrigger>
              <TabsTrigger
                value="Analytics"
                className="relative px-4 py-2 text-sm font-bold bg-transparent text-gray-400 data-[state=active]:text-gray-400 data-[state=active]:bg-transparent
                   transition-colors duration-200 
                   after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                   after:bg-[#144EE3] after:scale-x-0 
                   data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                <ChartNoAxesCombined />
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="Settings"
                className="relative px-4 py-2 text-sm font-bold bg-transparent text-gray-400 data-[state=active]:text-gray-400 data-[state=active]:bg-transparent
                   transition-colors duration-200 
                   after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                   after:bg-[#144EE3] after:scale-x-0 
                   data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                <Settings />
                Settings
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="My Links">LINKS HERE</TabsContent>
          <TabsContent value="Analytics">ANALYTICS HERE</TabsContent>
          <TabsContent value="Settings">SETTINGS HERE HERE</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
