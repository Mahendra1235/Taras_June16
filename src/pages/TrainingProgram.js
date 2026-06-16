import React from "react";
import { FaBolt, FaMicrochip, FaRobot, FaCalendarAlt, FaClock, FaRupeeSign } from "react-icons/fa";
import { 
  FaUniversity,
  FaIdCard,
  FaHashtag,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope
} from "react-icons/fa";
import vlsiPDF from "../assets/vlsi.pdf";
import embeddedPDF from "../assets/embedded.pdf";
import aimlPDF from "../assets/ai-ml.pdf";

function TrainingProgram() {
  return (
    <div className="training-wrapper">

      <h1 className="main-title">Summer <span>Internship Programs [May-2026]</span></h1>
      <p className="subtitle">Master industry-relevant skills through hands-on training from world-class experts</p>

      {/* AVAILABLE DOMAINS */}
      <section className="section">
        <h2 className="section-title"><FaBolt /> Available Domains</h2>
        <p className="section-subtitle">Download the curriculum and explore our specialized programs</p>

        <div className="domains-grid">
          <div className="domain-card">
            <FaBolt className="domain-icon" />
            <h3>VLSI Design & Verification</h3>
            <p>Master RTL design, UVM, Verilog/SystemVerilog</p>
            <button onClick={() => window.open(vlsiPDF, "_blank")} className="download-btn">
              Download Curriculum ↓
            </button>
          </div>

          <div className="domain-card">
            <FaMicrochip className="domain-icon" />
            <h3>Embedded & IoT</h3>
            <p>Learn RTOS, device drivers, and edge computing</p>
            <button onClick={() => window.open(embeddedPDF, "_blank")} className="download-btn">
              Download Curriculum ↓
            </button>
          </div>

          <div className="domain-card">
            <FaRobot className="domain-icon" />
            <h3>AI & Machine Learning</h3>
            <p>Explore cutting-edge AI/ML techniques</p>
            <button onClick={() => window.open(aimlPDF, "_blank")} className="download-btn">
              Download Curriculum ↓
            </button>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="section">
        <h2 className="section-title"><FaBolt /> Registration</h2>

        <div className="register-box">
          <p>Join our next batch and start your journey today</p>

          <a
            href="https://docs.google.com/forms/d/1xMpA7HjNeeqEC3CnCR8QZypX1W-E8L4WxgT6ihuFAzU/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn"
          >
            Register Now →
          </a>
        </div>
      </section>

      {/* PROGRAM SCHEDULE */}
      <section className="section">
        <h2 className="section-title"><FaCalendarAlt /> Program Schedule</h2>

        <div className="schedule-grid">
          <div className="schedule-card">
            <FaCalendarAlt className="schedule-icon" />
            <h3>Batch 1</h3>
            <p>15 May 2026 – 30 May 2026</p>
          </div>

          <div className="schedule-card">
            <FaClock className="schedule-icon" />
            <h3>Duration</h3>
            <p>5:30 PM – 8:00 PM</p>
          </div>
        </div>
      </section>

      {/* PROGRAM FEE */}
      <section className="section">
        <h2 className="section-title"><FaRupeeSign /> Program Fee</h2>

        <div className="fee-box">
          <h1 className="fee-price">₹2,336</h1>
          <p>Including GST – Student Special Offer</p>
          <ul>
            <li>Expert-led sessions</li>
            <li>Hands-on projects</li>
            <li>Industry certifications</li>
          </ul>
        </div>
      </section>

<section className="account-section">
  <h2 className="section-title">
    <FaUniversity className="section-icon" /> Account Details
  </h2>

  <div className="info-box">
    <p><FaIdCard className="info-icon" /> <strong>Account Name:</strong> TARAS SYSTEMS AND SOLUTIONS</p>
    <p><FaUniversity className="info-icon" /> <strong>Bank Name:</strong> Canara Bank</p>
    <p><FaHashtag className="info-icon" /> <strong>Account Number:</strong> 120028736418</p>
    <p><FaHashtag className="info-icon" /> <strong>IFSC Code:</strong> CNRB0005480</p>
    <p><FaMapMarkerAlt className="info-icon" /> <strong>Bank Address:</strong> Kovaipudur, Coimbatore, Tamilnadu - 641042</p>
  </div>
</section>

<section className="contact-section">
  <h2 className="section-title">
    <FaUser className="section-icon" /> Contact
  </h2>

  <div className="info-box">
    <p><FaUser className="info-icon" /> <strong>HarshaVardhan P</strong> — 93849 31363</p>
    <p><FaEnvelope className="info-icon" /> Email: harshavardhan.p@tarassolutions.com</p>

    <p><FaUser className="info-icon" /> <strong>Manimaraprabu K</strong> — 81228 27960</p>
    <p><FaEnvelope className="info-icon" /> Email: manimaraprabu.kandasamy@tarassolutions.com</p>
  </div>
</section>
    </div>
  );
}

export default TrainingProgram;