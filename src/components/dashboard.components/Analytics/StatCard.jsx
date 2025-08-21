import React from "react";

const StatCard = ({ icon: Icon, data }) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#181E29] border-2 border-[#353C4A] rounded-2xl px-4 py-3 w-full shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-center text-[#3B82F6] bg-[#1F2937] p-2 rounded-xl">
        <Icon size={22} />
      </div>

      <div className="ml-3 text-right">
        <p className="text-lg font-semibold text-white">{data}</p>
      </div>
    </div>
  );
};

export default StatCard;
