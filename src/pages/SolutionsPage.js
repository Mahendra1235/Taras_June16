import React, { useState } from 'react';

// import VLSICoursePage from '../TrainingComponents/VLSICoursePage';
// import AimlCoursePage from '../TrainingComponents/AimlCoursePage';
// import EmbeddedSystemsPage from '../TrainingComponents/EmbeededSystemsPage';
import GenAICoursePage from '../TrainingComponents/GenAICoursePage';

import MenuTabs from './MenuTab';
import COEPage from './COEPage';
import Projects from './Projects';

import vlsi from '../assets/vlsi.webp';
import genai from '../assets/genai...webp';
import embeddediot from '../assets/Embeddedcoursehero.webp';
import pcbimg from '../assets/Tech-pcb.webp';


import COE from '../assets/COE1.webp';
import projectsImg from '../assets/ComingSoon.webp';
import ProductsAndOfferings from '../ProductComponents/ProductsAndOfferings';

// Academic association logos
import extraImage1 from '../assets/College logos/Lakireddy Balireddy College(LBRCE)  Logo.webp';
import extraImage2 from '../assets/College logos/Hindustan.webp';
import extraImage3 from '../assets/College logos/Knowledge.webp';
import extraImage4 from '../assets/College logos/eswari.webp';
import extraImage5 from '../assets/College logos/karpagam.webp';
import extraImage6 from '../assets/College logos/kl-university-logo.webp';
import extraImage7 from '../assets/College logos/loyola.webp';
import extraImage8 from '../assets/College logos/m.kumaraswamy.webp';
import extraImage9 from '../assets/College logos/panimalar.webp';
import extraImage10 from '../assets/College logos/psr.webp';
import extraImage11 from '../assets/College logos/rajalakshmi.webp';
import extraImage12 from '../assets/College logos/reva-uni.webp';
import extraImage13 from '../assets/College logos/sairam.webp';
import extraImage14 from '../assets/College logos/sri venkateswara.webp';
import extraImage15 from '../assets/College logos/srm.webp';
import extraImage16 from '../assets/College logos/veltech.webp';
import EmbeddedIotPage from '../TrainingComponents/EmbeddedIOTPage';
import VLSIPage from '../TrainingComponents/VLSIPage'
import PCBPage from '../TrainingComponents/PCBPage';

const extraImages = [
  { src: extraImage1, alt: 'LBRCE' },
  { src: extraImage2, alt: 'Hindustan' },
  { src: extraImage3, alt: 'Knowledge Institute' },
  { src: extraImage4, alt: 'Easwari Engineering College' },
  { src: extraImage5, alt: 'Karpagam' },
  { src: extraImage6, alt: 'KL University' },
  { src: extraImage7, alt: 'Loyola' },
  { src: extraImage8, alt: 'Kumaraswamy' },
  { src: extraImage9, alt: 'Panimalar' },
  { src: extraImage10, alt: 'PSR' },
  { src: extraImage11, alt: 'Rajalakshmi' },
  { src: extraImage12, alt: 'REVA University' },
  { src: extraImage13, alt: 'Sairam' },
  { src: extraImage14, alt: 'Sri Venkateswara' },
  { src: extraImage15, alt: 'SRM' },
  { src: extraImage16, alt: 'Veltech' },
];

const data = {
  training: [
    {
      key: 'vlsi',
      title: 'VLSI Design',
      description: 'Master VLSI design, verification, and chip development using industry-standard tools and workflows.',
      image: vlsi,
      component: VLSIPage,
    },
    // {
    //   key: 'embedded',
    //   title: 'Embedded Systems',
    //   description:
    //     'Intro to Embedded C, IoT hardware interfacing, and real-time OS using ARM, IoT and RTOS.',
    //   image: embeddedsystems,
    //   component: EmbeddedSystemsPage,
    // },
    // {
    //   key: 'aiml',
    //   title: 'Edge AI',
    //   description: 'Covers Python, ML algorithms, and deployment pipelines.',
    //   image: aiml,
    //   component: AimlCoursePage,
    // },
    {
      key: 'genai',
      title: 'GenAI',
      description: 'Learn. Build. Innovate. Lead the AI Future with Generative AI.',
      image: genai,
      component: GenAICoursePage,
    },
     {
      key: 'embeddediot',
      title: 'Embedded & IOT',
      description: 'Build smart connected devices with Embedded & IoT technologies.',
      image: embeddediot,
      component: EmbeddedIotPage,
    },
     {
      key: 'pcb',
      title: 'PCB',
      description: 'Develop industry-ready skills in PCB design, signal integrity, board layout, and hardware prototyping.',
      image: pcbimg,
      component: PCBPage,
    },
  ],
  coe: [
    {
      key: 'coemain',
      title: 'Center of Excellence',
      description:
        'Advanced R&D and project-based learning in VLSI, GenAI, PCB and Embedded Systems & IoT.',
      image: COE,
      component: COEPage,
    },
  ],
  projects: [
    {
      key: 'projects',
      title: 'Projects',
      description: 'This section showcases our project portfolio.',
      image: projectsImg,
      component: Projects,
    },
  ],
};

function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCourseKey, setSelectedCourseKey] = useState(null);

  const currentCourses = data[activeTab] || [];
  const selectedCourse = currentCourses.find(
    item => item.key === selectedCourseKey
  );

  // Individual course view
  if (selectedCourse) {
    const CourseComponent = selectedCourse.component;
    return (
      <div className={`solutions-container ${selectedCourse.key === 'genai' ? 'solutions-genai-detail' : ''}`}>
        {/* <button
          className="back-button"
          onClick={() => setSelectedCourseKey(null)}
        >
          ← Back to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button> */}
        <CourseComponent />
      </div>
    );
  }

  return (
    <div className="solutions-container">
      {/* Tabs */}
      <div className="solutions-tabs-wrapper">
        <MenuTabs
          activeTab={activeTab}
          onTabChange={key => {
            setActiveTab(key);
            setSelectedCourseKey(null);
          }}
        />
      </div>

      {/* Products */}
      {activeTab === 'products' && <ProductsAndOfferings />}

      {/* Training / COE / Projects cards */}
      {/* {activeTab !== 'products' && (
        <div className="course-grid">
          {currentCourses.map(({ key, title, description, image }) => (
            <div key={key} className="course-card">
              <div className="card-image">
                <img src={image} alt={title} />
              </div>

              <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button
                  className="explore-btn"
                  onClick={() => setSelectedCourseKey(key)}
                >
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      )} */}
      {activeTab !== 'products' && (
  <div className="course-grid">
    {currentCourses.map(({ key, title, description, image }) => (
      <div
        key={key}
        className="course-card"
        onClick={() => setSelectedCourseKey(key)}
      >
        <div className="card-image">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    ))}
  </div>
)}


      {/* ✅ Academic Associations – TRAINING ONLY */}
      {activeTab === 'training' && (
        <>
          <h3 className="course-grid-h1">Our Academic Associations</h3>

          <div className="about-images-marquee">
            <div className="about-images-track">
              {extraImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="about-extra-image"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              ))}

              {/* Duplicate for seamless loop */}
              {extraImages.map((img, i) => (
                <img
                  key={i + extraImages.length}
                  src={img.src}
                  alt={img.alt}
                  className="about-extra-image"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SolutionsPage;
