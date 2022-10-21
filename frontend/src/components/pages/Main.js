import React from 'react';
import '../../App.css';
import Sbar from '../website/Sbar';
import initialDetails from'../website/initialDetails'
import Cards from '../website/Cards';

// import Footer from '../Footer';

function Main() {
  return (
    <div>
      <Sbar details={initialDetails}/>
    </div>
  );
}

export default Main;