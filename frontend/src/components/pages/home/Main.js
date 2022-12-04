import React from "react";
import "../../../App.css";
import Sbar from "../../website/Sbar";
import initialDetails from "../../website/initialDetails";
import Footer from "../../website/Footer";

function Main() {
  return (
    <div>
      <Sbar details={initialDetails} />
      <Footer />
    </div>
  );
}

export default Main;
