import React from 'react';
import './Footer.css';
import telegram_logo from './img/telegram-logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
    <footer className="footer">
      <div className="footer-left">
        <div className='logo-copyright'>
        <span className="footer-logo">QazSL</span>
        <div className="copyright">
          &copy; {new Date().getFullYear()} QazSL. All Rights Reserved.
        </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-links">
          <a href="https://t.me/jest06_bot" target="_blank" rel="noopener noreferrer">
            <img id='telegram-logo' src={telegram_logo}></img>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
