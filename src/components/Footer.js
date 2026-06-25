import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.webp"; 

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section footer-company">
          <img src={logo} alt="Taras Logo" className="footer-logo" loading="lazy" />

          <p className="footer-tagline">
            Delivering innovative solutions in VLSI Design, Embedded Systems,
            Edge AI, Product Engineering and Technology Services.
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/taras-systems-and-solutions-17252740a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/solutions">Solutions</a></li>
            {/* <li><a href="/training">Training</a></li> */}
            <li><a href="/career">Careers</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Head Office</h3>
          <p>
            177/1, Sameem Garden<br />
            Dhanasri Garden, Sundakkamuthur,<br />
            Coimbatore,<br />
            Tamil Nadu - 641010
          </p>
        </div>

        <div className="footer-section">
          <h3>Branch Office</h3>
          <p>
            3rd Floor - IndiQube Rivera,<br />
            VR Ramanathan Rd,<br />
            Mukta Gardens, Egmore,<br />
            Chennai,<br />
            Tamil Nadu - 600031
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <div className="footer-contact-item">
            <Phone size={18} />
            <span>+91 81228 27960</span>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} />
            <span>info@tarassolutions.com</span>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} />
            <span>manimaraprabu.kandasamy@tarassolutions.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Taras Systems and Solutions Pvt. Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;