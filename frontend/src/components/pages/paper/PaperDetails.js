import React from 'react';
import '../../../App.css';
//import myJson from './elasticsearch_response.json';// assert {type: 'json'};
//import {getPaperResponse} from '..components/website/SearchResults.js';
import { useState, useEffect } from 'react';

// export const Component = () => {
//     const [data, setData] = useState();
//     useEffect(()=>{
//         const fetchData = async () => {
//             const data = await fetch('http://127.0.0.1:8000/search?searchQuery=vertical', {mode:'no-cors'});
//             setData(data);
//         }
//         fetchData();
//     }, [])
//     console.log("data is: ", JSON.stringify(data));
//     return <div>{JSON.stringify(data)}</div>
    
//     //return result; (JSON.stringify(data));
// };


/* This will receive the response from backend */ 
async function getPaperResponse() {
    // const jsonObj = require('./elasticsearch_response.json'); // get response from backend, check if 200 then proceed with next step.
    // return jsonObj;

    try {
        const response = await fetch('http://127.0.0.1:8000/search?searchQuery=vertical', {mode:'no-cors'});
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("successful result is: ", result);
        return result;
      } catch (err) {
        console.log("fetch error is: ", err);
      }
}

//TODO: add topic tag (4 topics) for each response. Add function to parse the tag for paper and display in in Details.js

//TODO: replace 0 with the correct index of paper from response
async function searchedPaper() {
    var jsonObj = await getPaperResponse();
    console.log(jsonObj);
    var paper = jsonObj["hits"]["hits"][0]["_source"];
    // var paper = require('./elasticsearch_response.json')["hits"]["hits"][0]["_source"];
    return paper;
}

let paper = searchedPaper();

export function PaperTitle() {
    //var paper = searchedPaper();
    var title = paper["title"];

    return (title); 
}

export const PaperAuthors = () => {
    //var paper = searchedPaper();
    var authors = paper["authors"];
    //console.log("authors are: ", authors );
    return (authors);
};

export const PaperDate = () => {
    //var paper = searchedPaper();
    var date = paper["released_date"];
    //console.log("published on: ", date["year"]);
    return (date);
};

export const PaperSummary = () => {
    //var paper = searchedPaper();
    var summary = paper["summary"];
    return (summary);
};

export const PaperId = () => {
    //var paper = searchedPaper();
    var paperId = paper["paper_id"];
    return (paperId);
};

export const PaperLink = () => {
    //var paper = searchedPaper();
    var paperLink = paper["link"];
    return (paperLink);
};

export const PaperCategories = () => {
    //var paper = searchedPaper();
    var paperCategories = paper["category"];
    return (paperCategories);
};


