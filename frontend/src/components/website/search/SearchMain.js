import React, { useEffect, useState } from "react";
import Scroll from "../navigation/Scroll";
import SearchList from "./SearchList";
import "./SearchMain.css";
import SearchBar from "./SearchBar";
import { getSearchResultsFromBackend } from "../../../services/paper_service";
import { useLocation, useNavigate } from "react-router-dom";

function SearchMain({ details }) {
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = useLocation().state?.searchQuery;

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery && searchQuery.length > 2) {
      getSearchResultsFromBackend(searchQuery).then((results) => {
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const updateSearchResults = (searchInputValue) => {
    navigate("", { replace: true, state: { searchQuery: searchInputValue } });
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
