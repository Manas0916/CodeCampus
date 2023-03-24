import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    // <footer className="bg-dark py-3">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6 text-center text-md-start mt-3">
    //         <p style={{ color: 'white' }}>&copy; 2023 CodeCampus All rights reserved.</p>
    //         <p style={{ color: 'white' }}>Made by Manas Bajpai and Abhay Sharma</p>
    //       </div>
    //       <div className="col-md-6 text-center text-md-start">
    //         <ul className="list-unstyled">
    //           <li><b style={{ color: 'white'}}>Explore</b></li>
    //           <li><Link to="/">Home</Link></li>
    //           <li><u><Link to="/about">About</Link></u></li>
    //           <li><Link to="#">Services</Link></li>
    //           <li><Link to="#">Contact</Link></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer class="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-5">
            <p className="mb-0">&copy; 2023 <strong>CodeCampus</strong> Website. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 float-md-end text-start">
              <li className="list-group mb-2" style={{ fontSize: '20px' }}><strong>Connect With Us</strong></li>
              <li className="list-group-items mt-2"><Link className="link" to="https://www.linkedin.com/company/cosmic-coders/" target="_blank"><FaLinkedin style={{ fontSize: '25px' }} /> <b>LinkedIn</b></Link></li>
              <li className="list-group-items mt-2"><Link className="link" to="https://chat.whatsapp.com/CD8pvT3Wo4Y63RAB484vqN" target="_blank"><FaWhatsapp style={{ fontSize: '25px' }} /> <b>Whatsapp</b> </Link></li>
              <li className="list-group-items mt-2"><Link className="link" to="https://t.me/Cosmic_Coders" target="_blank"><FaTelegram style={{ fontSize: '25px' }} /> <b>Telegram</b></Link></li>
            </ul>
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="list-inline mb-0 float-md-end text-start">
                  <li className="list-group mb-2" style={{ fontSize: '20px', hover: ''}}><strong>Explore</strong></li>
                  <li className="list-group"><Link className="link" to="/" target="_blank"><b>Home</b></Link></li>
                  <li className="list-group"><Link className="link" to="/about" target="_blank"><b>About</b></Link></li>
                  <li className="list-group"><Link className="link" to="/" target="_blank"><b>Service</b></Link></li>
                  <li className="list-group"><Link className="link" to="/" target="_blank"><b>Contact</b></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>Made by <strong>Manas Bajpai</strong> & <strong>Abhay Sharma</strong></p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
