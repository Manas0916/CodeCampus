import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>&copy; 2023 Example Website. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-center">
            <ul className="list-unstyled">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
