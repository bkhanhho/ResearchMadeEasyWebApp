import React from 'react';
import '../../../App.css';
//import myJson from './elasticsearch_response.json';// assert {type: 'json'};

/* This will receive the response from backend */ 
function getPaperResponse() {
    const jsonObj = require('./elasticsearch_response.json');
    return jsonObj;
}

//TODO: add topic tag (4 topics) for each response. Add function to parse the tag for paper and display in in Details.js

//TODO: replace 0 with the correct index of paper from response
function searchedPaper() {
    var jsonObj = getPaperResponse();
    var paper = jsonObj["hits"]["hits"][0]["_source"];
    return paper;
}

export function PaperTitle() {
    var paper = searchedPaper();
    var title = paper["title"];

    return (title); 
}

export const PaperAuthors = () => {
    var paper = searchedPaper();
    var authors = paper["authors"];
    //console.log("authors are: ", authors );
    return (authors);
};

export const PaperDate = () => {
    var paper = searchedPaper();
    var date = paper["released_date"];
    //console.log("published on: ", date["year"]);
    return (date);
};

export const PaperSummary = () => {
    var paper = searchedPaper();
    var summary = paper["summary"];
    return (summary);
};


