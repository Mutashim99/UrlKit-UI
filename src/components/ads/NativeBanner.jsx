import { useEffect } from "react";

export default function NativeBanner() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl28010319.effectivegatecpm.com/7108bbbb447479fe9e4d83ab95393bd6/invoke.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="container-7108bbbb447479fe9e4d83ab95393bd6"
      style={{ width: "100%", textAlign: "center", margin: "10px 0px" }}
    ></div>
  );
}
