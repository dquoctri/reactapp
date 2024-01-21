// src/components/Footer/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-blue-600 text-white p-10 mt-8">
      <div className="contact-info mb-4">
        {/* Contact information */}
        <address>
          123 Learning Lane<br />
          Education City, 10101
        </address>
        <p>Phone: (123) 456-7890</p>
        <p>Email: support@example.com</p>
      </div>
      <div className="social-media-links mb-4">
        {/* Social media links */}
        {/* Icons would be rendered here */}
      </div>
      <div className="legal-info mb-4">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
      <div className="site-map">
        {/* Site map links */}
        <Link to="/about">About</Link>
        {/* More links */}
      </div>
    </footer>
  );
};

export default Footer;