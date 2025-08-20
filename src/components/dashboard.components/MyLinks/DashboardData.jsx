import React, { useEffect, useState } from "react";
import DashboardDataItem from "./DashboardDataItem";
import EditDialog from "./EditDialog";
import axios from "axios";
import LocalHistorySkeleton from "../../skeletons/LocalHistorySkeleton";
import { useDashboardStore } from "@/store/dashboard.store";
import DeleteDialog from "./DeleteDialog";

const DashboardData = () => {
  // const [urls, setUrls] = useState([]);
  // const [loadingurls, setLoadingurls] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { urls, loadingUrls, getUrls } = useDashboardStore();

  // const getUrls = async () => {
  //   setLoadingurls(true);

  //   try {
  //     const res = await axios.get("user/dashboard/urls");
  //     setUrls(res.data);
  //     console.log(res);
  //     setLoadingurls(false);
  //   } catch (e) {
  //     setLoadingurls(false);
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    getUrls();
  }, [getUrls]);

  const handleEdit = (currentUrl) => {
    setSelectedUrl(currentUrl);
    setEditOpen(true);
  };
  const handleDelete = (currentUrl) => {
    setSelectedUrl(currentUrl);
    setDeleteOpen(true);
  };
  const handleEditSave = async (newStatus) => {
    setUpdateLoading(true);
    try {
      const res = await axios.patch(`/user/dashboard/url/${selectedUrl.id}`, {
        newStatus: newStatus,
      });

      await getUrls();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    setUpdateLoading(false);
    setEditOpen(false);
  };

  const handleDeleteSave = async () => {
    setDeleteLoading(true);
    try {
      const res = await axios.delete(`/user/dashboard/url/${selectedUrl.id}`);
      console.log(res);
      await getUrls();
    } catch (e) {
      console.log(e);
    }
    setDeleteLoading(false);
    setDeleteOpen(false);
  };

  return (
    <div className="w-full py-4 px-4 md:min-h-[calc(100vh-364px)] min-h-[calc(100vh-361px)]">
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

        <div>
          {loadingUrls ? (
            <LocalHistorySkeleton />
          ) : urls.length === 0 ? (
            <p className="text-center bg-[#0e131ee0] font-medium  text-[#C9CED6] text-sm py-8">
              You haven’t created any short URLs yet. Start creating links to
              see them here.
            </p>
          ) : (
            urls.map((urls) => (
              <DashboardDataItem
                key={urls.id}
                urls={urls}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* from here we start mapping the actual data from API call
        {urls.map((urls) => (
          <DashboardDataItem key={urls.id} urls = {urls} onEdit={handleEdit}  />
        ))} */}

        <EditDialog
          updateLoading={updateLoading}
          open={editOpen}
          onClose={() => {
            setEditOpen(false);
          }}
          url={selectedUrl}
          onSave={handleEditSave}
        />

        <DeleteDialog
          deleteLoading={deleteLoading}
          open={deleteOpen}
          onClose={() => {
            setDeleteOpen(false);
          }}
          onSave={handleDeleteSave}
        />
      </div>
    </div>
  );
};

export default DashboardData;
