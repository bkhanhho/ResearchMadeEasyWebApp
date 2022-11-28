import React from "react";
import { Link } from "react-router-dom";

export default function SavedPaperCard({
  paperId,
  paperTitle,
  imagePath,
  imageLabel,
}) {
  const paperDetailsLink = "/paper/" + paperId;
  console.log("paperid is:", paperId);
  return (
    <ul>
      <li className="cards__item">
        <Link className="cards__item__link" to={paperDetailsLink}>
          <figure className="cards__item__pic-wrap" data-category={imageLabel}>
            <img className="cards__item__img" alt="Image" src={imagePath} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{paperTitle}</h5>
          </div>
        </Link>
      </li>
    </ul>
  );
}
