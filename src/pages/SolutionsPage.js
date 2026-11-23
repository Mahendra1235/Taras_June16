import React, { useState } from 'react';

// import VLSICoursePage from '../TrainingComponents/VLSICoursePage';
// import AimlCoursePage from '../TrainingComponents/AimlCoursePage';
// import EmbeddedSystemsPage from '../TrainingComponents/EmbeededSystemsPage';
import GenAICoursePage from '../TrainingComponents/GenAICoursePage';

import MenuTabs from './MenuTab';
import COEPage from './COEPage';
import Projects from './Projects';

import vlsi from '../assets/vlsi.webp';
import genai from '../assets/Genai.webp';
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
import extraImage17 from '../assets/College logos/Sona college.webp';
import extraImage18 from '../assets/College logos/Dr. N.G.P. College.webp';
import extraImage19 from '../assets/College logos/rajalakshmi.webp';
import extraImage20 from '../assets/College logos/BANNARI.webp';
import extraImage21 from '../assets/College logos/EGS. PILLAY.webp';
import extraImage22 from '../assets/College logos/Chettinad.jpg';
import extraImage23 from '../assets/College logos/St.Joseph.webp';
import extraImage24 from '../assets/College logos/Achariya.webp';
import extraImage25 from '../assets/College logos/Manakula Vinayakar.webp';
import extraImage26 from '../assets/College logos/ADITYA.webp';
import extraImage27 from '../assets/College logos/NPR.webp';
import extraImage28 from '../assets/College logos/Dhanalakshmi college.webp';
import extraImage29 from '../assets/College logos/KSR.webp';
import extraImage30 from '../assets/College logos/Adhi-autonomous.png';
import extraImage31 from '../assets/College logos/Akshaya College.jpeg';
import extraImage32 from "../assets/College logos/ANIT's.png";
import extraImage33 from '../assets/College logos/ARASU college.png';
import extraImage34 from '../assets/College logos/AVS College of Technology.png';
import extraImage35 from '../assets/College logos/AVS_Engineering_College.png';
import extraImage36 from '../assets/College logos/Builders Engineering College-Kangeyam.png';
import extraImage37 from '../assets/College logos/Dhaanish Ahmed College.webp';
import extraImage38 from '../assets/College logos/Dr.Mahalingam college.png';
import extraImage39 from '../assets/College logos/Dr. Sivanthi Aditanar College of Engineering.png';
import extraImage40 from '../assets/College logos/Excel College of Engineering and Technology.png';
import extraImage41 from '../assets/College logos/Federal Institute of Science & Technology.png';
import extraImage42 from '../assets/College logos/Gnanamani College of Technology.png';
import extraImage43 from '../assets/College logos/Hindusthan Institute of Technology.jpg';
import extraImage44 from '../assets/College logos/Jawaharlal College of Engineering and Technology.png';
import extraImage45 from '../assets/College logos/JCT College of Engineering and Technology.webp';
import extraImage46 from '../assets/College logos/K.Ramakrishnan College.png';
import extraImage47 from '../assets/College logos/Karunya University.png';
import extraImage48 from '../assets/College logos/KCG College of Technology.png';
import extraImage49 from '../assets/College logos/Kongunadu College of Engineering and Technology.png';
import extraImage50 from '../assets/College logos/KSR Institute of Technology.png';
import extraImage51 from '../assets/College logos/Kumaraguru College of Technology.png';
import extraImage52 from '../assets/College logos/Mahendra Engineering College.png';
import extraImage53 from '../assets/College logos/Mar Ephraem College of Engineering & Technology.png';
import extraImage54 from '../assets/College logos/Muthayammal College of Engineering and Technology.webp';
import extraImage55 from '../assets/College logos/Nanda College of Engineering.png';
import extraImage56 from '../assets/College logos/New Prince Shri Bhavani College of Engineering.webp';
import extraImage57 from '../assets/College logos/PSNA College of Engineering and Technology.png';
import extraImage58 from '../assets/College logos/Sri Eshwar College of Engineering.webp';
import extraImage59 from '../assets/College logos/Sri Ramakrishna Institute of Technology.png';
import extraImage60 from '../assets/College logos/SRM ESHWAR Engineering College.jpg';
import extraImage61 from '../assets/College logos/Stella Marrys College of Engineering and Technology.png';
import extraImage62 from '../assets/College logos/Aditya Institute of Technology and Management-AP.png';


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
  { src: extraImage17, alt: 'Sona' },
  { src: extraImage18, alt: 'Dr.n.g.p' },
  { src: extraImage19, alt: 'rajalakshmi' },
  { src: extraImage20, alt: 'bannari' },
  { src: extraImage21, alt: 'EGS.Pillay' },
  { src: extraImage22, alt: 'Chettinad' },
  { src: extraImage23, alt: 'St.joseph' },
  { src: extraImage24, alt: 'Achariya' },
  { src: extraImage25, alt: 'Manakula Vinayakar' },
  { src: extraImage26, alt: 'Aditya' },
  { src: extraImage27, alt: 'NPR' },
  { src: extraImage28, alt: 'Dhanalakshmi' },
  { src: extraImage29, alt: 'KSR' },
  { src: extraImage16, alt: 'Veltech' },
  { src: extraImage30, alt: 'Adhi College of Engineering' },
  { src: extraImage31, alt: 'Akshaya College of Engineering and Technology' },
  { src: extraImage32, alt: 'Anil Neerukonda Institute of Technology & Sciences' },
  { src: extraImage33, alt: 'Arasu Engineering College' },
  { src: extraImage34, alt: 'AVS College of Technology' },
  { src: extraImage35, alt: 'AVS Engineering College' },
  { src: extraImage36, alt: 'Builders Engineering College' },
  { src: extraImage37, alt: 'Dhaanish Ahmed College of Engineering' },
  { src: extraImage38, alt: 'Dr. Mahalingam College of Engineering and Technology' },
  { src: extraImage39, alt: 'Dr. Sivanthi Aditanar College of Engineering' },
  { src: extraImage40, alt: 'Excel College of Engineering and Technology' },
  { src: extraImage41, alt: 'Federal Institute of Science & Technology' },
  { src: extraImage42, alt: 'Gnanamani College of Technology' },
  { src: extraImage43, alt: 'Hindusthan Institute of Technology' },
  { src: extraImage44, alt: 'Jawaharlal College of Engineering and Technology' },
  { src: extraImage45, alt: 'JCT College of Engineering and Technology' },
  { src: extraImage46, alt: 'K. Ramakrishnan College of Engineering' },
  { src: extraImage47, alt: 'Karunya University' },
  { src: extraImage48, alt: 'KCG College of Technology' },
  { src: extraImage49, alt: 'Kongunadu College of Engineering and Technology' },
  { src: extraImage50, alt: 'KSR Institute of Technology' },
  { src: extraImage51, alt: 'Kumaraguru College of Technology' },
  { src: extraImage52, alt: 'Mahendra Engineering College' },
  { src: extraImage53, alt: 'Mar Ephraem College of Engineering & Technology' },
  { src: extraImage54, alt: 'Muthayammal College of Engineering and Technology' },
  { src: extraImage55, alt: 'Nanda College of Engineering' },
  { src: extraImage56, alt: 'New Prince Shri Bhavani College of Engineering' },
  { src: extraImage57, alt: 'PSNA College of Engineering and Technology' },
  { src: extraImage58, alt: 'Sri Eshwar College of Engineering' },
  { src: extraImage59, alt: 'Sri Ramakrishna Institute of Technology' },
  { src: extraImage60, alt: 'SRM ESHWAR Engineering College' },
  { src: extraImage61, alt: 'Stella Marrys College of Engineering and Technology' },
  { src: extraImage62, alt: 'Aditya Institute of Technology and Management' },
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
  <div className={`course-grid ${activeTab === 'coe' ? 'course-grid-coe' : ''}`}>
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
                  width="200"
                  height="120"
                  decoding="async"
                />
              ))}

              {/* Duplicate for seamless loop */}
              {extraImages.map((img, i) => (
                <img
                  key={i + extraImages.length}
                  src={img.src}
                  alt={img.alt}
                  className="about-extra-image"
                  width="200"
                  height="120"
                  decoding="async"
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
