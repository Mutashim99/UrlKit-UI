import React from "react";

const Skeleton = ({ className }) => (
  <div
    className={`
      bg-gray-700
      rounded-md animate-pulse
      ${className}
    `}
  />
);

const DashboardSkeleton = () => {
  return (
    <div className="p-6 space-y-6 w-full h-screen bg-gray-800">
      {/* Header */}
      <Skeleton className="h-8 w-1/4" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Skeleton key={idx} className="h-24 w-full" />
        ))}
      </div>

      {/* Table / List Section */}
      <div className="bg-gray-800 rounded-xl shadow p-4">
        <Skeleton className="h-6 w-1/5 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Skeleton key={idx} className="h-10 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
