/* User can create account or login. */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./AccountHome.css";
import Subscriptions from "./Subscriptions";
import Footer from "../../../website/footer/Footer";
import PersonalInfo from "./personal-info/PersonalInfo";
import { Outlet } from "react-router-dom";

function Account() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  function subs() {
    return <Subscriptions />;
  }

  return (
    <div>
      <div className="side">
        <div className="side-container">
          <Link to="/account/saved-papers" className="side-links">
            Saved Papers
          </Link>
          <Link to="/account/personal-info" className="side-links">
            Personal Information
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Account;
