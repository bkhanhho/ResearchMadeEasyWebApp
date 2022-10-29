/* When user is logged in, they can view personal information. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';

export default function PInfo() {
  return (
    <div>
      <Account />
      <div>
        <h1>Personal Information</h1>
      </div>
      <Footer />
    </div>
  );
}