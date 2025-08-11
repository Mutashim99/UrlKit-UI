import React,{useState,useEffect} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const EditDialog = ({open,onClose,url,onSave}) => {

    const [status, setStatus] = useState("")

    useEffect(() => {
      if(url) setStatus(url.status)
    }, [url])
    
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#181E29] text-white border border-[#353C4A]">
        <DialogHeader>
          <DialogTitle>Edit URL Status</DialogTitle>
          <DialogDescription className="text-gray-400">
            Change the status of this URL and save your changes.
          </DialogDescription>
        </DialogHeader>

        {/* Dropdown value={status} onValueChange={setStatus} */}
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full bg-[#0F1622] border border-[#353C4A] text-white">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent className="bg-[#0F1622] text-white border border-[#353C4A]">
            <SelectItem value="ACTIVE">ACTIVE</SelectItem>
            <SelectItem value="EXPIRED">EXPIRED</SelectItem>
            <SelectItem value="PAUSED">PAUSED</SelectItem>
            <SelectItem value="BANNED">BANNED</SelectItem>
          </SelectContent>
        </Select>

        {/* Save Button */}
        <div className="space-y-4 mt-4">
          <button onClick={()=>{onSave(status)}} className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm   font-medium transition-colors">
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
