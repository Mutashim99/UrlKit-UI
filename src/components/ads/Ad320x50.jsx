import React, { useEffect, useRef } from "react";

// This is the correct way to load a STANDARD DISPLAY banner
export default function Ad320x50() {
  const adRef = useRef(null);
  const scriptRef = useRef(null); // Keep a ref to the script itself

  useEffect(() => {
    if (!adRef.current || scriptRef.current) {
      return; // Abort if ref is not set or script is already loaded
    }

    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    
    // 1. GET THE NEW "STANDARD BANNER" SCRIPT SRC FROM ADSTERRA
    // 2. PASTE IT HERE. It will NOT be the 'highperformanceformat.com' URL
    script.src = "//www.highperformanceformat.com/4c67e0e823bb09a7c07b34621b55b478/invoke.js"; 

    adRef.current.appendChild(script);
    scriptRef.current = script; // Store script ref

    // Cleanup on unmount
    return () => {
      if (adRef.current && scriptRef.current && adRef.current.contains(scriptRef.current)) {
        adRef.current.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);

  // This div is the container where the standard ad will render
  return <div ref={adRef} style={{ textAlign: "center", margin: "10px 0" }}></div>;
}