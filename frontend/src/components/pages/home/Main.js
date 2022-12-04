import React from "react";
import "../../../App.css";
import Sbar from "../../website/search/Sbar";
import initialDetails from "../../website/initialDetails";
import Footer from "../../website/footer/Footer";

function Main() {
  return (
    <div>
      <Sbar details={initialDetails} />
      <Footer />
    </div>
  );
}

export default Main;
