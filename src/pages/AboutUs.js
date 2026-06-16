import React from 'react';
import FounderImage from '../assets/Founder (2).png';
import AdvisorImage from '../assets/Advisor_new.png';
import {  Target, Rocket } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="about-container">
      <h1>About Us</h1>
      <p>
        <strong>TARAS</strong>  is a technology-driven company specializing in advanced product development and engineering solutions. We design and build future-ready systems by transforming innovative ideas into real-world applications.

      </p>
      <p>
With over six years of experience, we work across domains such as VLSI, FPGA, Embedded Systems, RISC-V, IoT, AI, Cloud Computing, and Robotics, delivering scalable and reliable solutions through focused R&D and hands-on engineering.

We also collaborate with academic institutions to provide industry-grade exposure through real product development environments, contributing to the growth of skilled, industry-ready engineers—while remaining firmly rooted as a product and technology solutions company.      </p>

     

<div className="leadership-section">

  <div className="profile-card">
    <div className="profile-image">
      <img
        src={FounderImage}
        alt="Founder Dr.K.Thanushkodi"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="profile-content">
      <h2>Dr. K. Thanushkodi</h2>
      <h4>Founder</h4>
      <p>
        TARAS SYSTEMS AND SOLUTIONS was founded by a team of seasoned professionals
        with over 25 years of experience in the engineering and technology ecosystem.
        Former Syndicate Member of Anna University with 40+ years of academic
        and institutional leadership.
      </p>
    </div>
  </div>


  <div className="profile-card">
    <div className="profile-image">
      <img
        src={AdvisorImage}
        alt="Advisor Karthik Nagappan"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="profile-content">
      <h2>Karthik Nagappan</h2>
      <h4>SVP-Technology </h4>
      <p>
        Qualified FPGA/ASIC Design Engineer with deep expertise in RTL Design and Verification.
        Contributed to 15+ ASIC/SoC tapeouts and 20+ FPGA implementations for complex
        communication systems. Led 50+ projects across 10+ customers globally.
      </p>
    </div>
  </div>

</div>




      <div className="qualities">
        <h2>Our Approach</h2>
        <ul>
          <li>Product innovation backed by deep technical expertise</li>
          <li>Collaborative development with academic and industry partners</li>
          <li>Hands-on skill building through live projects and real-world problem solving</li>
        </ul>
      </div>

      <div className="vision-mission">
        <div className="vision">
          <div className="title-icon-about">
              <Target size={40} />
            </div>
          <h3>Our Vision</h3>
          <p><strong>Innovate - </strong> Provide New Tools and Technology to skill Academic Engineers.</p>
          <p><strong>Integrate - </strong> Find Opportunities in the Technology World and Enable Skilled Engineers.</p>
          <p><strong>Elevate - </strong> Post Joining Tech World helping Engineers to Upskill to bridge the Skill Gap.</p>
        </div>
        <div className="mission">
          <div className="title-icon-about">
              <Rocket size={40} />
            </div>
          <h3>Our Mission</h3>
          <ul>
            <li>Accelerate product development through collaborative R&D and prototyping</li>
            <li>Build future-ready engineers through real-time, application-driven learning</li>
            <li>Foster creativity and problem-solving through a culture of innovation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
