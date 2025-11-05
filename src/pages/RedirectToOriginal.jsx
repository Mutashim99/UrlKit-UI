import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Loader2,
  AlertTriangle,
  ShieldCheck,
  Ban,
  Lock,
  BrainCircuit,
} from "lucide-react";

const RedirectToOriginal = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [safety, setSafety] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [modelBusyMsg, setModelBusyMsg] = useState(null);

  useEffect(() => {
    const fetchAndCheck = async () => {
      let url; 

      try {
       
        
        const res = await axios.get(`/url/${slug}?preview=true`);
        url = res.data?.originalUrl;
        setOriginalUrl(url); 

        if (!url) {
          setErrorMsg("Original URL not found. Cannot proceed.");
          setLoading(false);
          return;
        }

        
        try {
          const safetyRes = await axios.post("/url/check-url-safety", { url });
          const safetyData = safetyRes.data;
          setSafety(safetyData);

          if (!safetyData || typeof safetyData.safe !== "boolean") {
            setErrorMsg("Failed to verify URL safety.");
            setLoading(false);
            return;
          }

          if (safetyData.safe) {
            setTimeout(() => {
              window.location.href = url;
            }, 2000);
          }

          setLoading(false);
        } catch (safetyErr) {
       
          const statusCode = safetyErr.response?.status;

          
          const transientErrorCodes = [
            503, // Service Unavailable (Model Overloaded)
            429, // Resource Exhausted (Rate Limited)
            500, // Internal Server Error
            504, // Gateway Timeout
          ];

          if (transientErrorCodes.includes(statusCode)) {
           
            setModelBusyMsg(
              "The AI safety check is temporarily unavailable. We'll redirect you to the URL shortly..."
            );

            
            setTimeout(() => {
              window.location.href = url;
            }, 3000); 
          } else {
            
            setErrorMsg(
              safetyErr.response?.data?.message || "Failed to check URL safety."
            );
          }
          setLoading(false);
        }
      } catch (err) {
       
        setErrorMsg(err.response?.data?.message || "Unexpected error occurred");
        setLoading(false);
      }
    };

    fetchAndCheck();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-4">
        <BrainCircuit className="h-12 w-12 animate-pulse text-purple-400" />
        <p className="text-gray-400">Checking link safety with AI…</p>
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
      </div>
    );
  }


  if (modelBusyMsg) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-3 text-center px-4">
        <BrainCircuit className="h-12 w-12 text-purple-400" />
        <h2 className="text-lg font-semibold">AI Check Unavailable</h2>
        <p className="text-gray-400">{modelBusyMsg}</p>
        <Loader2 className="h-6 w-6 animate-spin text-gray-500 mt-2" />
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-3 text-center px-4">
        <Ban className="h-12 w-12 text-red-400" />
        <h2 className="text-lg font-semibold">Redirect Failed</h2>
        <p className="text-gray-400">{errorMsg}</p>
      </div>
    );
  }

  if (safety && !safety.safe) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-4 text-center px-4">
        <AlertTriangle className="h-12 w-12 text-yellow-400" />
        <h2 className="text-xl font-semibold">Caution: {safety.category}</h2>
        <p className="text-gray-400">{safety.message}</p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => (window.location.href = originalUrl)}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium"
          >
            Continue Anyway
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-3">
      <ShieldCheck className="h-12 w-12 text-green-400" />
      <p className="text-gray-400">{safety?.message}</p>
      <p className="text-sm text-gray-500">Redirecting shortly...</p>
    </div>
  );
};

export default RedirectToOriginal;