import useAuthStore from "@/store/auth.store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const fetchCurrentUser = useAuthStore((s) => s.fetchCurrentUser);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      setTimeout(async() => {
       await  fetchCurrentUser();
      }, 0);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl p-4 bg-[#181E29] rounded-xl h-2/3 flex flex-col items-center justify-center ">
        <div>
          <h1
            className="md:text-4xl text-3xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #EB568E,#144EE3)",
            }}
          >
            UrlKit
          </h1>
        </div>
        <h2>LogIn</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
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
            Create Account
          </button>
          {msg && <p>{msg}</p>}
        </form>
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
