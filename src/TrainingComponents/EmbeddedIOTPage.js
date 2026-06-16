import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Wifi,
  Cloud,
  FlaskConical,
  UserCheck,
  MonitorSmartphone,
  Settings,
  Lightbulb,
  Briefcase,
  CheckCircle,
} from "lucide-react";

/* ==========================
   IMPORT YOUR IMAGES
========================== */

import heroImg from "../assets/Embeddedhero.png";
import embeddedImg from "../assets/Embeddedgrid.png";
import iotImg from "../assets/IOT.png";
import edgeImg from "../assets/SmartTechnologies.png";

import learningImg from "../assets/Learning Approch.png";

import devPlatformImg from "../assets/Developement platfrm-removebg-preview.jpg";
import mqttImg from "../assets/Connectivity&communictn-removebg-preview.jpg";
import hardwareImg from "../assets/hardware&integrtn-removebg-preview.jpg";

// import outcomeImg from "../assets/Learning Approch.png";
import ctaImg from "../assets/training outcome.png";

function EmbeddedIOTPage() {
  const navigate = useNavigate();

  const focusAreas = [
    {
      icon: Cpu,
      title: "Embedded Systems Engineering",
      image: embeddedImg,
      points: [
        "Microcontroller & Microprocessor Architecture",
        "Embedded C Programming & Firmware Development",
        "Real-Time Embedded System Design",
        "Hardware-Software Integration",
        "Device Driver Fundamentals",
      ],
    },
    {
      icon: Wifi,
      title: "Internet of Things (IoT)",
      image: iotImg,
      points: [
        "IoT Architecture & Ecosystem",
        "Sensor Networks & Data Acquisition",
        "Cloud Connectivity & Remote Monitoring",
        "MQTT, HTTP",
        "Smart Device Development",
      ],
    },
    {
      icon: Cloud,
      title: "Smart Technologies & Edge Computing",
      image: edgeImg,
      points: [
        "Edge AI for Embedded Devices",
        "Industrial IoT Applications",
        "Automation & Control Systems",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: FlaskConical,
      title: "Experiential Learning Through Hands-On Labs",
    },
    {
      icon: UserCheck,
      title: "Industry-Aligned Curriculum Designed by Experts",
    },
    {
      icon: Cpu,
      title: "Real-Time Hardware and IoT Implementation",
    },
    {
      icon: MonitorSmartphone,
      title: "Exposure to Modern Development Platforms",
    },
    {
      icon: Settings,
      title: "Project-Based Learning Methodology",
    },
    {
      icon: Lightbulb,
      title: "Focus on Innovation, Problem Solving & Product Design",
    },
    {
      icon: Briefcase,
      title: "Portfolio and Career-Oriented Project Development",
    },
  ];

  const outcomes = [
    "Design and develop embedded systems",
    "Build connected IoT applications",
    "Create firmware using Embedded C",
    "Implement cloud-enabled monitoring solutions",
    "Integrate sensors, actuators, and communication modules",
    "Develop Industrial IoT and Edge Computing applications",
    "Design automation and control systems",
    "Build portfolio-ready embedded and IoT projects",
  ];

  return (
    <div className="iot-page">

      {/* ================= HERO ================= */}

      <section className="iot-hero">

        <div className="iot-hero-left">

          <button
            className="iot-back-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="iot-badge">
            EMBEDDED SYSTEMS & IoT
          </div>

          <h1>
            Building Intelligent
            <br />
            Connected Systems
            <br />
            for the <span>Future.</span>
          </h1>

          <p className="iot-lead">
            Empowering students and professionals to build the next generation
            of intelligent devices through practical, industry-driven learning
            in Embedded Systems, IoT, Edge Computing, and Smart Automation.
          </p>

          <p className="iot-sublead">
            Our programs bridge the gap between academic concepts and
            real-world implementation by providing hands-on experience in
            designing, developing, and deploying connected systems.
          </p>

          <div className="iot-actions">

            <button
              className="iot-btn primary"
              onClick={() => navigate("/contactus")}
            >
              Explore More
              <ArrowRight size={18} />
            </button>

            {/* <button className="iot-btn secondary">
              Download Brochure
              <Download size={18} />
            </button> */}

          </div>

        </div>

        <div className="iot-hero-right">
          <img src={heroImg} alt="Embedded Systems and IoT" />
        </div>

      </section>

      {/* ================= FOCUS AREAS ================= */}

      <section className="iot-section">

        <div className="iot-section-title">
          <h2>Program Focus Areas</h2>
        </div>

        <div className="focus-grid">

          {focusAreas.map((item) => (
            <div className="focus-card" key={item.title}>

              <div className="focus-icon">
                <item.icon size={34} />
              </div>

              <h3>{item.title}</h3>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <img src={item.image} alt={item.title} />

            </div>
          ))}

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="iot-section">

        <div className="iot-section-title h2">
          <h2>Why Choose Our Programs?</h2>
        </div>

        <div className="why-grid">

          {whyChoose.map((item) => (
            <div className="why-item" key={item.title}>

              <item.icon size={40} />

              <p>{item.title}</p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= LEARNING ================= */}

      <section className="learning-section">

        <div className="learning-content">

          <h2>Learning Approach</h2>

          <p>
            Our practical and industry-focused methodology enables
            participants to work directly with embedded hardware,
            sensors, communication modules, and IoT platforms.
          </p>

          <p>
            Through guided projects, laboratory exercises, and
            real-world implementation scenarios, learners gain the
            confidence and technical expertise required to develop
            modern embedded and connected solutions.
          </p>

        </div>

        <div className="learning-image">
          <img src={learningImg} alt="Learning Approach" />
        </div>

      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="iot-section">

        <div className="iot-section-title h2">
          <h2>Technologies & Platforms</h2>
        </div>

        <div className="tech-grid">

          <div className="tech-card">

            <h3>Development Platforms</h3>

            <ul>
              <li>STM32 Microcontrollers</li>
              <li>ESP32 Development Boards</li>
              <li>Embedded C Programming</li>
              <li>Python for Embedded Applications</li>
            </ul>

            <img src={devPlatformImg} alt="" />

          </div>

          <div className="tech-card">

            <h3>Connectivity & Communication</h3>

            <ul>
              <li>MQTT Protocol</li>
              <li>HTTP Communication</li>
              <li>Cloud IoT Platforms</li>
              <li>Wireless Communication Modules</li>
            </ul>

            <img src={mqttImg} alt="" />

          </div>

          <div className="tech-card">

            <h3>Hardware & Integration</h3>

            <ul>
              <li>Sensors & Data Acquisition Systems</li>
              <li>Actuators & Control Devices</li>
              <li>Edge Computing Platforms</li>
              <li>IoT Dashboards & Monitoring Systems</li>
            </ul>

            <img src={hardwareImg} alt="" />

          </div>

        </div>

      </section>

      {/* ================= OUTCOMES ================= */}

      <section className="iot-section">

        <div className="learning-section-title h2">
          <h2>Learning Outcomes</h2>
        </div>

        <div className="outcome-layout">

          <div className="outcome-left">

            <h3>
              Upon Completion,
              Participants Will
              Be Able To:
            </h3>

          </div>

          <div className="outcome-right">

            {outcomes.map((item) => (
              <div key={item} className="outcome-item">

                <CheckCircle size={18} />

                <span>{item}</span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section
        className="iot-cta"
        style={{
          backgroundImage: `url(${ctaImg})`,
        }}
      >

        <div className="iot-cta-content">

          <h2>
            Ready to Build the Next Generation
            of Connected Devices?
          </h2>

          <p>
            Gain hands-on experience in Embedded Systems,
            IoT, Edge Computing, and Smart Automation through
            industry-focused learning and real-world projects.
          </p>

        </div>

        <button
          className="iot-btn primary"
          onClick={() => navigate("/contactus")}
        >
          Get Started Today
          <ArrowRight size={18} />
        </button>

      </section>

    </div>
  );
}

export default EmbeddedIOTPage;