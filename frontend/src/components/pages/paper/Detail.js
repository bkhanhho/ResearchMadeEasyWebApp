/* Display details of 2nd paper inn mockData (FOST). */

import React from 'react';
import '../../../App.css';
import './Details.css';
import { Link } from 'react-router-dom';
//import { TiBookmark } from "react-icons/ti";
import {PaperTitle, PaperAuthors, PaperDate, PaperSummary, PaperId, PaperLink} from './PaperDetail';



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
  var link = PaperLink();

  return (
    <div className='details'>
        <h1> {title}<br /><br /></h1>
        <p align="right"><a href= {link}> Read Paper </a></p>
        <p> {displayListOfAuthors(authors)} - {date["year"]} - Subject 1, Subject 2 <br /></p>
        <h3> Paper Summary </h3>
        <p>{summary}</p>
        
    </div>
    );

}
