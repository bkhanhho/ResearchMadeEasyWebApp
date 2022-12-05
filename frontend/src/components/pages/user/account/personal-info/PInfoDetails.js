import React from "react";
import "../../../App.css";
//import myJson from './elasticsearch_response.json';// assert {type: 'json'};

/* This will receive the response from backend */
function getUserResponse() {
  const jsonObj = require("./elasticsearch_response.json"); // get response from backend, check if 200 then proceed with next step.
  return jsonObj;
}

function UserDetails() {
  var jsonObj = getUserResponse();
  var user = jsonObj["hits"]["hits"][0]["_source"];
  return user;
}

export function UserEmail() {
  var user = UserDetails();
  var email = user["email"];

  return email;
}

export const PaperAuthors = () => {
  var user = UserDetails();
  var authors = user["authors"];
  //console.log("authors are: ", authors );
  return authors;
};
