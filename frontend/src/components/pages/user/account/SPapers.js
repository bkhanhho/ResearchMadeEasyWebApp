/* When user is logged in, they can view their saved papers. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';

export default function SPapers() {
  return (
    <div>
      <Account />
      <div>
        <h1>Saved Papers</h1>
      </div>
      <Footer />
    </div>
  );
}