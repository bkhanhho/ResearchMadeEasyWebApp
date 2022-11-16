/* Display details of paper. */

import React, { useState } from 'react';
import '../../../App.css';
import './Details.css';
import { Link } from 'react-router-dom';
import { TiBookmark } from "react-icons/ti";
import {PaperTitle, PaperAuthors, PaperDate, PaperSummary, PaperCategories, PaperId, PaperLink} from './PaperDetails';



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

// const BookmarkLine = () => {
//   return (
//     <IconContext.Provider
//       value={{style: { color: '#4b5961', fontSize: '40px' }}}
//     >
      
//     <RiBookmarkLine/>
     
//     </IconContext.Provider>
//   );
// }
// const BookmarkFill = () => {
//   return (
//     <IconContext.Provider
//       value={{style: { color: '#27B0FF', fontSize: '40px' }}}
//     >
      
//     <RiBookmarkFill />
     
//     </IconContext.Provider>
//   );
// }



// function changeIcon(anchor) {
//   var icon = anchor.querySelector("i");
//   icon.classList.toggle('ri-bookmarkline');
//   icon.classList.toggle('ri-bookmarkfill');

//    anchor.querySelector("span").textContent = icon.classList.contains('ri-bookmarkline') ? "Read more" : "Read less";
// }


//ASSUMPTION: user clicks save and do not unclick. Once a paper is saved, users do not remove it from the saved paper list
export default function Details() {
  var title = PaperTitle();
  var authors = PaperAuthors();
  var date = PaperDate();
  var summary = PaperSummary();
  var link = PaperLink();
  var categories = PaperCategories();
  var id = PaperId();


  const [style, setStyle] = useState("cont");
  const savePaper = () => {
    alert("You saved this paper!");
  };


  const addPaperToSavedList = () => { //TODO: send paper id to list
    
  }
  let changeIcon = function(icon) { //TODO: change bookmark
    icon.classList.toggle('fa-times')
  }
  return (
    <div className='details'>
      <h1> {title} <span style={{ color: '#27B0FF', fontSize: '40px' }} onClick={() => {
          savePaper();
          addPaperToSavedList();
        }}
        >
          {/* {changeIcon()}</span></h1> */}
          
          <TiBookmark /></span></h1>
      
      {/* <p>TEST <span ><i onClick={() => {myFunction(this)}} className="ri ri-bookmark-line"> </i></span></p> */}
      


      {/* <p> {Bookmark()} </p> */}
        {/* <h1> {title} <TiBookmark className='bookmark-icon'/><br /><br /></h1> */}
        {/* <p align="right"><TiBookmark style={{color: 'teal', fontSize: '50px'}}/></p> */}
        {/* <p align="center"><a href= '/saved-papers'> Bookmark Icon </a></p> */}
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


