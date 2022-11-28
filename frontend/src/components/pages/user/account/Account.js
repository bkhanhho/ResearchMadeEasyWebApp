/* User can create account or login. */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './AccountHome.css';
import Footer from '../../../website/Footer';
import PInfo from './PInfo';

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

  return (
  <>
    <div className='side'>
      <div className='side-container'>
        <Link to='/saved-papers' className='side-links'>Saved Papers</Link>
        <Link to='/personal-info' className='side-links'>Personal Information</Link>
      </div>
    </div>
  </>
  );
}

export default Account;