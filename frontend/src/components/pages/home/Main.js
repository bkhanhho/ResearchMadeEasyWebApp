import React from "react";
import "../../../App.css";
import SearchMain from "../../website/search/SearchMain";
import initialDetails from "../../website/initialDetails";
import Footer from "../../website/footer/Footer";

function Main() {
  return (
    <div>
      <SearchMain details={initialDetails} />
      <Footer />
    </div>
  );
}

export default Main;
