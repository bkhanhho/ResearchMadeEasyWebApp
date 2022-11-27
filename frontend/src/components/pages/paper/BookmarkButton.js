import React from "react";
import { TiBookmark } from "react-icons/ti";

function savePaper() {}
function addPaperToSavedList() {}

export default function BookmarkButton() {
  return (
    // TODO: move style to css
    <span
      style={{ color: "#27B0FF", fontSize: "40px" }}
      onClick={() => {
        savePaper();
        addPaperToSavedList();
      }}
    >
      {/**TODO: how to use button with icon */}
      <TiBookmark />
    </span>
  );
}
