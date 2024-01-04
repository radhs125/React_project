// Footer.js
import React from 'react';
import './Footer.css'; // Import your footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>For Queries</h3>
            <p>Email: LittleJoy@gmail.com</p>
            <p>Phone: 91+ 94456 73455</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Facebook | Twitter | Instagram</p>
          </div>
          <div className="footer-section">
            <h3>Store Hours</h3>
            <p>Monday - Saturday: 9 AM - 6 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 LittleJoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
