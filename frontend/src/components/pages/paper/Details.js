/* Display details of paper. */

import React from 'react';
import '../../../App.css';
//import myJson from './elasticsearch_response.json' assert {type: 'json'};
//import paperDetails from './PaperDetails';
import {PaperTitle, PaperAuthors, PaperDate, PaperSummary} from './PaperDetails';

function displayListOfAuthors(authors) {
  var authorList = "";
  for (let i = 0; i < authors.length; i++) {
    authorList += authors[i]["name"];
    if (i < authors.length - 1) {
      authorList += ", ";
    }
  }
  //console.log(authorList);
  return authorList;

}
export default function Details() {
  var title = PaperTitle();
  var authors = PaperAuthors();
  var date = PaperDate();
  var summary = PaperSummary();

  return (
    <div className='details'>
        <h1> {title}<br /><br /></h1>
        <p> {displayListOfAuthors(authors)} - {date["year"]} - Subject 1, Subject 2 <br /></p>
        <h3> Paper Summary </h3>
        <p>{summary}</p>
        
    </div>
    );

}

