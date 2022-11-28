import React from "react";

function displayAuthors(authors) {
  if (!authors) return;
  return authors.map(({ name }) => `${name}`).join(", ");
}
export default function PaperSubtitle({ date, categories, authors }) {
  return (
    <p align="center" style={{ color: "gray" }}>
      {displayAuthors(authors)} - {date} - {categories} <br />
    </p>
  );
}
