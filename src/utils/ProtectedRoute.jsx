import useAuthStore from "@/store/auth.store";
import React from "react";
import { Navigate } from "react-router-dom";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

const ProtectedRoute = ({ children }) => {
  const {isAuthenticated,loading} = useAuthStore();
  if(loading) return <DashboardSkeleton />
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to={"/auth/login"} replace />;
};

export default ProtectedRoute;
