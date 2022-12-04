/* When user is logged in, they can view personal information. */

import React from "react";
import "../../../../App.css";
import Footer from "../../../website/footer/Footer";
import Account from "./Account";
import "./InfoLayout.css";

export default function PInfo() {
  return (
    <div>
      <Account />
      <div>
        <div className="header1">Personal Information</div>
      </div>
      <div className="info-container">
        <div className="flex-container1">
          <h2 className="header2">FIRST NAME</h2>
          <h2 className="header2">LAST NAME</h2>
        </div>
        <div className="flex-container2">
          <h2 className="header3">JOHN</h2>
          <h2 className="header3">DOE</h2>
        </div>
      </div>

      <div className="info-container">
        <div className="flex-container1">
          <h2 className="header2">EMAIL</h2>
        </div>
        <div className="flex-container3">
          <h2 className="header3">John.Doe@ttu.edu</h2>
        </div>
      </div>

      <div className="info-container">
        <div className="flex-container1">
          <h2 className="header2">PASSWORD</h2>
        </div>
        <div className="flex-container2">
          <h2 className="header3">*********</h2>
        </div>
      </div>
    </div>
  );
}
