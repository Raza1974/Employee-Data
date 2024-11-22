import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          © 2024 EMS. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
