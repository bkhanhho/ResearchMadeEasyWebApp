/* When user is logged in, they can view their saved papers. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';

export default function SPapers() {
  return (
    <div>
      <h1 className='saved-papers'>SAVED PAPERS</h1>;
      <Footer />
    </div>
  );
}