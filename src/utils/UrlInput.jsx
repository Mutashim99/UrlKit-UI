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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useSlugStore } from "@/store/slug.store";
import { useDashboardStore } from "@/store/dashboard.store";

const UrlInput = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [customSlugEnabled, setCustomSlugEnabled] = useState(false);
  const [customExpireEnabled, setCustomExpireEnabled] = useState(false);
  const [expiresAt, setExpiresAt] = useState("");
  const { isAuthenticated } = useAuthStore();
  const [urlResponseLoading, seturlResponseLoading] = useState(false);
  const [showUnsafeDialog, setShowUnsafeDialog] = useState(false);
  const [urlSafetyResponse, setUrlSafetyResponse] = useState({
    message: "",
    submittedUrl: "",
  });
  const getUrls = useDashboardStore((state) => state.getUrls);
  const saveSlugs = useSlugStore((state) => state.addSlug);

  // const handleUrlSafety = async () => {
  //   seturlResponseLoading(true);
  //   toast.loading("Analyzing your url with AI Agents...", { duration: 2000 });
  //   try {
  //     const res = await axios.post("url/check-url-safety", {
  //       url: originalUrl,
  //     });
  //     console.log(res);
  //     seturlResponseLoading(false);
  //     setUrlSafetyResponse({
  //       message: res.data.message,
  //       submittedUrl: res.data.submittedUrl,
  //     });
  //     if (res.data.safe === true) {
  //       await handleShorten();
  //     } else if (res.data.safe === false) {
  //       setShowUnsafeDialog(true);
  //     }
  //   } catch (e) {
  //     const msg = e.response?.data?.message || "Something went wrong";
  //     setUrlSafetyResponse({ message: msg, submittedUrl: "" });
  //     toast.error(msg); // show error toast
  //     console.log(e);
  //   }
  // };

  const handleUrlSafety = async () => {
    seturlResponseLoading(true);
    try {
      await toast.promise(
        axios.post("url/check-url-safety", { url: originalUrl }),
        {
          loading: "Analyzing your URL with AI Agents...",
          success: (res) => {
            setUrlSafetyResponse({
              message: res.data.message,
              submittedUrl: res.data.submittedUrl,
            });
            if (res.data.safe === true) {
              handleShorten();
              return "URL is safe ";
            } else {
              setShowUnsafeDialog(true);
              return "URL flagged as unsafe ";
            }
          },
          error: (err) => {
            const msg = err.response?.data?.message || "Something went wrong";
            setUrlSafetyResponse({ message: msg, submittedUrl: "" });
            seturlResponseLoading(false);
            return msg;
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  // const handleShorten = async () => {
  //   let responseBody;
  //   if (customSlugEnabled) {
  //     responseBody = {
  //       originalUrl,
  //       customSlug,
  //       expiresAt: customExpireEnabled ? expiresAt : null,
  //     };
  //     try {
  //       const res = await axios.post("/url/short/custom", responseBody);

  //       console.log(res);
  //       setOriginalUrl("");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     responseBody = {
  //       originalUrl,
  //       expiresAt: customExpireEnabled ? expiresAt : null,
  //     };
  //     try {
  //       const res = await axios.post("/url/short", responseBody);
  //       console.log(res);
  //       setOriginalUrl("");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  const handleShorten = async () => {
    const responseBody = customSlugEnabled
      ? {
          originalUrl,
          customSlug,
          expiresAt: customExpireEnabled ? expiresAt : null,
        }
      : { originalUrl, expiresAt: customExpireEnabled ? expiresAt : null };

    try {
      await toast.promise(
        axios.post(
          customSlugEnabled ? "/url/short/custom" : "/url/short",
          responseBody
        ),
        {
          loading: "Shortening your link...",
          success: (res) => {
            getUrls();
            console.log(res);
            saveSlugs(res.data.slug);
            setOriginalUrl("");
            setCustomSlug("");
            setExpiresAt("");
            seturlResponseLoading(false);
            return "URL shortened successfully";
          },
          error: (err) => {
            seturlResponseLoading(false);
            return err.response?.data?.message || "Failed to shorten URL";
          },
        }
      );
    } catch (error) {
      console.error(error);
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
          onClick={handleUrlSafety}
          className="md:w-[178px] w-20 h-[40px] bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer hover:bg-[#144eec] transition flex items-center justify-center"
          style={{
            boxShadow: "10px 9px 22px 0 rgba(20, 78, 227, 0.38)",
          }}
        >
          {urlResponseLoading ? (
            <LoaderCircle className="text-center animate-spin" />
          ) : (
            <div>
              <span className="hidden md:inline ">Shorten Now!</span>
              <span className="md:hidden flex items-center justify-center ">
                <ArrowRight className="text-center" />
              </span>
            </div>
          )}
        </button>
      </div>

      <AlertDialog open={showUnsafeDialog} onOpenChange={setShowUnsafeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unsafe URL Warning </AlertDialogTitle>
            <AlertDialogDescription className="text-[#C9CED6]  font-bold flex flex-col gap-3 text-sm ">
              {urlSafetyResponse.message}
              <br />
              Continue anyway?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className={
                "bg-[#161718] border-none cursor-pointer text-center font-medium text-[16px] rounded-[48px]"
              }
              onClick={() => {
                setShowUnsafeDialog(false);
                setOriginalUrl("");
                seturlResponseLoading(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                setShowUnsafeDialog(false);
                await handleShorten();
                seturlResponseLoading(false);
              }}
              className={
                " bg-[#144EE3] text-center font-medium text-[16px] rounded-[48px] border-2 border-[#144EE3] cursor-pointer  hover:bg-[#144eec]"
              }
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-center gap-4 font-medium text-[#C9CED6] leading-normal">
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Switch
                  checked={customSlugEnabled}
                  onCheckedChange={(val) => {
                    setCustomSlugEnabled(val);
                  }}
                />
              </div>
            </TooltipTrigger>
            {/* {!isAuthenticated && (
              <TooltipContent>
                <p className="text-lg font-bold">Login to use custom slugs!</p>
              </TooltipContent>
            )} */}
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
            placeholder="Enter Expiry Date and Time"
              disabled={!customExpireEnabled}
              type="datetime-local"
              className="text-[#C9CED6] p-2 rounded-md outline-0 disabled:cursor-not-allowed"
              value={expiresAt ? expiresAt.slice(0, 16) : ""} 
              onChange={(e) => {
                const local = new Date(e.target.value); 
                const utcIso = local.toISOString(); 
                setExpiresAt(utcIso);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlInput;
