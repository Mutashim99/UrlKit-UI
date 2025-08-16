import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const verifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying....");
  const navigate = useNavigate();
  const [requestFailed, setRequestFailed] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get("token");
        const res = await axios.get(`/auth/verify-email?token=${token}`);

        setStatus("Email verified! Redirecting...");
        setTimeout(() => navigate("/auth/login"), 2000);
      } catch (error) {
        setRequestFailed(true);
        setStatus(`Verification failed : ${error.response.data.message}`);
        console.log(error);
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] flex flex-col items-center  p-4 text-3xl">
      {status}
      {requestFailed && (
        <p className="text-center text-sm mt-4">
          Verification link expired? {" "}
          <Link to="/resend-verification-email" className="text-blue-500 hover:underline">
            resend email
          </Link>
        </p>
      )}
    </div>
  );
};

export default verifyEmail;
