import React from "react";
import { getSearchResultsFromBackend } from "../../../../services/paper_service";
import { useState, useEffect } from "react";
import PaperSearchCard from "../../../website/cards/PaperSearchCard";
import DefaultPreviewCards from "../../../website/cards/DefaultPreviewCards";

function RelatedPapersList({ paperId, category }) {
  const [paperList, setPaperList] = useState([]);

  useEffect(() => {
    getSearchResultsFromBackend(category).then((backendResponse) => {
      const filteredResponse = backendResponse.filter(
        (paper) => paper._source.category === category
      );
      setPaperList(filteredResponse);
    });
  }, [paperId]);

  let paperCards;
  if (paperList.length !== 0) {
    paperCards = paperList.map((paper) => (
      <PaperSearchCard key={paper.paper_id} paper={paper} />
    ));
  } else {
    paperCards = <DefaultPreviewCards />;
  }

  return <div>{paperCards}</div>;
}

export default RelatedPapersList;
