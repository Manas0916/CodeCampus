import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-5">
            <p className="mb-0">&copy; 2023 <strong>CodeCampus</strong> Website. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 float-md-end text-start">
              <li className="list-group mb-2 mt-2" style={{ fontSize: '20px' }}><strong>Connect With Us</strong></li>
              <li className="list-group-items mt-2"><Link id="cs" className="link" to="https://www.linkedin.com/company/cosmic-coders/" target="_blank"><FaLinkedin style={{ fontSize: '25px' }} /> <b>LinkedIn</b></Link></li>
              <li className="list-group-items mt-2"><Link id="cs" className="link" to="https://chat.whatsapp.com/CD8pvT3Wo4Y63RAB484vqN" target="_blank"><FaWhatsapp style={{ fontSize: '25px' }} /> <b>Whatsapp</b> </Link></li>
              <li className="list-group-items mt-2"><Link id="cs" className="link" to="https://t.me/Cosmic_Coders" target="_blank"><FaTelegram style={{ fontSize: '25px' }} /> <b>Telegram</b></Link></li>
            </ul>
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="list-inline mb-0 float-md-end text-start">
                  <li className="list-group mb-2 mt-2" style={{ fontSize: '20px'}}><strong>Explore</strong></li>
                  <li className="list-group"><Link id="cs" className="link" to="/" onClick={()=>{window.scrollTo(0, 0);}}><b>Home</b></Link></li>
                  <li className="list-group"><Link id="cs" className="link" to="/about"><b>About</b></Link></li>
                  <li className="list-group"><Link id="cs" className="link" to="*"><b>Service</b></Link></li>
                  <li className="list-group"><Link id="cs" className="link" to="*"><b>Contact</b></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>Made by <strong><b style={{color: 'yellow'}}>Manas Bajpai</b></strong> & <strong><b style={{color: 'yellow'}}>Abhay Sharma</b></strong></p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
