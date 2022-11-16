/* When user is logged in, the user can view their subscriptions. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';
import Account from './Account';
import CardsSub from './CardsSub'

export default function Subscriptions() {
  return (
    <div>
      <h1 className='subscribe'>SUBSCRIBE</h1>;
      <Footer />
    </div>
  );
}