import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import {Loader,TriangleAlert} from 'lucide-react'

const verifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying....");
  const navigate = useNavigate();
  const [requestFailed, setRequestFailed] = useState(false);
  const [loadingiconstate, setLoadingiconstate] = useState(true)


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get("token");
        const res = await axios.get(`/auth/verify-email?token=${token}`);

        setStatus("Email verified! Redirecting...");
        setTimeout(() => navigate("/auth/login"), 2000);
        setLoadingiconstate(false)
      } catch (error) {
        setLoadingiconstate(false)
        setRequestFailed(true);
        setStatus(`Verification failed : ${error.response.data.message}`);
        console.log(error);
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="w-full bg-[#0B101B] h-screen text-[#C9CED6] flex flex-col items-center  p-4 text-3xl">
      {loadingiconstate && <Loader className="size-16 m-5"></Loader>}
      {requestFailed && <TriangleAlert className="size-16 m-5 text-red-600"></TriangleAlert>}
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
