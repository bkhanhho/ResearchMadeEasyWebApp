import React, { useState, useEffect } from "react";
import { Button } from "../navigation/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            RESme
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Main
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/details'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Details
              </Link>
            </li> */}

            {/* <li className='nav-item'>
              <Link
                to='/related-papers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Related Papers
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/read-paper'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Read Paper
              </Link>
            </li> */}

            <li className="nav-item">
              <Link
                to="/account/personal-info"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/personal-info'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Personal Information
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/subscribe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Subscriptions
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/saved-papers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Saved Papers
              </Link>
            </li> */}

            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                LOGIN / SIGN UP
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">LOGIN / SIGN UP</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
