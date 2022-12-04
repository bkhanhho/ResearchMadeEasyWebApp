/* When user is logged in, they can view their saved papers. */

import React from "react";
import "../../../../App.css";
import Footer from "../../../website/footer/Footer";
import Account from "./Account";
import Cards from "./Cards";
import "./InfoLayout.css";

export default function SPapers() {
  return (
    <div>
      <Account />
      <div>
        <div className="header1">Saved Papers</div>
      </div>
      <div className="info-container">
        <div classname="info">
          <Cards />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
