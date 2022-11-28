import React from "react";

export default function PaperSummary({ summary }) {
  return (
    <div className="box-container">
      <h3> Paper Summary </h3>
      <p> {summary} </p>
    </div>
  );
}
