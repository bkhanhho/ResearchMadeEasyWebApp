import React from "react";
import "./RelatedPaperCard.css";

function RelatedPaperCard({ paper }) {
  const link = "/paper/" + paper._source.paper_id;
  const paperTitle = paper._source.title;
  const paperDate = paper._source.release_date;
  const paperSummary = paper._source.summary;

  return (
    <div className="card">
      <h4>
        <a href={link}> {paperTitle} </a>
      </h4>
      <p className="summary">
        {paperDate}: {paperSummary}
      </p>
    </div>
  );
}

export default RelatedPaperCard;
