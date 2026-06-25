import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Eye,
  FileText,
  Folder,
  HandHelping,
  MessageSquareText,
  Network,
  Sparkles,
  Target,
} from "lucide-react";

import heroImg from "../assets/genai-hero-exact (2)-1.webp";
import learningImg from "../assets/training outcome-1.webp";

function GenAICoursePage() {
  const navigate = useNavigate();

  const coreAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning Fundamentals",
      desc:
        "Build a strong foundation in AI concepts, machine learning techniques, and intelligent system development.",
    },
    {
      icon: Network,
      title: "Deep Learning & Neural Networks",
      desc:
        "Learn advanced neural network architectures and deep learning methodologies used in modern AI solutions.",
    },
    {
      icon: Eye,
      title: "Computer Vision & Image Processing",
      desc:
        "Develop systems capable of understanding, analyzing, and processing visual information.",
    },
    {
      icon: MessageSquareText,
      title: "Natural Language Processing (NLP)",
      desc:
        "Explore how machines understand, process, and generate human language.",
    },
    {
      icon: Sparkles,
      title: "Generative AI & Transformer Models",
      desc:
        "Gain practical exposure to modern Generative AI technologies and transformer-based architectures.",
    },
    {
      icon: Code2,
      title: "Real-Time AI Application Development",
      desc:
        "Build intelligent applications designed to solve real-world business and technology challenges.",
    },
    {
      icon: Folder,
      title: "Industry-Oriented Mini Projects & Capstone Projects",
      desc:
        "Apply your learning through hands-on projects that simulate real industry scenarios.",
    },
  ];

  const highlights = [
    { icon: HandHelping, label: "Hands-on\nLearning\nApproach" },
    { icon: FileText, label: "Project-Based\nImplementation" },
    { icon: Target, label: "Industry-Relevant\nUse Cases" },
    { icon: Cpu, label: "Real-Time AI &\nComputer Vision\nApplications" },
    { icon: Code2, label: "Python, OpenCV,\nTensorFlow &\nModern AI Tools" },
    { icon: BriefcaseBusiness, label: "Portfolio-Ready\nProjects" },
  ];

  const outcomes = [
    "Understand core AI and Machine Learning concepts",
    "Develop Deep Learning and Neural Network models",
    "Build Computer Vision and Image Processing applications",
    "Implement Natural Language Processing solutions",
    "Work with Generative AI and Transformer Models",
    "Develop portfolio-ready AI projects",
    "Apply AI technologies to solve real-world challenges",
  ];

  return (
    <div className="genai-page">
      <section className="genai-hero">
        <div className="genai-hero-left">
          <button
            className="genai-back-button"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} /> Back 
          </button>
          <div className="genai-kicker">AI & Emerging Technology Solutions</div>
          <h1>
            Empowering Future
            <br />
            Innovators with
            <br />
            Practical <span>AI Expertise.</span>
          </h1>
          <p className="genai-lead">
            We help students and professionals gain practical exposure to Artificial
            Intelligence, Machine Learning, Deep Learning, Computer Vision, and
            Generative AI through industry-focused learning experiences.
          </p>
          <p className="genai-sublead">
            Our programs are designed around real-world AI applications, enabling
            participants to build intelligent systems, explore modern AI technologies,
            and work on project-driven solutions used across various industries.
          </p>

          <div className="genai-hero-actions">
            <button className="genai-btn primary" onClick={() => navigate("/contactus")}>
              Explore More <ArrowRight size={18} />
            </button>
            {/* <button className="genai-btn secondary" onClick={() => navigate("/contactus")}>
              Download Brochure <Download size={17} />
            </button> */}
          </div>
        </div>

        <div className="genai-hero-right">
          <div className="genai-hero-image-wrap">
            <img
              src={heroImg}
              alt="Laptop displaying AI dashboards"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="genai-section">
        <div className="genai-section-head">
          <h2>What You'll Explore</h2>
        </div>

        <div className="genai-grid">
          {coreAreas.map((a) => (
            <div key={a.title} className="genai-card">
              <div className="genai-card-icon">
                <a.icon size={22} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="genai-keyhighlights">
        <div className="genai-section-head">
          <h2>Key Highlights</h2>
        </div>
        <div className="genai-keyhighlights-row">
          {highlights.map((h) => (
            <div key={h.label} className="genai-keyhighlights-item">
              <div className="genai-keyhighlights-ico">
                <h.icon size={18} />
              </div>
              <div className="genai-keyhighlights-text">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="genai-learning">
        <div className="genai-section-head">
          <h2>Learning Approach</h2>
        </div>
        <div className="genai-learning-grid">
          <img
            src={learningImg}
            alt="AI learning dashboard"
            loading="lazy"
            decoding="async"
          />
          <div className="genai-learning-copy">
            <p>
              Our practical and industry-focused methodology enables participants
              to gain real-world experience through hands-on implementation,
              project execution, and application-driven learning.
            </p>
            <p>
              By working on real-time use cases and guided projects, learners
              develop the technical skills and confidence required to build
              intelligent AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="genai-section outcomes">
        <div className="genai-section-head">
          <h2>Outcome</h2>
          <p>
            Gain practical experience in designing, developing, and deploying
            intelligent AI solutions while building a strong foundation in modern
            Artificial Intelligence technologies.
          </p>
        </div>

        <div className="genai-outcome-layout">
          <div className="genai-outcome-title">
            Upon Completion, Participants Will Be Able To:
            <span></span>
          </div>
          <div className="genai-outcomes-row">
            {outcomes.map((label) => (
              <div key={label} className="genai-outcome-pill">
                <CheckCircle2 className="genai-check" size={16} />
                <div className="genai-outcome-pill-text">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="genai-cta">
        <div>
          <h2>Ready to Build the Future with AI?</h2>
          <p>
            Gain practical skills, industry exposure, and hands-on experience in
            Artificial Intelligence and Emerging Technologies.
          </p>
        </div>
        <button className="genai-btn primary" onClick={() => navigate("/contactus")}>
          Get Started Today <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}

export default GenAICoursePage;
