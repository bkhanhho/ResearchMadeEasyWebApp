// src/components/SearchList.js

import React from "react";
import PaperSearchCard from "../cards/PaperSearchCard";
import Cards from "../cards/Cards";

function SearchList({ searchResultPapers }) {
  let paperCards;
  if (searchResultPapers.length !== 0) {
    paperCards = searchResultPapers.map((paper) => (
      <PaperSearchCard key={paper.paper_id} paper={paper} />
    ));
  } else {
    paperCards = <Cards />;
  }
  return <div>{paperCards}</div>;
}

export default SearchList;
