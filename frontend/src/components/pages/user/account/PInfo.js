/* When user is logged in, they can view personal information. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';

export default function PInfo() {
  return (
    <div>
      <h1 className='personal-info'>PERSONAL INFO</h1>;
      <Footer />
    </div>
  );
}