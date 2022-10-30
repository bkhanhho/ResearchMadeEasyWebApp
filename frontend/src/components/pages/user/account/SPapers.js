/* When user is logged in, they can view their saved papers. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';
import savedPapers from './savedPapers';
import './savedPapers.css';
import './InfoLayout.css'

export default function SPapers() {
  return (
    <div>
      <Account />
      <div>
        <div className="header1">Saved Papers</div>
      </div>
      <div className="info-container">
        <div classname="info">
          <savedPapers />
        </div>
      </div>
      <Footer />
    </div>
  );
}