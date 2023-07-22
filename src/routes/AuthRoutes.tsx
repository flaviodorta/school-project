import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../containers/profile/authentication/overview/SignIn";
import AuthLayout from "../containers/profile/authentication/AuthLayout";

const AuthRoutes = React.memo(() => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </AuthLayout>
  );
});

export default AuthRoutes;
