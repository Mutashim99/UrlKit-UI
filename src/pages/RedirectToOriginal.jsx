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
  ImageOff, // Added for the fallback UI
} from "lucide-react";

const RedirectToOriginal = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [safety, setSafety] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [modelBusyMsg, setModelBusyMsg] = useState(null);
  const [countdown, setCountdown] = useState(10);

  // --- NEW STATE FOR PREVIEW ---
  const [previewImage, setPreviewImage] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(true);
  // -----------------------------

  useEffect(() => {
    const fetchAndCheck = async () => {
      let url;

      try {
        // 1. Fetch the original URL
        const res = await axios.get(`/url/${slug}?preview=true`);
        url = res.data?.originalUrl;
        setOriginalUrl(url);

        if (!url) {
          setErrorMsg("Original URL not found. Cannot proceed.");
          setLoading(false);
          return;
        }

        // --- 2. START SAFETY AND PREVIEW REQUESTS CONCURRENTLY ---
        const safetyPromise = axios.post("/url/check-url-safety", { url });
        const previewPromise = axios.post("/url/get-preview", { url });

        // --- 3. Handle Preview Result (Non-critical) ---
        try {
          const previewRes = await previewPromise;
          setPreviewImage(previewRes.data.imageUrl);
        } catch (previewErr) {
          console.log("No preview image found.");
          // This is not a critical error, so we just log it
        }
        setPreviewLoading(false); // Mark preview as done (success or fail)

        // --- 4. Handle Safety Result (Critical) ---
        try {
          const safetyRes = await safetyPromise;
          const safetyData = safetyRes.data;
          setSafety(safetyData);

          if (!safetyData || typeof safetyData.safe !== "boolean") {
            setErrorMsg("Failed to verify URL safety.");
            setLoading(false);
            return;
          }

          setLoading(false); // Main loading is done
        } catch (safetyErr) {
          // ... [Your existing safetyErr handling logic] ...
          const statusCode = safetyErr.response?.status;
          const transientErrorCodes = [503, 429, 500, 504];

          if (transientErrorCodes.includes(statusCode)) {
            setModelBusyMsg(
              "The AI safety check is temporarily unavailable. We'll redirect you to the URL shortly..."
            );
            setTimeout(() => {
              window.location.href = url;
            }, 4200);
          } else {
            setErrorMsg(
              safetyErr.response?.data?.message || "Failed to check URL safety."
            );
          }
          setLoading(false);
        }
      } catch (err) {
        // Handle errors from the *first* fetch
        setErrorMsg(err.response?.data?.message || "Unexpected error occurred");
        setLoading(false);
      }
    };

    fetchAndCheck();
  }, [slug]);

  // useEffect for countdown (remains the same)
  useEffect(() => {
    if (loading || !safety || !safety.safe) {
      return;
    }
    if (countdown <= 0) {
      window.location.href = originalUrl;
      return;
    }
    const timerId = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [loading, safety, countdown, originalUrl]);


  // --- Render Logic ---

  if (loading) {
    // ... [Your existing loading component]
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-4">
        <BrainCircuit className="h-12 w-12 animate-pulse text-purple-400" />
        <p className="text-gray-400">Checking link safety with AI…</p>
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
      </div>
    );
  }

  if (modelBusyMsg) {
    // ... [Your existing modelBusyMsg component]
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
    // ... [Your existing errorMsg component]
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-3 text-center px-4">
        <Ban className="h-12 w-12 text-red-400" />
        <h2 className="text-lg font-semibold">Redirect Failed</h2>
        <p className="text-gray-400">{errorMsg}</p>
      </div>
    );
  }

  if (safety && !safety.safe) {
    // ... [Your existing !safety.safe component]
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

  // --- UPDATED "Safe" screen with Image Preview ---
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0B101B] text-white gap-4 text-center px-4">
      <ShieldCheck className="h-12 w-12 text-green-400" />
      <h2 className="text-xl font-semibold">{safety?.message}</h2>
      
      {/* URL Preview Section */}
      <div className="w-full max-w-lg p-4 bg-[#1a202c] rounded-lg">
        <p className="text-sm text-gray-400 mb-2 break-all">
          Preview for: <code className="text-sm text-blue-300">{originalUrl}</code>
        </p>
        
        {/* === NEW PREVIEW IMAGE LOGIC === */}
        <div className="w-full h-64 bg-[#0B101B] rounded flex items-center justify-center overflow-hidden border border-gray-700">
          {previewLoading ? (
            <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
          ) : previewImage ? (
            <img 
              src={previewImage} 
              alt="Site Preview" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <ImageOff className="h-8 w-8" />
              <span className="text-sm">No Preview Available</span>
            </div>
          )}
        </div>
      </div>

      {/* Redirect Button */}
      <button
        onClick={() => setCountdown(0)}
        className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium text-lg"
      >
        Proceed Now
      </button>

      {/* Countdown Message */}
      <p className="text-sm text-gray-500">
        Redirecting automatically in {countdown} seconds...
      </p>
    </div>
  );
};

export default RedirectToOriginal;