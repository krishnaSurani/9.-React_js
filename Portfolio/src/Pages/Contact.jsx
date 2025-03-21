import React from "react";
import Header from "../Componet/Header";

export default function Contact() {
  return (
    <>
      <Header /><br /><br />
      <div className="min-h-screen bg-black text-white flex justify-center py-12 px-6">
        <div className="w-full max-w-5xl">
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Just say Hello</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-800 text-white rounded h-32 focus:outline-none"
                ></textarea>
                <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out via email or phone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 text-xl">📧</span>
                  <p className="text-gray-300">Krishnasurani07@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 text-xl">📞</span>
                  <p className="text-gray-300">+91 9974477226</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 text-xl">📍</span>
                  <p className="text-gray-300">Rajkot, India</p>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                <a href="https://www.linkedin.com/in/krishna-surani-s07/" className="text-gray-400 hover:text-yellow-400 text-xl">🔗 LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl">🐦 Twitter</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl">📷 Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
