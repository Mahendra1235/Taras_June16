import React from "react";
import {
  Cpu,
  ClipboardList,
  Activity,
  MonitorCog,
  GraduationCap,
  Users,
  Code2,
  MonitorSmartphone,
  FileText,
  Lightbulb,
  Briefcase,
  BookOpen,
  PenTool,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight,
  ChevronRight,
  PieChart,ArrowLeft
} from "lucide-react";

// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import heroImg from "../assets/VLSI_heroimg-1.webp";
import rtlImg from "../assets/RTL SECTION-1.webp";
import verificationImg from "../assets/Functional Verification-1.webp";
import simulationImg from "../assets/Simulation-1.webp";
import advancedImg from "../assets/Advnced VLSI concepts-1.webp";
import approachImg from "../assets/Learning Approch-1.webp";
import ctaImg from "../assets/Learning Approch-1.webp";


const focusAreas = [
  {
    icon: Cpu,
    title: "RTL Design & Digital\nSystem Engineering",
    bullets: [
      "Digital Logic Design Fundamentals",
      "Combinational & Sequential Circuit Design",
      "RTL Design using Verilog & System Verilog",
      "Finite State Machine (FSM) Design",
      "Arithmetic & Logic Unit (ALU), FIFO, Memory Design",
      "Synthesizable Coding Techniques",
      "Hardware Modelling and Design Optimization",
    ],
    image: rtlImg,
    imgAlt: "RTL design board",
  },
  {
    icon: ClipboardList,
    title: "Functional Verification\n& Validation",
    bullets: [
      "System Verilog Testbench Development",
      "Constrained Random Verification",
      "Functional Coverage Techniques",
      "Assertions (SVA) and Debugging",
      "Verification Planning and Methodology",
      "Reusable Verification Components",
      "Introduction to UVM-Based Verification",
    ],
    image: verificationImg,
    imgAlt: "Verification dashboard",
  },
  {
    icon: Activity,
    title: "Simulation & Industry\nDesign Flow",
    bullets: [
      "RTL Simulation and Waveform Analysis",
      "Design Debugging and Functional Validation",
      "ASIC Design and Verification Flow Overview",
      "Industry-Standard EDA Tool Usage",
    ],
    image: simulationImg,
    imgAlt: "Waveform simulation",
  },
  {
    icon: MonitorCog,
    title: "Advanced VLSI\nDesign Concepts",
    bullets: [
      "Bus Protocols and Interface Design",
      "Memory & Cache Fundamentals",
      "SoC Design and Integration Basics",
      "Verification of Complex Digital Systems",
    ],
    image: advancedImg,
    imgAlt: "SoC architecture",
  },
];

const whyChoose = [
  { icon: GraduationCap, label: "Experiential Learning\nThrough Hands-On\nRTL & Verification Labs" },
  { icon: Users, label: "Industry-Aligned\nCurriculum Designed\nby VLSI Experts" },
  { icon: Code2, label: "Real-World RTL Design,\nSimulation, and\nVerification Experience" },
  { icon: MonitorSmartphone, label: "Exposure to Industry-\nStandard EDA Tools\nand Design Flows" },
  { icon: FileText, label: "Project-Based Learning\nwith Design & Verification\nCase Studies" },
  { icon: Lightbulb, label: "Focus on Digital Design,\nDebugging, Verification,\nand Problem Solving" },
  { icon: Briefcase, label: "Portfolio and Career-\nOriented Project\nDevelopment" },
];

const learningSteps = [
  { icon: BookOpen, label: "Learn\nConcepts" },
  { icon: PenTool, label: "Design\nRTL" },
  { icon: MonitorSmartphone, label: "Simulate\n& Debug" },
  { icon: ShieldCheck, label: "Verify\nFunctionality" },
  { icon: CheckCircle2, label: "Validate\n& Optimize" },
  { icon: Globe, label: "Real-World\nApplications" },
];

const technologies = [
  { logo: "V", label: "Verilog", italic: true },
  { logo: "Sv", label: "System Verilog", italic: true },
  { icon: Cpu, label: "RTL Design" },
  { icon: ClipboardList, label: "Functional\nVerification" },
  { icon: ShieldCheck, label: "SVA\nAssertions" },
  { icon: PieChart, label: "Functional\nCoverage" },
  { logo: "UVM", label: "UVM\nConcepts" },
  { logo: "M", label: "ModelSim", italic: true },
  { logo: "Q", label: "QuestaSim" },
  { logo: "VCS", label: "Synopsys\nVCS", underline: true },
  { icon: Cpu, label: "ASIC Design\nFlow" },
];

const outcomes = [
  "Design RTL hardware modules",
  "Develop and execute verification testbenches",
  "Simulate and debug digital systems",
  "Understand ASIC & FPGA design workflows",
  "Apply verification methodologies effectively",
  "Work with industry-standard EDA tools",
  "Understand how RTL transforms into silicon",
];

const SectionTitle = ({ children }) => (
  <div className="vlsi-section-title">
    <h2>{children}</h2>
    <span className="vlsi-title-underline" />
  </div>
);

export default function VLSIPage() {
    const navigate = useNavigate();

  return (
  
    <div className="vlsi-page">
      <section className="vlsi-hero">
        <div className="vlsi-hero-inner">
          <div className="vlsi-hero-left">
            <button
              className="vlsi-back-button"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={16} /> Back
            </button>

            <div className="vlsi-tag">
              <span className="vlsi-tag-bar" />
              VLSI DESIGN &amp; VERIFICATION ENGINEERING
            </div>

            <h1 className="vlsi-hero-title">
              Empowering Future
              <br />
              Semiconductor Engineers
            </h1>
            <p className="vlsi-hero-text">
  Empowering students and professionals to build the next generation of semiconductor technologies through practical, industry-driven learning in
  VLSI Design, RTL Development, Functional Verification, and Digital System Design.
     </p>
             <p className="vlsi-hero-text">
               Our programs bridge the gap between academic knowledge and industry
               requirements by providing hands-on experience in designing, simulating,
               verifying, and validating digital hardware systems.
             </p>

            <div className="vlsi-hero-buttons">
              <button
                className="vlsi-btn vlsi-btn-primary"
                onClick={() => navigate("/contactus")}
              >
                Explore More <ArrowRight size={18} />
              </button>

              

            </div>
          </div>
          <div className="vlsi-hero-right">
            <div className="vlsi-hero-image-wrap">
              <img src={heroImg} alt="Semiconductor chip" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM FOCUS AREAS */}
      <section className="vlsi-section">
        <SectionTitle>Program Focus Areas</SectionTitle>
        <div className="vlsi-focus-grid">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div className="vlsi-focus-card" key={i}>
                <div className="vlsi-focus-content">
                  <div className="vlsi-focus-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="vlsi-focus-title">
                    {area.title.split("\n").map((l, idx) => (
                      <span key={idx}>
                        {l}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <ul className="vlsi-focus-list">
                    {area.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="vlsi-focus-image">
                  <img src={area.image} alt={area.imgAlt} loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE OUR PROGRAMS */}
      <section className="vlsi-section">
        <SectionTitle>Why Choose Our Programs?</SectionTitle>
        <div className="vlsi-why-grid">
          {whyChoose.map((item, i) => {
            const Icon = item.icon;
            return (
              <div className="vlsi-why-item" key={i}>
                <Icon size={46} strokeWidth={1.4} className="vlsi-why-icon" />
                <p className="vlsi-why-label">
                  {item.label.split("\n").map((l, idx) => (
                    <span key={idx}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="vlsi-section">
        <SectionTitle>Learning Approach</SectionTitle>
        <div className="vlsi-approach">
          <div className="vlsi-approach-image">
            <img src={approachImg} alt="Engineer at workstation" loading="lazy" />
          </div>
          <div className="vlsi-approach-right">
            <p className="vlsi-approach-text">
              Our learning approach emphasizes practical application through hands-on
              design, simulation and verification. Learners progress from fundamental
              concepts to advanced methodologies using industry-standard tools and
              real-world examples.
            </p>
            <div className="vlsi-steps">
              {learningSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={i}>
                    <div className="vlsi-step">
                      <div className="vlsi-step-bubble">
                        <Icon size={26} strokeWidth={1.8} color="#fff" />
                      </div>
                      <span className="vlsi-step-label">
                        {step.label.split("\n").map((l, idx) => (
                          <span key={idx}>
                            {l}
                            <br />
                          </span>
                        ))}
                      </span>
                    </div>
                    {i < learningSteps.length - 1 && (
                      <ChevronRight className="vlsi-step-arrow" size={22} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & PLATFORMS */}
      <section className="vlsi-section">
        <SectionTitle>Technologies &amp; Platforms</SectionTitle>
        <div className="vlsi-tech-bar">
          {technologies.map((t, i) => {
            const Icon = t.icon;
            return (
              <div className="vlsi-tech-item" key={i}>
                {t.logo ? (
                  <span
                    className={`vlsi-tech-logo ${t.italic ? "italic" : ""} ${
                      t.underline ? "underline" : ""
                    }`}
                  >
                    {t.logo}
                  </span>
                ) : (
                  <Icon size={36} strokeWidth={1.6} className="vlsi-tech-icon" />
                )}
                <span className="vlsi-tech-label">
                  {t.label.split("\n").map((l, idx) => (
                    <span key={idx}>
                      {l}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="vlsi-section vlsi-section-last">
        <SectionTitle>Learning Outcomes</SectionTitle>
        <div className="vlsi-outcomes">
          <div className="vlsi-outcomes-image">
            {/* <img src={outcomesImg} alt="Silicon wafer" /> */}
          </div>
          <div className="vlsi-outcomes-right">
            <h3 className="vlsi-outcomes-heading">
              Upon Completion,
              <br />
              Participants Will
              <br />
              Be Able To:
              
            </h3>
            <div className="vlsi-outcomes-cols">
              {[outcomes.slice(0, 4), outcomes.slice(4)].map((col, ci) => (
                <ul key={ci} className="vlsi-outcomes-list">
                  {col.map((o, i) => (
                    <li key={i}>
                      <CheckCircle2 size={20} className="vlsi-check" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
      
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
