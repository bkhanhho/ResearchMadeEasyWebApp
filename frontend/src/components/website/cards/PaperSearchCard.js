// src/components/Card.js

import React from "react";

function displayAuthors(authors) {
  if (!authors) return;
  return authors.map(({ name }) => `${name}`).join(", ");
}

function PaperSearchCard({ paper }) {
  const link = "/paper/" + paper._source.paper_id;
  const paperTitle = paper._source.title;
  const paperDate = paper._source.release_date;
  const paperAuthors = paper._source.authors;

  return (
    <div className="card">
      <div>
        <h2>
          <a href={link}> {paperTitle} </a>
        </h2>
        <p>
          {displayAuthors(paperAuthors)} - {paperDate}
        </p>
      </div>
    </div>
  );
}

export default PaperSearchCard;
