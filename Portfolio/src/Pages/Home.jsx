import React from "react";
import Header from "../Componet/Header";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";
import image from "../assets/image2.jpg";
import bgGif from "../assets/gif.gif"; // Import GIF

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section with GIF Background */}
      <div 
        className="w-full relative flex flex-col items-center justify-center text-center py-30"
        style={{
          backgroundImage: `url(${bgGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={image}
          alt="Krishna Surani"
          className="h-[150px] w-[150px] rounded-full mx-auto mt-4 border-4 border-yellow-400"
        />
        <h1 className="text-3xl md:text-5xl font-bold mt-6">
          Hi, I am <span className="text-yellow-400">Krishna Surani</span>
        </h1>
        <p className="max-w-[800px] mx-auto px-6 md:px-12 pt-6 text-lg text-gray-300 pb-10">
          I am a full-stack developer, crafting clean and efficient code for seamless web experiences. 
          I build interactive, pixel-perfect frontends and robust backends for high-performance applications.
        </p>
      </div>

      {/* Other Sections (No GIF) */}
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}
