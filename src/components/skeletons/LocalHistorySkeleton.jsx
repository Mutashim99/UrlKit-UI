import React from "react";

const LocalHistorySkeleton = () => {
  const skeletonRows = Array.from({ length: 4 });

  return (
    <div className="w-full animate-pulse">
      {skeletonRows.map((_, idx) => (
        <div key={idx}>
          <div className="hidden md:grid grid-cols-7 md:items-center text-center gap-1 bg-[#181e2938] backdrop-blur-[28px] md:h-[55px] md:text-[15px] font-light text-[#C9CED6] md:mt-1 shadow-2xl shadow-[#0000001a] px-2">
            <div className="w-full flex items-center justify-center gap-2 col-span-2 overflow-hidden">
              <div className="h-4 w-24 bg-[#2a2f3d] rounded"></div>
              <div className="bg-[#1c283fb0] size-9 rounded-full"></div>
            </div>

            <div className="w-full col-span-2 flex items-center gap-3 text-start overflow-hidden">
              <div className="size-7 bg-[#2a2f3d] rounded"></div>
              <div className="h-4 w-40 bg-[#2a2f3d] rounded"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="h-4 w-8 bg-[#2a2f3d] rounded"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="h-4 w-16 bg-[#2a2f3d] rounded"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="h-4 w-24 bg-[#2a2f3d] rounded"></div>
            </div>
          </div>

          <div className="md:hidden bg-[#181e2938] backdrop-blur-[28px] h-[63px] text-[14px] text-[#C9CED6] mt-1 shadow-2xl shadow-[#0000001a] py-6 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-grow">
              <div className="h-4 w-28 bg-[#2a2f3d] rounded"></div>
              <div className="bg-[#1c283fb0] size-6 rounded-full"></div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-y-2 px-4 py-3 text-sm">
            <p className="h-4 w-24 bg-[#2a2f3d] rounded col-span-1"></p>
            <div className="flex items-center col-span-1 gap-2">
              <div className="size-5 bg-[#2a2f3d] rounded"></div>
              <div className="h-4 w-32 bg-[#2a2f3d] rounded"></div>
            </div>

            <p className="h-4 w-20 bg-[#2a2f3d] rounded"></p>
            <div className="h-4 w-12 bg-[#2a2f3d] rounded"></div>

            <p className="h-4 w-20 bg-[#2a2f3d] rounded"></p>
            <div className="h-4 w-16 bg-[#2a2f3d] rounded"></div>

            <p className="h-4 w-24 bg-[#2a2f3d] rounded"></p>
            <div className="h-4 w-28 bg-[#2a2f3d] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocalHistorySkeleton;
