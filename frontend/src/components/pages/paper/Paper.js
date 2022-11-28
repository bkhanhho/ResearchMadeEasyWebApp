import React, { useEffect, useState } from "react";
import { getPaperFromBackend } from "../../../services/paper_service";
import BookmarkButton from "./BookmarkButton";
import ReadPaperButton from "./ReadPaperButton";
import PaperSubtitle from "./PaperSubtitle";
import PaperSummary from "./PaperSummary";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function Paper() {
  const [paperInfo, setPaperInfo] = useState({});
  let { paperId } = useParams();

  useEffect(() => {
    let mounted = true;
    getPaperFromBackend(paperId).then((backendResponse) => {
      if (mounted) {
        setPaperInfo(backendResponse);
      }
    });
    return () => {
      mounted = false;
    };
  }, [paperId]);

  console.log("calling paper", paperId);

  return (
    <div className="paper">
      <h1>
        {paperInfo.title}
        <BookmarkButton paperId={paperId} />
      </h1>
      <ReadPaperButton link={paperInfo.link} />
      <PaperSubtitle
        authors={paperInfo.authors}
        date={paperInfo.release_date}
        categories={paperInfo.category}
      />
      <PaperSummary summary={paperInfo.summary} />
    </div>
  );
}

Paper.propTypes = {
  paperId: PropTypes.string.isRequired,
};
