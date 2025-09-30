import React from "react";
import { assets } from "../assets/global";

const TopCompany = () => {
  return (
    <div className="w-[90%] mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Image */}
      <div className="relative">
        <img
          src={assets.image61}
          alt="Top Event Management"
          loading="lazy"
          className="w-full h-[450px] object-cover rounded-xl shadow-lg  transition-transform duration-500"
        />
        {/* Gradient Overlay (Optional for premium look) */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          One of the Top Event Management Companies in Pakistan
        </h2>

        <p className="text-gray-700 leading-relaxed text-base">
          Our belief at UC is that your events need to experience
          exceptional quality. Our premium event management services work to
          bring your vision to life with perfection so that each element
          demonstrates both your personal style and intended purpose.
        </p>

        <p className="text-gray-700 leading-relaxed text-base">
          Every grand wedding and sophisticated corporate event we plan receives
          flawless execution. Our team of experts utilizes innovation together
          with precision and their passion for perfection to develop engaging
          event experiences that exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default TopCompany;
