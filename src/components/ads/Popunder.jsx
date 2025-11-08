import { useEffect } from "react";

export default function Popunder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl28010326.effectivegatecpm.com/45/8a/48/458a484a58039884fa0c55866512300f.js";
    script.async = true;
    document.body.appendChild(script); // React doesn’t have direct access to <head>, body works fine
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // no visual component needed
}
