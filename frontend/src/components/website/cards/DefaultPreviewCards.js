/* Display randomly generated papers on the main page. */

import React from "react";
import "./DefaultPreviewCards.css";
import PaperPreviewCard from "./PaperPreviewCard";

function DefaultPreviewCards() {
  //const paperDetailsLink = "/paper/" + paperId; //2210.05173
  //2210.05350 //2210.05282 //2210.02579 //2210.05669 //2210.04410

  return (
    <div className="cards">
      <h1>Check out these articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <PaperPreviewCard
              src="images/img-home.jpg"
              text="On Explainability in AI-Solutions: A Cross-Domain Survey"
              label="Artificial Intelligence"
              path="/paper/2210.05173"
            />
            <PaperPreviewCard
              src="images/img.jpg"
              text="Computer Vision based inspection on post-earthquake with UAV synthetic dataset"
              label="Computer Vision and Pattern Recognition"
              path="/paper/2210.05282"
            />
            <PaperPreviewCard
              src="images/img-1.jpg"
              text="Seamless Service Provisioning for Mobile Crowdsensing: Towards Integrating Forward and Spot Trading Markets"
              label="Distributed, Parallel, and Cluster Computing"
              path="/paper/2210.04410"
            />
          </ul>
          <ul className="cards__items">
            <PaperPreviewCard
              src="images/img-7.jpg"
              text="A new perspective on Digital Twins: Imparting intelligence and agency to entities"
              label="Artificial Intelligence"
              path="/paper/2210.05350"
            />
            <PaperPreviewCard
              src="images/img-3.jpg"
              text="DigiFace-1M: 1 Million Digital Face Images for Face Recognition"
              label="Computer Vision and Pattern Recognition"
              path="/paper/2210.02579"
            />
            <PaperPreviewCard
              src="images/img-4.jpg"
              text="Technical Report: Analytical Modeling and Throughput Computation of Blockchain Sharding"
              label="Distributed, Parallel, and Cluster Computing"
              path="/paper/2210.04599"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DefaultPreviewCards;
