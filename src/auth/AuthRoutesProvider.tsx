import React from "react"
import { Route } from "react-router-dom"
import ForgotPasswordPage from "@/auth/ForgotPassword"

const AuthRoutesProvider = () => {
  return [
    <Route
      key="forgot-pasword"
      path="/forgot-password"
      element={<ForgotPasswordPage />}
    />,
  ]
}

export default AuthRoutesProvider
