import React from "react";
import DashboardDataItem from "./DashboardDataItem";

const DashboardData = () => {
  const mockLocalHistoryData = [
    {
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },{
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    }
  ];
  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid grid-cols-7 items-center text-center gap-1 bg-[#0d1117] md:h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[#0000001a]">
          <div className="w-full col-span-2">
            <p>Short Link</p>
          </div>
          <div className="w-full col-span-2">
            <p>Original Link</p>
          </div>
          <div className="w-full">
            <p>Status</p>
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
            <p className="mx-auto">Short Link</p>
          </div>
        </div>
        {mockLocalHistoryData.map((url, index) => (
          <DashboardDataItem key={index} {...url} />
        ))}
      </div>
    </div>
  );
};

export default DashboardData;
