import { useEffect } from "react";

// This component is for a floating ad, so its code is correct.
// Do not change this one.
export default function SocialBar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl28010323.effectivegatecpm.com/13/80/f0/1380f011f5154cd3bfc2fffa61f296.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // floating bar, no JSX needed
}