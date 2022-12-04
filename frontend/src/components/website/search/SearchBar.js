import React, { useEffect, useRef } from "react";

function SearchBar({ onSearchChange }) {
  const searchInputRef = useRef(null);

  const handleChange = (e) => {
    const query = e.target.value;
    if (query.length > 2) {
      onSearchChange(query);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <h2 className="f2">Research Made Easy</h2>
      </div>
      <div className="search-article-paper">
        <input
          className="search-input"
          type="search"
          placeholder="  Search"
          onChange={handleChange}
          ref={searchInputRef}
        />
      </div>
    </div>
  );
}

export default SearchBar;
