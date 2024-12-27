import React from 'react';
import {ReactTyped} from 'react-typed'; // Ensure you have installed react-typed: npm install react-typed
import { FaInstagram,FaLinkedinIn ,FaEnvelope, FaYoutube } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="w-screen h-screen pt-20 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 flex-grow justify-center items-center text-white text-center">
      <div className="max-w-2xl h-screen flex-grow mx-auto p-4">
        {/* Profile Image */}
        <img
          src="img.png"
          alt="Profile Pic"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />

        {/* Name and Role */}
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Pallela Sarath</h1>
        <h2 className="text-2xl font-semibold mb-4">I'm a</h2>

        {/* Typewriter Effect */}
        <ReactTyped
          className="text-xl font-semibold"
          strings={[
            'ECE Undergrad',
            'Web Developer',
            'Software Developer',
            'ML Enthusiast',
            'Tech Enthusiast',
            'Youtuber',
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-4">
        <a
            href="https://www.linkedin.com/in/pallela-sarath/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaLinkedinIn size={24} />
        </a>
          <a
            href="https://www.instagram.com/sarathchandhan_19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:sarathchandhan19@gmail.com"
            className="hover:text-gray-200"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.youtube.com/@ShadowBeast_YT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1jGg6N9RVhF4yWxpEWVec2ku7RjXyoCTq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-semibold text-gradient-to-r from-yellow-500 via-red-500 to-pink-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Resume
          </a>
        </div>
        
      </div>
      <footer className="bg-gray-800 w-screen text-white py-2">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Pallela Sarath Chandhan</p>
    </div>
  </footer>
    </section>

    
  );
};

export default HeroSection;
