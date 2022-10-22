import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import Cards from './Cards';

function Sbar({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const SearchedPapers = details.filter(
    paper => {
      return (
        paper
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        paper
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if (e.target.value==="") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={SearchedPapers} />
        </Scroll>
      );
    } else {
      return (
        <Cards />
      );
    }
  }

  return (
    <section className="search">
      <div className="search-bar">
        <h2 className="f2">Search for articles and papers.</h2>
      </div>
      <div className="search-article-paper">
        <input 
          className="search-input"
          type = "search" 
          placeholder = "Search" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Sbar; 