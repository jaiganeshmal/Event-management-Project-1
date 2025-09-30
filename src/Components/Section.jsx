import React from "react";
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const Section = () => {
  return (
    <div className="w-full bg-white text-center py-8 px-6">
      {/* Top Line + Text + Line */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <span className="h-[2px] w-16 bg-black"></span>
        <p className="text-black font-semibold tracking-wide uppercase">
          Welcome To UC Event
        </p>
        <span className="h-[2px] w-16 bg-black"></span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Best Event Planners In{" "}
        <span className="text-[#C62828]">Karachi</span> Pakistan
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-4">
        UC Event Planner comprises of the best event planner in Karachi that
        make your event memorable. We deliver transformational elements to any
        event that goes beyond the normal expectations of our clients. From
        adding creative elements to the event, to making it look alluring and
        attractive, we as a team of the best event planners know how to make
        your day a great one!
      </p>

      {/* Social Icons */}
      <div className="flex gap-8 justify-center text-2xl text-gray-800">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://snapchat.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaSnapchatGhost />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Section;
