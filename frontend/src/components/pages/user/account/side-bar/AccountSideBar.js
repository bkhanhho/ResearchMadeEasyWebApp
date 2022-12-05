import React from "react";
import { Link } from "react-router-dom";
import "../AccountHome.css";

function AccountSideBar() {
  return (
    <div className="side">
      <div className="side-container">
        <Link to="saved-papers" className="side-links">
          Saved Papers
        </Link>
        <Link to="personal-info" className="side-links">
          Personal Information
        </Link>
      </div>
    </div>
  );
}

export default AccountSideBar;
