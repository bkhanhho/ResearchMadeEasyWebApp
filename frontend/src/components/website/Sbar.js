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
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search Papers" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Sbar; 