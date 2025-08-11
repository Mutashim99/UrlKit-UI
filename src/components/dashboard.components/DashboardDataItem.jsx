import React, { useState } from "react";
import { Copy, Check, Trash, Pencil } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DashboardDataItem = ({
  urls,
  onEdit
}) => {
  const [copied, setCopied] = useState(false);
  const domain = new URL(urls.originalUrl).hostname;
  const iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(urls.shortUrl);
      setCopied(true);
      toast.success("Copied URL to clipboard!");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (e) {
      console.log(e, "cant copy the text ", urls.shortUrl);
    }
  };
  return (
    <>
      <div className="hidden md:grid grid-cols-7 md:items-center text-center gap-1 bg-[#11151D] backdrop-blur-[28px] md:h-[55px] md:text-[15px] font-light text-[#C9CED6] md:mt-1 shadow-2xl shadow-[#0000001a] px-2">
        <div className="w-full flex items-center justify-center gap-2 col-span-2 overflow-hidden ">
          <p>{urls.shortUrl}</p>

          <button
            onClick={handleCopy}
            className="bg-[#1c283fb0] size-9 flex items-center justify-center rounded-full"
          >
            {copied ? (
              <Check className="size-5 cursor-pointer  text-[#C9CED6]" />
            ) : (
              <Copy className="size-5 cursor-pointer  text-[#C9CED6]" />
            )}
          </button>
        </div>
        <div className="w-full  col-span-2 flex items-center gap-3 text-start overflow-hidden">
          <div>
            <img src={iconUrl} alt="siteIcon" className="size-7" />
          </div>
          <p className="text-start w-full truncate  ">{urls.originalUrl}</p>
        </div>
        <div className="w-full">
          <p>{urls.status}</p>
        </div>
        <div className="w-full">
          <p>{new Date(urls.createdAt).toLocaleString()}</p>
        </div>
        <div className="w-full flex gap-2 items-center justify-center">
          {/* Edit(pencil) popup dialog modal */}

          <Pencil onClick={()=>{onEdit(urls)}} className="h-4 w-4" />

          {/* Delete popup dialog modal */}
          {/* <Dialog>
            <DialogTrigger>
              <Trash className="h-4 w-4" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className={""}>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your URL and remove your URL data from our servers.
                </DialogDescription>

                <div className="space-y-4 mt-4">
                  <button className="w-full rounded-md bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium transition-colors">
                    Yes, Delete
                  </button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={
              "bg-[#181e2938] backdrop-blur-[28px] h-[63px] text-[14px] md:hidden text-[#C9CED6] mt-1 shadow-2xl shadow-[#0000001a] py-6 px-4"
            }
          >
            {/* Left side: URL + Copy icon */}
            <div className="flex items-center gap-2 flex-grow">
              <span className="truncate">{urls.shortUrl}</span>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="bg-[#1c283fb0] size-6 flex items-center justify-center rounded-full"
              >
                {copied ? (
                  <Check className="size-4 cursor-pointer text-[#C9CED6]" />
                ) : (
                  <Copy className="size-4 cursor-pointer text-[#C9CED6]" />
                )}
              </div>
            </div>

            {/* {shortUrl}

            <div
              onClick={(e) => {
                e.stopPropagation(); // this will gonna prevent accordion toggle that was by default from shadcnUI
                handleCopy();
              }}
              className="bg-[#1c283fb0] size-6 flex items-center justify-center rounded-full"
            >
              {copied ? (
                <Check className="size-4 cursor-pointer  text-[#C9CED6]" />
              ) : (
                <Copy className="size-4 cursor-pointer  text-[#C9CED6]" />
              )}
            </div> */}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-y-2 px-4 text-sm">
            <p className="font-medium text-muted-foreground ">Original URL:</p>
            <div className="flex items-center col-span-1  overflow-hidden">
              <img src={iconUrl} alt="siteIcon" className="size-5" />
              <p className="truncate">{urls.originalUrl}</p>
            </div>

            <p className="font-medium text-muted-foreground">Status:</p>
            <p>{urls.status}</p>

            <p className="font-medium text-muted-foreground">Created At:</p>
            <p>{new Date(urls.createdAt).toLocaleString()}</p>

            <p className="font-medium text-muted-foreground">Action:</p>
            <Dialog>
              <DialogTrigger>Open</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DashboardDataItem;
