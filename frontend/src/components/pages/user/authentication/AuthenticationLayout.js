import React from "react";
import { Outlet } from "react-router-dom";

function AuthenticationLayout() {
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left"></div>
      <div className="form-content-right">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthenticationLayout;
