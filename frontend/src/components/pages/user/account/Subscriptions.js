/* When user is logged in, the user can view their subscriptions. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';

export default function Subscriptions() {
  return (
    <div>
      <Account />
      <div>
        <h1>Subscriptions</h1>
      </div>
      <Footer />
    </div>
  );
}