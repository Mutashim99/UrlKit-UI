import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const AnalyticsDataItem = ({ urls }) => {
  const [open, setOpen] = useState(false);
  const domain = new URL(urls.orignalUrl).hostname;
  const iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  const shortUrl = `${window.location.origin}/${urls.shortSlug}`;

  const toggleDetails = () => setOpen((prev) => !prev);

  return (
    <>
      <Accordion
        type="single"
        collapsible
        value={open ? urls.id : ""}
        onValueChange={() => toggleDetails()}
        className="hidden md:block "
      >
        <AccordionItem
          value={urls.id}
          className="border-b shadow-2xl shadow-[#0000001a] bg-[#11151D] backdrop-blur-[28px] border-[#1f2937] md:mt-1 overflow-hidden font-light"
        >
          <AccordionTrigger className="grid grid-cols-7 items-center text-center gap-1 px-2 py-3 text-sm  transition-colors [&>svg]:hidden ">
            <div className="col-span-2 truncate px-2 ">
              <p>{shortUrl}</p>
            </div>
            <div className="w-full  col-span-2 flex items-center gap-3 text-start overflow-hidden">
              <div>
                <img src={iconUrl} alt="siteIcon" className="size-7" />
              </div>
              <p className="text-start w-full truncate  ">{urls.orignalUrl}</p>
            </div>

            <div className="px-2 text-[#C9CED6]">{urls.clicks.length}</div>

            <div className="px-2 text-[#C9CED6]">
              {new Date(urls.createdAt).toLocaleDateString()}
            </div>

            <div className="px-2 flex items-center justify-center">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails();
                }}
                className="p-2 bg-[#181E29] border-2 border-[#353C4A] flex items-center justify-center rounded-full w-full"
              >
                {open ? "Less Info" : "More Info"}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="bg-[#161b22] p-4 text-left rounded-b-xl animate-in fade-in-50 slide-in-from-top-2">
            {urls.clicks.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-[#C9CED6] border border-[#1f2937] rounded-lg">
                  <thead className="bg-[#0d1117] text-[#9CA3AF]">
                    <tr>
                      <th className="p-2 border border-[#353C4A]">Timestamp</th>
                      <th className="p-2 border border-[#353C4A]">IP</th>
                      <th className="p-2 border border-[#353C4A]">
                        User Agent
                      </th>
                      <th className="p-2 border border-[#353C4A]">Country</th>
                      <th className="p-2 border border-[#353C4A]">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urls.clicks.map((click) => (
                      <tr key={click.id} className=" transition-colors">
                        <td className="p-2 border border-[#353C4A]">
                          {new Date(click.timestamp).toLocaleString()}
                        </td>
                        <td className="p-2 border border-[#353C4A]">
                          {click.ip}
                        </td>
                        <td className="p-2 border border-[#353C4A] truncate max-w-[150px]">
                          {click.userAgent}
                        </td>
                        <td className="p-2 border border-[#353C4A]">
                          {click.country ?? "NO DATA"}
                        </td>
                        <td className="p-2 border border-[#353C4A]">
                          {click.city ?? "NO DATA"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-[#9ca3af] italic text-sm text-center">
                No clicks yet.
              </p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="md:hidden bg-[#0d1117] p-4 border border-[#1f2937] rounded-2xl mb-4 shadow-lg">
        <div className="mb-3">
          <p className="text-sm font-medium text-[#9ca3af] mb-1">
            Short URL:{" "}
            <span className="text-[#3B82F6] font-semibold break-all hover:underline">
              {shortUrl}
            </span>
          </p>
        </div>
        <div className="mb-3">
          <p className="text-sm font-medium text-[#9ca3af] mb-1">
            Original URL:{" "}
            <span className="text-[#C9CED6] break-all">{urls.orignalUrl}</span>
          </p>
        </div>

        <div className="flex justify-between text-xs text-[#9ca3af] mb-4">
          <span>
            Clicks:{" "}
            <span className="text-white font-medium">{urls.clicks.length}</span>
          </span>
          <span>
            Created:{" "}
            <span className="text-white font-medium">
              {new Date(urls.createdAt).toLocaleDateString()}
            </span>
          </span>
        </div>

        <button
          onClick={toggleDetails}
          className="w-full py-2 bg-[#1f6feb] text-white rounded-xl text-sm font-medium hover:bg-[#2563eb] transition"
        >
          {open ? "Hide" : "Details"}
        </button>

        {open && (
          <div className="mt-4 text-sm text-[#C9CED6] space-y-3 animate-in fade-in-50 slide-in-from-top-2">
            {urls.clicks.length > 0 ? (
              <ul className="space-y-3">
                {urls.clicks.map((click) => (
                  <li
                    key={click.id}
                    className="p-3 rounded-xl bg-[#161b22] border border-[#1f2937] shadow-sm"
                  >
                    <p className="text-xs text-[#9ca3af]">
                      ClickedAt: {new Date(click.timestamp).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">IP:</span>{" "}
                      {click.ip ?? "NA"}
                    </p>
                    <p>
                      <span className="font-medium">Agent:</span>{" "}
                      {click.userAgent ?? "NA"}
                    </p>
                    <p>
                      <span className="font-medium">Country:</span>{" "}
                      {click.country ?? "NA"}
                    </p>
                    <p>
                      <span className="font-medium">City:</span>{" "}
                      {click.city ?? "NA"}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-[#9ca3af] italic">No clicks yet</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AnalyticsDataItem;
