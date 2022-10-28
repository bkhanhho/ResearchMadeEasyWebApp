/* Display details of 2nd paper inn mockData (FOST). */

import React from 'react';
import '../../../App.css';
import './Details.css';
import { Link } from 'react-router-dom';
//import { TiBookmark } from "react-icons/ti";
import {PaperTitle, PaperAuthors, PaperDate, PaperSummary, PaperId, PaperLink, PaperCategories} from './PaperDetail';



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

function displayListOfCategories(categories) {
    var authorCategories = "";
    for (let i = 0; i < categories.length; i++) {
      authorCategories += categories[i];
      if (i < categories.length - 1) {
        authorCategories += ", ";
      }
    }
    return authorCategories;
}

export default function Details() {
  var title = PaperTitle();
  var authors = PaperAuthors();
  var date = PaperDate();
  var summary = PaperSummary();
  var link = PaperLink();
  var categories = PaperCategories();


  return (
    <div className='details'>
        <h1> {title}<br /><br /></h1>
        <div className='read-paper-link'>
          <p align="right"><a href= {link} target="_blank"> Read Paper </a></p>
        </div>
        {/* <p align="right"><a href= {link}> Read Paper </a></p> */}
        <p align="center" style={{color: 'gray'}}> {displayListOfAuthors(authors)} - {date["year"]} - {displayListOfCategories(categories)} <br /></p>
        <div className='box-container'>
          <h3> Paper Summary </h3>
          <p> {summary} </p>
        </div>
        
    </div>
    );

}
