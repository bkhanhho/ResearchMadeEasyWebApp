/* User can create account or login. */
import React, { useState, useEffect } from "react";
import "./AccountHome.css";
import { Outlet } from "react-router-dom";
import AccountSideBar from "./side-bar/AccountSideBar";

function Account() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <AccountSideBar />
      <Outlet />
    </div>
  );
}

export default Account;
