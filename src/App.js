import React from "react";
import { AuthProvider } from "./provider/AuthContext"
import AppRoutes from "./routes";

export default function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}