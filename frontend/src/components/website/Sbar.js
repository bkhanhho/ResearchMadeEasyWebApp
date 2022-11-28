import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import Cards from './Cards';
import {autosuggestPapers} from '../../services/paper_service';
import './Sbar.css';

function Sbar({  }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const [SearchedPapers, setResults] = useState("")

  // const SearchedPapers = details.filter(
  //   paper => {
  //     return (
  //       paper
  //       .name
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase()) ||
  //       paper
  //       .author
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase())
  //     );
  //   }
  // );

  const handleChange = async e =>  {
    setSearchField(e.target.value);
    if (e.target.value==="") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
      const results  = await autosuggestPapers(e.target.value)
      console.log(results);
      // let something = results.map(result => result._source);
      // console.log(something);
      setResults(results);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPapers={SearchedPapers} />
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
        <h2 className="f2">Research Made Easy</h2>
      </div>
      <div className="search-article-paper">
        <input 
          className="search-input"
          type = "search"
          placeholder = "  Search" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Sbar; 