/* Display randomly generated papers on the main page. */

import React from "react";
import "../../../website/cards/DefaultPreviewCards.css";
import PaperPreviewCard from "../../../website/cards/PaperPreviewCard";

function CardsSub() {
  return (
    <div className="cards">
      <div className="cards__container">
        <h1>Subscribed: Artifical Intelligence</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <PaperPreviewCard
              src="images/img-home.jpg"
              text="Subscribed Recommendation Paper Title"
              label="Subscribed"
              path="/"
            />
            <PaperPreviewCard
              src="images/img.jpg"
              text="Subscribed Recommendation Paper Title"
              label="Subscribed"
              path="/"
            />
            <PaperPreviewCard
              src="images/img-1.jpg"
              text="Subscribed Recommendation Paper Title"
              label="Subscribed"
              path="/"
            />
          </ul>
        </div>
        <h1>Subscribed: Software Engineering</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <PaperPreviewCard
              src="images/img-home.jpg"
              text="Subscribed Recommendation Paper Title"
              path="/"
            />
            <PaperPreviewCard
              src="images/img.jpg"
              text="Subscribed Recommendation Paper Title"
              label="Subscribed"
              path="/"
            />
            <PaperPreviewCard
              src="images/img-1.jpg"
              text="Subscribed Recommendation Paper Title"
              label="Subscribed"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsSub;
