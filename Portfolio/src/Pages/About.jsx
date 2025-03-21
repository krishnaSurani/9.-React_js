import React from "react";
import Header from "../Componet/Header";
import image from "../assets/image.jpg"
import 'animate.css';


export default function About() {

  
  return ( 
  <>
    <Header/>
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center wow animate__animated animate__backInLeft">
          <img
            src={image}
            alt="Profile"
            className="rounded-lg w-80 md:w-full"
          />
        </div>

        {/* About Me Content */}
        <div className="space-y-4  wow animate__animated animate__backInRight">
          <h1 className="text-4xl font-bold">Hi There! I'm <span className="text-yellow-400">Krishna Surani</span></h1>
          <h2 className="text-yellow-400 text-xl">FullStack Developer</h2>
          <p className="text-gray-300">
          I am a Full-Stack Developer skilled in building dynamic, scalable web applications. I create seamless user experiences by combining frontend and backend expertise.</p>

          {/* Personal Details */}
          <div className="text-gray-400 text-sm md:text-base">
            <p><strong>Birthday:</strong> Saptember 07, 2007</p>
            <p><strong>Phone:</strong> +91 9974477226</p>
            <p><strong>Email:</strong> Krishnasurani07@gmail.com</p>
            <p><strong>Language:</strong> English, hindi, Gujrati</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>

          {/* Download CV Button */}
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Download CV
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
