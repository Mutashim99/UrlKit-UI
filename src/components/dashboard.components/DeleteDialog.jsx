import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderCircle } from "lucide-react";

const DeleteDialog = ({ open, onClose, onSave, deleteLoading }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className={""}>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your URL
            and remove your URL data from our servers.
          </DialogDescription>

          <div className="space-y-4 mt-4">
            { deleteLoading ? <button disabled={deleteLoading} className="w-full rounded-md bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center">
                <LoaderCircle className="text-center animate-spin" />
            </button> :
            <button
              onClick={onSave}
              className="w-full rounded-md bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Yes, Delete
            </button>}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
