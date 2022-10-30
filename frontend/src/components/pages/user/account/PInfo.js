/* When user is logged in, they can view personal information. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';
import './InfoLayout.css'

export default function PInfo() {
  return (
    <div>
      <Account />
      <div>
        <div className="header1">Personal Information</div>
      </div>
      <div className="info-container">
        <div classname="info">
          <h2 className="header2">First Name: </h2>
          <h2 className="header2">Last Name: </h2>
          <h2 className="header2">Email: </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}