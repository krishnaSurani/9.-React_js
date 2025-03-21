import React from "react";
import Header from "../Componet/Header";
import { Eye } from "lucide-react";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import 'animate.css';


export default function Work() {
  const projects = [
    { id: 1, img: web1, title: "Restaurant Website", desc: "A stylish site showcasing menu, chefs, services, and reservations.", link: "https://beautiful-crumble-e57c7d.netlify.app/" },
    { id: 2, img: web2, title: " Eco Awareness Website", desc: " Promotes sustainability and green living.", link: "https://jade-bunny-a1a471.netlify.app/" },
    { id: 3, img: web3, title: "Business Growth", desc: "Creative solutions for business success.", link: "https://thriving-cactus-334e4e.netlify.app/" },
    { id: 4, img: web4, title: "Website Design Agency", desc: "Building websites that generate leads and growth.", link: "https://marvelous-gingersnap-7720f0.netlify.app/" },
    { id: 5, img: web5, title: "Digital Solutions with GP", desc: "Expert digital marketing and business solutions.", link: "https://aquamarine-kelpie-209c4f.netlify.app/" },
    { id: 6, img: web6, title: "Astrology & Zodiac Insights", desc: "Astrology website with zodiac signs, horoscopes, and readings.", link: "https://clever-donut-bf7cc6.netlify.app/" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">PORTFOLIO</h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 wow animate__animated animate__bounceIn">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              {/* Image Container with Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Overlay with Title, Description & Preview Button */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 text-sm text-center px-4">{project.desc}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition mt-4"
                >
                  <Eye size={20} className="text-black" /> Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
