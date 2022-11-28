import React from 'react';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import '../../../App.css';

//TODO: this func should receive search query from user
export default function getPaperResponse(query) {

    fetch('http://127.0.0.1:8000/search?query=' + query)
    .then(response => {
        if (response.ok) {
            return response.json
        }
        throw response;
    }) 

}

function searchedPaper() {
    var jsonObj = getPaperResponse();
    var paper = jsonObj["hits"]["hits"];//[0]["_source"];
    var numPapers = jsonObj["hits"]["total"]["value"];




    return paper;
}

// export function PaperTitle() {
//     var paper = searchedPaper();
//     var title = paper["title"];

//     return (title); 
// }