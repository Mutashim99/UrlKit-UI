import React, { useState } from "react";
import { Link, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useAuthStore from "@/store/auth.store";

const UrlInput = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [customSlugEnabled, setCustomSlugEnabled] = useState(false);
  const [customExpireEnabled, setCustomExpireEnabled] = useState(false);
  const [expiresAt, setExpiresAt] = useState("");
  const { isAuthenticated } = useAuthStore();

  
  const handleShorten = async () => {
    
    let responseBody;
    if (customSlugEnabled) {
      responseBody = {
        originalUrl,
        customSlug,
        expiresAt: customExpireEnabled ? expiresAt : null,
      };
      try {
        const res = await axios.post("/url/short/custom", responseBody);
        console.log(res);
        setOriginalUrl("")
      } catch (e) {
        console.log(e);
      }
    } else {
      responseBody = {
        originalUrl,
        expiresAt: customExpireEnabled ? expiresAt : null,
      };
      try {
        const res = await axios.post("/url/short", responseBody);
        console.log(res);
        setOriginalUrl("")
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <>
      <div className=" flex p-[3px] rounded-[48px] items-center justify-center  bg-[#181E29] md:w-full  border-4 border-[#353C4A]">
        <Link className="size-8 ml-3" />
        <input
          placeholder="Enter you Loooong Link here"
          type="url"
          className="outline-0 w-full px-6"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button
          onClick={handleShorten}
          className="md:w-[178px] w-20 h-[40px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer hover:bg-[#144eec] transition"
          style={{
            boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
          }}
        >
          <span className="hidden md:inline ">Shorten Now!</span>
          <span className="md:hidden flex items-center justify-center ">
            <ArrowRight className="text-center" />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-center gap-4 font-medium text-[#C9CED6] leading-normal">
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Switch
                  checked={customSlugEnabled}
                  onCheckedChange={(val) => {
                    if (!isAuthenticated) {
                      return;
                    }
                    setCustomSlugEnabled(val);
                  }}
                  disabled={!isAuthenticated}
                />
              </div>
            </TooltipTrigger>
            {!isAuthenticated && (
              <TooltipContent>
                <p className="text-lg font-bold">Login to use custom slugs!</p>
              </TooltipContent>
            )}
          </Tooltip>
          <span className="md:text-lg text-sm">Custom Slug / Alias</span>
          <Switch
            checked={customExpireEnabled}
            onCheckedChange={setCustomExpireEnabled}
          />
          <span className="md:text-lg text-sm">Custom Expire</span>
        </div>

        <div className=" flex gap-2 flex-col items-center justify-center">
          <div className="flex rounded-[48px] items-center justify-center h-10 w-full bg-[#181E29]  border-4 border-[#353C4A]">
            {/* <h3 className="w-1/2 text-center font-medium text-sm md:text-[16px] h-full rounded-l-[48px] flex items-center justify-center bg-[#353C4A]">
              https://mysite.com/
            </h3> */}
            <input
              type="text"
              placeholder="Enter your Slug/Alias Here"
              className="outline-0 w-full px-10 h-full placeholder:text-[#C9CED6] placeholder:text-center text-sm md:text-[16px] text-center  disabled:text-[#7A828F] disabled:cursor-not-allowed "
              disabled={!customSlugEnabled}
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
            />
          </div>
          <div className="flex rounded-[48px] items-center justify-center h-10 w-full bg-[#181E29]  border-4 border-[#353C4A]">
            <input
              disabled={!customExpireEnabled}
              type="datetime-local"
              className=" text-[#C9CED6]  p-2 rounded-md outline-0  disabled:cursor-not-allowed"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlInput;
