// src/components/Card.js

import React from 'react';

//NOTE: I changed all the "person" to "paper" (function Card({paper}))
function Card({paper}) {
  console.log(paper);
  var link = getCorrectLink(paper.id);
  return(
    <div className="card">
      <img className="card-person" alt={paper.name} src={process.env.PUBLIC_URL + paper.imgPath} />
      <div>
        
        <h2><a href={link}> {paper.name} </a></h2>
        <p> {displayListOfAuthors(paper.authors)} - {paper.year}</p>
      </div>
    </div>
  );
}
function displayListOfAuthors(authors) {
  var authorList = "";
  for (let i = 0; i < authors.length; i++) {
    authorList += authors[i]["name"];;
    if (i < authors.length - 1) {
      authorList += ", ";
    }
  }
  return authorList;

}
function getCorrectLink(id) {
  if (id == 1) {
    return "/details";
  }
  else {
    return "/detail";
  }

}
export default Card;