import React from "react";

export default function ReadPaperButton({ link }) {
  return (
    <div className="read-paper-link">
      <p align="right">
        <a href={link} target="_blank">
          Read Paper
        </a>
      </p>
    </div>
  );
}
