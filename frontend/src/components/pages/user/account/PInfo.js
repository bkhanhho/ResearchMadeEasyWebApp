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
          <h2 className="header2">First Name: JOHN</h2>
          <h2 className="header2">Last Name:  DOE</h2>
        </div>
      </div>
      <div className="info-container">
        <div classname="info">
          <h2 className="header2">Email: John.Doe@ttu.edu</h2>
        </div>
      </div>
    </div>
  );
}