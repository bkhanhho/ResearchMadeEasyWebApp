/* User can create account or login. */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavLink} from "react-bootstrap"

import { Button } from '../../../website/Button'
import './AccountHome.css';
import SignUp from '../signup-login/SignUp';
import AccountHome from './AccountHome';
import Subscriptions from './Subscriptions';
import Footer from '../../../website/Footer';

function Account() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function subs() {
    return (
      <Subscriptions />
    );
  }

  return (
  <>
    <div className='side'>
      <div className='side-container'>
        <Link to='/subscribe' className='side-links'>Subscriptions</Link>
        <Link to='/saved-papers' className='side-links'>Saved Papers</Link>
        <Link to='/personal-info' className='side-links'>Personal Information</Link>
      </div>
    </div>
  </>
  );
}

export default Account;