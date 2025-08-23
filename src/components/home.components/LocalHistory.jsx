import React, { useState, useEffect } from "react";
import LocalHistoryItems from "./LocalHistoryItems";
import { useSlugStore } from "@/store/slug.store";
import axios from "axios";
import LocalHistorySkeleton from "../skeletons/LocalHistorySkeleton";
import useAuthStore from "@/store/auth.store";

const LocalHistory = () => {
  const [loadinglocalhistory, setLoadinglocalhistory] = useState(false)
  const [localHistoryData, setlocalHistoryData] = useState([]);
  const { isAuthenticated ,loading} = useAuthStore();

  const slugs = useSlugStore((state) => state.slugs);
  const getLocalHistory = async () => {
    setLoadinglocalhistory(true)
    try {
      const res = await axios.post("/url/history/local", { slugs: slugs });
      setlocalHistoryData(res.data);
      setLoadinglocalhistory(false)
    } catch (e) {
      setLoadinglocalhistory(false)
    }
  };
  useEffect(() => {
    if (slugs.length > 0) {
      getLocalHistory();
    }
  }, [slugs]);

  const visibleHistory = !isAuthenticated
    ? localHistoryData.slice(-5)
    : localHistoryData;

  return (
    <div className="w-full md:py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid grid-cols-7 items-center text-center gap-1 bg-[#181E29] md:h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[##0000001a]">
          <div className="w-full col-span-2">
            <p>Short Link</p>
          </div>
          <div className="w-full col-span-2">
            <p>Original Link</p>
          </div>
          <div className="w-full">
            <p>Clicks</p>
          </div>
          <div className="w-full">
            <p>Status</p>
          </div>
          <div className="w-full">
            <p>Created At</p>
          </div>
        </div>

        <div className="mx-auto md:hidden">
          <div className=" bg-[#181E29] h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[##0000001a] flex items-center ">
            <p className="mx-auto">Short Link</p>
          </div>
        </div>
        <div>
          {loadinglocalhistory ? <LocalHistorySkeleton /> : localHistoryData.length === 0 ? (
            <p className="text-center bg-[#0e131ee0] font-medium  text-[#C9CED6] text-sm py-8">
              You haven’t created any Free short URLs yet. Start creating Free Shorten links to see your history here. No login is required!
            </p>
          ) : (
            visibleHistory.map((url, index) => (
              <LocalHistoryItems key={index} {...url} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalHistory;
