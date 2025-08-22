import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Trash2, User, Lock, Loader2 } from "lucide-react";
import axios from "axios";
import useAuthStore from "@/store/auth.store";
import { toast } from "sonner"; 

const Settings = () => {
  const [newUserName, setNewUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [openUsername, setOpenUsername] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const { accountDelete } = useAuthStore();

  const handleUserNameEdit = async (e) => {
    e.preventDefault();
    setLoadingResponse(true);
    try {
      await axios.patch("/user/dashboard/me/username", {
        newUserName: newUserName,
      });
      toast.success("Username updated successfully");
      setOpenUsername(false);
    } catch (e) {
      console.log(e);
      toast.error("Failed to update username");
    }
    setLoadingResponse(false);
  };

  const handlePasswordEdit = async (e) => {
    e.preventDefault();
    setLoadingResponse(true);
    try {
      await axios.patch("/user/dashboard/me/password", {
        currentPassword: currentPassword,
        newPassword: newPassword,
      });
      toast.success("Password updated successfully");
      setOpenPassword(false);
    } catch (e) {
      console.log(e);
      toast.error("Failed to update password");
    }
    setLoadingResponse(false);
  };

  const handleAccountDelete = async () => {
    setLoadingResponse(true);
    try {
      await accountDelete();
      toast.success("Account deleted permanently");
      setOpenDelete(false);
    } catch (e) {
      console.log(e);
      toast.error("Failed to delete account ");
    } finally {
      setLoadingResponse(false);
    }
  };

  return (
    <div className="w-full py-4 px-4 md:min-h-[calc(100vh-364px)] min-h-[calc(100vh-361px)]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white">Account Settings</h1>
          <p className="text-gray-400 text-sm">
            Manage your profile details, password and account preferences.
          </p>
        </div>

        <div className="bg-[#181E29] border border-[#2A3140] rounded-2xl shadow-lg divide-y divide-[#2A3140]">
          {/* Username */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#0F1623] p-3 rounded-md">
                <User className="w-5 h-5 text-[#1f6feb]" />
              </div>
              <div>
                <p className="text-white font-medium">Username</p>
                <p className="text-gray-400 text-sm">
                  Update your display name
                </p>
              </div>
            </div>
            <Dialog open={openUsername} onOpenChange={setOpenUsername}>
              <DialogTrigger className="text-sm px-4 py-2 rounded-md bg-[#1f6feb] hover:bg-[#2563eb] text-white transition">
                Change
              </DialogTrigger>
              <DialogContent className="bg-[#181E29] border border-[#2A3140] text-white rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Change Username</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Enter your new username and save changes.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4" onSubmit={handleUserNameEdit}>
                  <input
                    type="text"
                    placeholder="New username"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] border border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] outline-0 "
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-[#1f6feb] hover:bg-[#2563eb] text-white py-2 rounded-md font-medium transition"
                    type="submit"
                    disabled={loadingResponse}
                  >
                    {loadingResponse && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    Save
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#0F1623] p-3 rounded-md">
                <Lock className="w-5 h-5 text-[#1f6feb]" />
              </div>
              <div>
                <p className="text-white font-medium">Password</p>
                <p className="text-gray-400 text-sm">
                  Change your account password
                </p>
              </div>
            </div>
            <Dialog open={openPassword} onOpenChange={setOpenPassword}>
              <DialogTrigger className="text-sm px-4 py-2 rounded-md bg-[#1f6feb] hover:bg-[#2563eb] text-white transition">
                Update
              </DialogTrigger>
              <DialogContent className="bg-[#181E29] border border-[#2A3140] text-white rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Update your password by entering your current and new
                    password.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4" onSubmit={handlePasswordEdit}>
                  <input
                    type="password"
                    placeholder="Enter Current password"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] border border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] outline-0 "
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter New password"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] outline-0 border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb]"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-[#1f6feb] hover:bg-[#2563eb] text-white py-2 rounded-md font-medium transition"
                    type="submit"
                    disabled={loadingResponse}
                  >
                    {loadingResponse && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    Save
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-[#181E29] border border-[#2A3140] rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-red-400 flex items-center gap-2">
            <Trash2 className="w-5 h-5" /> Danger Zone
          </h2>
          <p className="text-sm text-gray-400 mt-2 mb-4">
            Deleting your account will remove all your data permanently. This
            action cannot be undone.
          </p>
          <Dialog open={openDelete} onOpenChange={setOpenDelete}>
            <DialogTrigger className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
              Delete Account
            </DialogTrigger>
            <DialogContent className="bg-[#181E29] border border-[#2A3140] text-white rounded-2xl">
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogDescription className="text-gray-400 text-sm">
                  This action cannot be undone. Deleting your account will erase
                  all data permanently.
                </DialogDescription>
              </DialogHeader>

              <div className="flex justify-center md:justify-end gap-3 mt-6">
                <button
                  className="px-4 py-2 flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition"
                  onClick={handleAccountDelete}
                  disabled={loadingResponse}
                >
                  {loadingResponse && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  Delete
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Settings;
