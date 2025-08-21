import React,{useState,useEffect} from "react";

import { useDashboardStore } from "@/store/dashboard.store";
import AnalyticsDataItem from "./AnalyticsDataItem";
import LocalHistorySkeleton from "../../skeletons/LocalHistorySkeleton";
import StatCard from "./StatCard";
import {MousePointerClick,Link,TrendingUp} from 'lucide-react'
const AnalyticsData = () => {
  const { urls, loadingUrls, getUrls } = useDashboardStore();
    useEffect(() => {
      getUrls();
    }, [getUrls]);

  const mostClicked = urls.reduce((max, item) => 
  item.clickCount > max.clickCount ? item : max, urls[0]
);

  return (
    <div className="w-full py-4 px-4 md:min-h-[calc(100vh-364px)] min-h-[calc(100vh-361px)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 grid-cols-1 mb-4 place-items-center"> 
        <StatCard icon={MousePointerClick} data={`Total Clicks: ${urls.reduce((sum, item) => sum + item.clickCount, 0)}`} />
        <StatCard icon={TrendingUp} data={`Most Clicked: ${mostClicked?.shortSlug || "N/A"}`} />
        <StatCard icon={Link} data={`Total Links: ${urls.length}`} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid grid-cols-7 items-center text-center gap-1 bg-[#0d1117] md:h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[#0000001a]">
          <div className="w-full col-span-2">
            <p>Short Link</p>
          </div>
          <div className="w-full col-span-2">
            <p>Original Link</p>
          </div>
          <div className="w-full">
            <p>Clicks </p>
          </div>
          <div className="w-full">
            <p>Created At</p>
          </div>
          <div className="w-full">
            <p>Action</p>
          </div>
        </div>

        <div className="mx-auto md:hidden">
          <div className=" bg-[#0D1117] h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[#0000001a] flex items-center ">
            <p className="mx-auto">Urls</p>
          </div>
        </div>

        {loadingUrls ? (
            <LocalHistorySkeleton />
          ) : urls.length === 0 ? (
            <p className="text-center bg-[#0e131ee0] font-medium  text-[#C9CED6] text-sm py-8">
              You haven’t created any short URLs yet. Once created, you'll see their analytics here.
            </p>
          ) : 
        (urls.map((urls)=> (
          <AnalyticsDataItem key={urls.id} urls={urls} />
        )))}
      </div>
    </div>
  );
};

export default AnalyticsData;
