/* When user is logged in, the user can view their subscriptions. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';
import CardsSub from './CardsSub'

export default function Subscriptions() {
  return (
    <div>
      <Account />
      <div>
        <div className="header1">Subscriptions</div>
      </div>
      <div className="info-container">
        <div classname="info">
          <CardsSub />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

