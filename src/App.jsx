import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/sonner";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import useAuthStore from "./store/auth.store";
import ProtectedRoute from "./utils/ProtectedRoute";
const App = () => {
  const fetchCurrentUser = useAuthStore((s) => s.fetchCurrentUser);
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
