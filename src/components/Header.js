import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">KMS Technology</div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#global-delivery">Global Delivery</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact" className="contact-button">Get In Touch</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
