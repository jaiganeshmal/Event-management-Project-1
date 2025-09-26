import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/global";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-between overflow-hidden">
      {/* Background Video */}
      <video
        src={assets.header} // 🔹 apna video yahan dalna
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Dark Shade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Form Section */}
      <div className="hidden md:block relative z-10 w-[60%] md:w-[350px] bg-white/80 rounded-2xl shadow-xl p-8 md:mr-16 md:ml-auto mx-auto ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Book Your Event
        </h2>
        <form className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone"
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col">
            <label htmlFor="eventType" className="text-sm font-medium text-gray-700">
              Select Event Type
            </label>
            <select
              id="eventType"
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Corporate Events"
            >
              <option>Corporate Events</option>
              <option>Wedding Events</option>
              <option>Catering</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Bottom Section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white z-10 w-full px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 sm:gap-16">

          {/* Column 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-4 sm:gap-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition shadow-md">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-500 hover:text-white transition shadow-md">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition shadow-md">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-700 hover:text-white transition shadow-md">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="uppercase tracking-widest font-semibold text-sm sm:text-lg">
              Corporate
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-4 sm:gap-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition shadow-md">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-500 hover:text-white transition shadow-md">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition shadow-md">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-blue-700 hover:text-white transition shadow-md">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="uppercase tracking-widest font-semibold text-sm sm:text-lg">
              Personalize
            </p>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Hero;
