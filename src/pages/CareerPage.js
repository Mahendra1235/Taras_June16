import React from "react";

const CareerPage = () => {
  return (
    <div className="career-page">

      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-container">
          <div className="career-hero-content">

            <span className="career-badge">
              JOIN OUR TEAM
            </span>

            <h1 className="career-title">
              Build Your Future with
              <span> TARAS Systems & Solutions</span>
            </h1>

            <p className="career-description">
              At TARAS, we innovate, integrate, and elevate technology
              solutions in Semiconductor Systems, Embedded Systems, AI, and
              Industry-focused engineering services. Join us to work on
              cutting-edge technologies and build solutions that shape the
              future.
            </p>

          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="career-section">
        <div className="career-container">

          <h2 className="section-title">
            Why Work With Us?
          </h2>

          <div className="career-grid">

            <div className="career-card">
              <h3>Innovation First</h3>
              <p>
                Work on next-generation VLSI, FPGA, Embedded Systems,
                and AI technologies.
              </p>
            </div>

            <div className="career-card">
              <h3>Learning & Growth</h3>
              <p>
                Gain hands-on experience through real-world projects,
                mentoring, and continuous learning.
              </p>
            </div>

            <div className="career-card">
              <h3>Collaborative Culture</h3>
              <p>
                Join a passionate team dedicated to innovation and
                engineering excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Opportunities */}
      {/* <section className="opportunities-section">
        <div className="career-container">

          <h2 className="section-title">
            Current Opportunities
          </h2>

          <div className="opportunity-box">

            <h3>We're Always Looking for Talent</h3>

            <p>
              We welcome applications from passionate professionals
              and fresh graduates interested in:
            </p>

            <ul>
              <li>VLSI Design & Verification</li>
              <li>FPGA Development</li>
              <li>Embedded Systems Engineering</li>
              <li>AI & Machine Learning</li>
              <li>Software Development</li>
              <li>Technical Sales & Business Development</li>
            </ul>

          </div>
        </div>
      </section> */}

      {/* Contact */}
      <section className="career-contact-section">
        <div className="career-container">

          <h2 className="section-title">
            Apply Now
          </h2>

          <p className="contact-subtitle">
            Ready to be part of a growing technology company?
            Send your resume and become part of our innovation journey.
          </p>

          <div className="contact-card">

            <h3>Career Contact</h3>
            <hr/>
            <br/>


            <p><strong>Manimaraprabu K</strong></p>
            <p><strong>[Manager - Corporate Relations]
</strong></p>
            <p>Phn 📞: 81228 27960</p>
            <p>Email ✉️: manimaraprabu.kandasamy@tarassolutions.com</p>

            {/* <button className="apply-btn">
              Submit Your Resume
            </button> */}

          </div>

        </div>
      </section>

    </div>
  );
};

export default CareerPage;