import React from 'react';
// import MadhavanProfile from '../assets/Team/Madhavapandian Photo id.jpg';
import VenkateshProfile from '../assets/Team/Venkatesh Photo id...jpeg';
import DanielProfile from '../assets/Team/Daniel Photo id.jpeg';
import ArumugamProfile from '../assets/Team/Arumugam Photo id.jpg';
import JammalProfile from '../assets/Team/Jammal Photo id.jpeg';
import UdhayaProfile from '../assets/Team/Udhaya Photo id.jpg';
import MarimuthuProfile from '../assets/Team/Marimuthu Photo id.jpg';
import AmudhuProfile from '../assets/Team/Amudhu Photo id.png';
import ManimaranProfile from '../assets/Team/Manimaraprabu.jpeg';
import GokilaProfile from '../assets/Team/Gokila Photo id.png';
import HarshaProfile from '../assets/Team/Harsha photo.jpeg';
import HariKrishnaProfile from '../assets/Team/Hari Krishna S.jpg';

const teamMembers = [

  {
    name: 'Venkatesh Rajakutti',
    role: 'Director - VLSI/AI',
    image: VenkateshProfile,
    bio: 'VLSI & software expert with 14+ years of experience in RTL design, UVM, Verilog/SystemVerilog, and semiconductor protocols. Skilled in C/C++, Java, Python, and AI/ML, DL with 580+ real-time projects. Trained 6000+ students and led 60+ academic programs.'
   },
  {
    name: 'Amutha Swami Nathan',
    role: 'LEAD DESIGN ENGINEER - Embedded & IOT',
    image: AmudhuProfile,
    bio: 'Embedded Systems & IoT Expert with 14+ years of experience , Specialized in Communication Protocols, RTOS, and AI for Edge Computing. Proficient in Embedded C and microcontroller-based system development. Trained 5000+ students and conducted workshops and Faculty Development Programs across 50+ institutions, delivering industry-focused, hands-on learning experiences.'
  },
  {
    name: 'Marimuthu',
    role: 'LEAD DESIGN ENGINEER - Embedded & IOT',
    image: MarimuthuProfile,
    bio: 'Embedded Engineering Expert with 16+ years in real-time systems and industrial safety. Specialized in Azure RTOS, SMP FreeRTOS, multi-core SoCs (Cortex-M85, RISC-V), and TSN/Matter protocols. Passionate about firmware, Embedded C/C++, and Industry 4.0 training (10,000+ engineers trained).'
  },
{
    name: 'Udhaya Kumar',
    role: 'LEAD DESIGN ENGINEER - VLSI',
    image: UdhayaProfile,
    bio: 'Verification and training professional with 12+ years of experience in Verilog/SystemVerilog, UVM-based validation, and leading technical training initiatives while driving quality, code coverage, and cross-functional project execution.'
  },


  {
    name: 'Arumuga selvam ',
    role: 'Design Engineer - AIML',
    image: ArumugamProfile,
    bio: 'AI & ML Engineer with 5+ years of experience in computer vision, deep learning, and edge AI deployment, specializing in building and mentoring intelligent systems using Python, TensorFlow, and OpenCV.'
  },

  {
    name: 'Jes Evans Daniel J',
    role: 'Design Engineer - VLSI',
    image: DanielProfile,
    bio: 'With 3+ years of experience in Digital Electronics, Verilog HDL, SystemVerilog (SV), and UVM, he has strong expertise in RTL design and verification methodologies, including simulation and testbench development. He has also trained and mentored 1000+ students in digital design and VLSI verification, helping them build industry-ready skills.'
  },

{
    name: 'Syed Jamalulla Basha',
    role: 'Design Engineer - Embedded & IOT',
    image: JammalProfile,
    bio: 'With 3+ years of experience in Embedded Systems Engineer and Trainer specializing in PCB design, ESP32-based AI/IoT solutions, and microcontroller development.'
  },
{
    name: 'Gokilarani',
    role: 'HR Manager',
    image: GokilaProfile,
    bio: 'With 10+ years of experience in talent acquisition, employee engagement, and HR operations. She leads HR strategies and workforce management, fostering a positive work culture and supporting organizational growth.'
  },
{
    name: 'Manimaraprabu kandasamy',
    role: 'Manager - Corporate Relations',
    image: ManimaranProfile,
    bio: 'With 10+ years of experience in corporate partnerships and campus recruitment. He builds strategic alliances and manages client relationships to drive business growth and strong industry collaboration.'
  },
{
    name: 'Harshavardhan',
    role: 'Manager - Business development ',
    image: HarshaProfile,
    bio: 'With 3+ years of experience in business development in the semiconductor design industry, he focuses on building client relationships, identifying new business opportunities, and driving growth. He works closely with industry partners and plays a key role in expanding the companies presence and creating long-term business partnerships.'
  },
{
    name: 'Hari Krishna S',
    role: 'Sr. Design Engineer - VLSI',
    image: HariKrishnaProfile,
    bio: 'With 4.5+ years of experience in VLSI design and verification, Hari Krishna S is a skilled VLSI professional and trainer with expertise in Verilog, SystemVerilog, and UVM, specializing in RTL design, simulation, and testbench development, and passionate about mentoring aspiring engineers in building industry-ready skills.'
  },

  
];

function Team() {
  return (
    <div className="team-page">
      <h1>Meet Our <strong>Expert Team</strong></h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="team-img"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
