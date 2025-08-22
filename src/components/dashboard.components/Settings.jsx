import React,{useState,useEffect} from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Trash2, User, Lock } from "lucide-react";

const Settings = () => {
  const [newUserName, setNewUserName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [loadingResponse, setLoadingResponse] = useState(false)

  const handleUserNameEdit = () =>{

  }
  const handlePasswordEdit = () =>{

  }
  const handleAccountDelete = () =>{

  }
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
            <Dialog>
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
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="New username"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] border border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] outline-0 "
                  />
                  <button className="w-full bg-[#1f6feb] hover:bg-[#2563eb] text-white py-2 rounded-md font-medium transition">
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
            <Dialog>
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
                <form className="space-y-4 mt-4">
                  <input
                    type="password"
                    placeholder="Current password"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] border border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] outline-0 "
                  />
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full px-4 py-2 rounded-md bg-[#0F1623] outline-0 border-[#2A3140] text-white placeholder-gray-500 focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb]"
                  />
                  <button className="w-full bg-[#1f6feb] hover:bg-[#2563eb] text-white py-2 rounded-md font-medium transition">
                    Save
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="bg-[#181E29] border border-[#2A3140] rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-red-400 flex items-center gap-2">
            <Trash2 className="w-5 h-5" /> Danger Zone
          </h2>
          <p className="text-sm text-gray-400 mt-2 mb-4">
            Deleting your account will remove all your data permanently. This
            action cannot be undone.
          </p>
          <Dialog>
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
                <button className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition">
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
