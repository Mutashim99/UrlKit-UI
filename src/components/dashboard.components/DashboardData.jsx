import React, { useState } from "react";
import DashboardDataItem from "./DashboardDataItem";
import EditDialog from "./EditDialog";

const DashboardData = () => {
  const [urls, setUrls] = useState([
    {
      id: "1a2b3c4d",
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      id: "5e6f7g8h",
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      id: "9i0j1k2l",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "3m4n5o6p",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "7q8r9s0t",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "1u2v3w4x",
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      id: "5y6z7a8b",
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      id: "9c0d1e2f",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "3g4h5i6j",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "7k8l9m0n",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "1o2p3q4r",
      shortUrl: "https://my.site/abc123",
      originalUrl: "https://daraz.pk/article/how-to-code",
      clicks: 15,
      status: "Active",
      createdAt: "2025-08-04T10:32:00.000Z",
    },
    {
      id: "5s6t7u8v",
      shortUrl: "https://my.site/xyz789",
      originalUrl:
        "https://youtube.com/watch?v=dQw4w9WgXcQafagasgasgagasgsagasgsagqwygqdsgsahy",
      clicks: 102,
      status: "Expired",
      createdAt: "2025-07-28T08:15:45.000Z",
    },
    {
      id: "9w0x1y2z",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://github.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "3a4b5c6d",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://facebook.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
    {
      id: "7e8f9g0h",
      shortUrl: "https://my.site/test456",
      originalUrl: "https://google.com/mutashimdev/url-shortener",
      clicks: 0,
      status: "Active",
      createdAt: "2025-08-06T14:45:30.000Z",
    },
  ]);

  const [editOpen, setEditOpen] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState(null)

  const handleEdit = (currentUrl) =>{
    setSelectedUrl(currentUrl)
    setEditOpen(true)
  }
  const handleSave = (newStatus)=>{
    setUrls((prev) =>
        prev.map((u) =>
          u.id === selectedUrl.id ? { ...u, status: newStatus } : u
        )
      );
    setEditOpen(false)
  }

  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">

        {/* heading for pc */}
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
        {/* heading for mobile */}
        <div className="mx-auto md:hidden">
          <div className=" bg-[#0D1117] h-[55px] text-[15px] font-bold text-[#C9CED6] rounded-t-xl shadow-2xl shadow-[#0000001a] flex items-center ">
            <p className="mx-auto">Short Link</p>
          </div>
        </div>


        {/* from here we start mapping the actual data from API call */}
        {urls.map((urls) => (
          <DashboardDataItem key={urls.id} urls = {urls} onEdit={handleEdit}  />
        ))}

        <EditDialog open={editOpen} onClose={()=>{setEditOpen(false)}} url={selectedUrl} onSave={handleSave}/>
      </div>
    </div>
  );
};

export default DashboardData;
