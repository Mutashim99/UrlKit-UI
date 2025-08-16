import React, { useState } from "react";
import axios from "axios";
import NavBar from "@/components/home.components/NavBar";

const ResendVerificationEmail = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("/auth/resend-email-token", { email });
      setMsg("Verification email sent successfully! Check your inbox.");
    } catch (err) {
      setMsg(
        err.response?.data?.message || "Failed to resend verification email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0B101B] h-screen flex px-2 items-center justify-center text-[#C9CED6]">
      <div className="w-full max-w-md bg-[#181E29] rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Resend Verification Email</h2>
        <form onSubmit={handleResend} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            {loading ? "Sending..." : "Resend Email"}
          </button>
        </form>
        {msg && <p className="mt-4 text-sm text-center">{msg}</p>}
      </div>
    </div>
  );
};

export default ResendVerificationEmail;
