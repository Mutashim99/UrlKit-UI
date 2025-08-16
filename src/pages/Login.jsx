import useAuthStore from "@/store/auth.store";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  const fetchCurrentUser = useAuthStore((s) => s.fetchCurrentUser);
  const [resendVerification, setResendVerification] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      setLoginLoading(true);
      const res = await axios.post("/auth/login", { email, password });

      await fetchCurrentUser();

      setMsg("Logged in successfully!");
      setMsgType("success");
      setLoginLoading(false);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";
      console.error(err);
      if (
        err.response.data.message ===
        "Email is not verified yet, you should verify your email before logging In!"
      ) {
        setResendVerification(true);
      }

      setMsg(errorMsg);
      setMsgType("error");
      setLoginLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl p-6 bg-[#181E29] rounded-xl flex flex-col items-center justify-center">
        <h1
          className="md:text-4xl text-3xl font-bold bg-clip-text text-transparent mb-4"
          style={{
            backgroundImage: "linear-gradient(to right, #EB568E,#144EE3)",
          }}
        >
          UrlKit
        </h1>
        <h2 className="text-xl mb-4">Log In</h2>

        <form className="space-y-4 w-full" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loginLoading ? "..." : "Login"}
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-sm ${
              msgType === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {msg}
          </p>
        )}

        {resendVerification && (
          <p className="text-center text-sm mt-4">
            <Link to="/resend-verification-email" className="text-blue-500 hover:underline">
              Resend email verification
            </Link>
          </p>
        )}

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
