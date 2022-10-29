/* auth. */

import React from 'react';
import '../../../../App.css';
import Footer from '../../../website/Footer';

const fakeAuth = () => {
    const fakeAuthenticate = () => 
        new Promise((resolve) => {
        setTimeout(() => resolve('CAPSTONE123'),250);
    });
};

// finish fake auth if time otherwise leave as letting the user in
