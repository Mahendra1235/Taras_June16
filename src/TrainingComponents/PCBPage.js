import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  Factory,
  Wrench,
  FlaskConical,
  UserCheck,
  MonitorSmartphone,
  Settings,
  Lightbulb,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import heroImg from "../assets/pcb hero-1.webp";
import learningImg from "../assets/Learning Approch-1.webp";
import ctaImg from "../assets/Learning Approch-1.webp";

function PCBPage() {
  const navigate = useNavigate();

  const focusAreas = [
    {
      icon: Cpu,
      title: "Electronic Circuit Design Fundamentals",
    //   image: circuitImg,
      points: [
        "Electronic Components & Circuit Analysis",
        "Analog & Digital Electronics",
        "Power Supply Design Basics",
        "Component Selection & Datasheet Analysis",
        "Bill of Material details Analysis [BOM]",
        "Design for Reliability & Manufacturability",
      ],
    },
    {
      icon: Layers,
      title: "PCB Design & Layout Engineering",
    //   image: layoutImg,
      points: [
        "Schematic Capture & Circuit Development",
        "Logic symbol creation.",
        "Single & Multi-Layer PCB Design",
        "Component Placement Optimization",
        "Design rule check",
        "Routing Techniques & Best Practices",
        "Grounding & Power Distribution",
      ],
    },
    {
      icon: Zap,
      title: "High-Speed PCB Design",
    //   image: highspeedImg,
      points: [
        "Signal Integrity Fundamentals",
        "Controlled Impedance Routing",
        "Differential Pair Routing",
        "Crosstalk Reduction",
        "EMI / EMC Design",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing & Product Development",
    //   image: manufacturingImg,
      points: [
        "Design for Manufacturing (DFM)",
        "Design for Assembly (DFA)",
        "PCB Fabrication Processes",
        "Gerber Generation",
        "Prototype Validation",
      ],
    },
    {
      icon: Wrench,
      title: "Hardware Testing & Validation",
    //   image: testingImg,
      points: [
        "PCB Inspection & Debugging",
        "Oscilloscope Applications",
        "Logic Analyzer Usage",
        "Functional Testing",
        "Design Verification",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: FlaskConical,
      title: "Hands-On PCB Design & Hardware Labs",
    },
    {
      icon: UserCheck,
      title: "Industry-Aligned Curriculum",
    },
    {
      icon: Cpu,
      title: "Real-World PCB Design Projects",
    },
    {
      icon: MonitorSmartphone,
      title: "Exposure to Industry Tools",
    },
    {
      icon: Settings,
      title: "End-to-End Product Development Experience",
    },
    {
      icon: Lightbulb,
      title: "Focus on Optimization & Validation",
    },
    {
      icon: Briefcase,
      title: "Career-Oriented Hardware Training",
    },
  ];

  const outcomes = [
    "Design electronic circuits and professional schematics",
    "Develop single-layer, multi-layer, and high-speed PCB layouts",
    "Apply PCB routing and signal integrity principles",
    "Generate manufacturing-ready Gerber documentation",
    "Understand PCB fabrication and assembly processes",
    "Debug and validate hardware designs",
    "Execute complete PCB development cycles",
    "Build portfolio-ready PCB and hardware projects",
  ];

  return (
    <div className="pcb-page">

      {/* HERO SECTION */}

      <section className="pcb-hero">

        <div className="pcb-hero-left">

          <button
            className="pcb-back-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="pcb-badge">
            PCB DESIGN ENGINEERING
          </div>

          <h1>
            Designing The
            <br />
            Electronics That
            <br />
            Power The <span>Modern World.</span>
          </h1>

          {/* <p className="pcb-lead">
            Empowering students and professionals to develop industry-ready
            expertise in PCB Design, Electronic Hardware Development,
            Signal Integrity, and Product Engineering.
          </p> */}

          <p className="pcb-sublead">
            Gain hands-on experience in schematic design, PCB layout,
            manufacturing documentation, design validation, and hardware
            prototyping using industry-standard tools and workflows.
          </p>

          <div className="pcb-actions">

            <button
              className="pcb-btn primary"
              onClick={() => navigate("/contactus")}
            >
              Explore More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        <div className="pcb-hero-right">
          <img src={heroImg} alt="PCB Design Engineering" loading="lazy" />
        </div>

      </section>

      {/* PROGRAM FOCUS */}

      <section className="pcb-section">

        <div className="pcb-section-title">
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


            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="pcb-section">

        <div className="pcb-section-title">
          <h2>Why Choose Our Programs?</h2>
        </div>

        <div className="pcb-grid">

          {whyChoose.map((item) => (
            <div className="why-item" key={item.title}>
              <item.icon size={40} />
              <p>{item.title}</p>
            </div>
          ))}

        </div>

      </section>

      {/* LEARNING APPROACH */}

      <section className="learning-section">

        <div className="learning-content">

          <h2>Learning Approach</h2>

          <p>
            Our practical and industry-focused methodology enables
            participants to work directly on real-world PCB design
            projects, hardware development workflows, and product
            engineering challenges.
          </p>

          <p>
            Through guided design exercises, simulations, prototype
            development, and validation activities, learners gain the
            confidence required to design reliable and manufacturable
            electronic products.
          </p>

        </div>

        <div className="learning-image">
          <img src={learningImg} alt="Learning Approach" loading="lazy" />
        </div>

      </section>

      {/* TECHNOLOGIES */}

      <section className="pcb-section">

        <div className="pcb-section-title">
          <h2>Technologies & Platforms</h2>
        </div>

        <div className="tech-grid">

          <div className="tech-card">

            <h3>PCB Design Tools</h3>

            <ul>
              <li>Altium Designer</li>
              <li>Cadence OrCAD</li>
              <li>Cadence Allegro</li>
              <li>KiCad</li>
              <li>Autodesk Eagle</li>
            </ul>

            {/* <img src={toolsImg} alt="" /> */}

          </div>

          <div className="tech-card">

            <h3>Simulation & Analysis</h3>

            <ul>
              <li>LTspice Simulation</li>
              <li>Signal Integrity Analysis</li>
              <li>Power Integrity Concepts</li>
              <li>Design Validation Techniques</li>
            </ul>

            {/* <img src={simulationImg} alt="" /> */}

          </div>

          <div className="tech-card">

            <h3>Manufacturing & Standards</h3>

            <ul>
              <li>IPC Standards</li>
              <li>PCB Fabrication Workflows</li>
              <li>PCB Assembly Processes</li>
              <li>Gerber Documentation</li>
            </ul>

            {/* <img src={standardsImg} alt="" /> */}

          </div>

        </div>

      </section>

      {/* OUTCOMES */}

      <section className="pcb-section">

        <div className="pcb-section-title">
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

      {/* CTA */}

      <section
        className="pcb-cta"
        style={{
          backgroundImage: `url(${ctaImg})`,
        }}
      >

        <div className="pcb-cta-content">

          <h2>
            Ready To Design The Next Generation
            Of Electronic Products?
          </h2>

          <p>
            Gain hands-on experience in PCB Design, Hardware Development,
            Signal Integrity, and Product Engineering through industry-focused
            learning and real-world projects.
          </p>

        </div>

        <button
          className="pcb-btn primary"
          onClick={() => navigate("/contactus")}
        >
          Get Started Today
          <ArrowRight size={18} />
        </button>

      </section>

    </div>
  );
}

export default PCBPage;