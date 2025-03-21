import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJquery, SiTailwindcss, SiFirebase, SiNetlify } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import Header from '../Componet/Header';

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('resume-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto" id="resume-section">
          
          {/* Title with Animated Gradient Effect */}
          <h2 className="text-4xl font-bold text-center mb-8 animate-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Resume
          </h2>

          {/* Education Section with Fade-in Effect */}
          <div className={`mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Education</h3>
            <div className="space-y-6">
              {[
                { title: "Diploma in Computer Engineering", year: "2023 - Present", school: "Arpit Institute of Technology", desc: "Studying core subjects like Web Development, Data Structures, and Database Management." },
                { title: "Secondary Education (10th Standard)", year: "2021 - 2023", school: "M.M Gandhi Vidhyalaya", desc: "Completed secondary education before enrolling in a diploma program." }
              ].map((edu, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-yellow-500/50">
                  <h4 className="text-xl font-bold">{edu.title}</h4>
                  <p className="text-gray-400">{edu.year}</p>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section with Neon Hover Effect */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300 ">
              {[
                { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML & CSS" },
                { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: "CSS" },
                { icon: <SiJquery className="text-blue-500 text-2xl" />, name: "jQuery" },
                { icon: <FaBootstrap className="text-purple-500 text-2xl" />, name: "Bootstrap" },
                { icon: <FaJs className="text-yellow-400 text-2xl" />, name: "JavaScript" },
                { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React.js" },
                { icon: <VscJson className="text-green-400 text-2xl" />, name: "Data Structures" },
                { icon: <SiTailwindcss className="text-blue-400 text-2xl" />, name: "Tailwind CSS" },
                { icon: <FaGitAlt className="text-red-500 text-2xl" />, name: "Git & GitHub" },
                { icon: <SiNetlify className="text-green-400 text-2xl" />, name: "Netlify" },
                { icon: <SiFirebase className="text-yellow-500 text-2xl" />, name: "Firebase" },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-3 rounded text-center shadow-md flex items-center justify-center gap-2 transition-all hover:shadow-yellow-400/50 hover:scale-105 cursor-pointer"
                >
                  {skill.icon} {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
