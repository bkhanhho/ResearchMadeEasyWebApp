import React, { useState } from "react";
import Scroll from "../navigation/Scroll";
import SearchList from "./SearchList";
import "./SearchMain.css";
import SearchBar from "./SearchBar";
import { getSearchResultsFromBackend } from "../../../services/paper_service";

function SearchMain({ details }) {
  const [searchResults, setSearchResults] = useState([]);

  // const SearchedPapers = details.filter((paper) => {
  //   return (
  //     paper.name.toLowerCase().includes(searchField.toLowerCase()) ||
  //     paper.author.toLowerCase().includes(searchField.toLowerCase())
  //   );
  // });

  const updateSearchResults = (searchQuery) => {
    getSearchResultsFromBackend(searchQuery).then((results) => {
      setSearchResults(results);
    });
  };

  return (
    <section className="search">
      <SearchBar onSearchChange={updateSearchResults} />
      <Scroll>
        <SearchList searchResultPapers={searchResults} />
      </Scroll>
    </section>
  );
}

export default SearchMain;
