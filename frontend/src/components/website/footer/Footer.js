import React from "react";
import "./Footer.css";
import { Button } from "../navigation/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Learn more in less time.</p>
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">SIGN UP</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper"></div>
      </div>
      <section className="social-media">
        <div className="social-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              RESme
            </Link>
          </div>
          <small className="website-rights">RESme © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
