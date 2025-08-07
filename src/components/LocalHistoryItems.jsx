import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const LocalHistoryItems = ({
  shortUrl,
  originalUrl,
  clicks,
  createdAt,
  status,
}) => {
  const [copied, setCopied] = useState(false);
  const domain = new URL(originalUrl).hostname;
  const iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      toast.success("Copied URL to clipboard!");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (e) {
      console.log(e, "cant copy the text ", shortUrl);
    }
  };
  return (
    <>
      <div className="hidden md:grid grid-cols-7 md:items-center text-center gap-1 bg-[#181e2938] backdrop-blur-[28px] md:h-[55px] md:text-[15px] font-light text-[#C9CED6] md:mt-1 shadow-2xl shadow-[#0000001a] px-2">
        <div className="w-full flex items-center justify-center gap-2 col-span-2 overflow-hidden ">
          <p>{shortUrl}</p>

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
          <p className="text-start w-full truncate  ">{originalUrl}</p>
        </div>
        <div className="w-full">
          <p>{clicks}</p>
        </div>
        <div className="w-full">
          <p>{status}</p>
        </div>
        <div className="w-full">
          <p>{new Date(createdAt).toLocaleString()}</p>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={
              "bg-[#181e2938] backdrop-blur-[28px] h-[63px] text-[14px]  text-[#C9CED6] mt-1 shadow-2xl shadow-[#0000001a] py-6 px-4"
            }
          >
            {/* Left side: URL + Copy icon */}
            <div className="flex items-center gap-2 flex-grow">
              <span className="truncate">{shortUrl}</span>

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
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default LocalHistoryItems;
