import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Aquí puedes usar la lógica de autenticación real. Por ejemplo:
  const isAuthenticated = localStorage.getItem("authToken"); // Este es un ejemplo

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
