// src/components/SearchList.js

import React from 'react';
import Card from './Card';

function SearchList({ filteredPapers }) {
  console.log(filteredPapers);
  const filtered = filteredPapers.map(paper =>  <Card key={paper.id} paper={paper.source} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;