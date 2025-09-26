import React from "react";
import { assets } from "../assets/global"; // ✅ assets use karna hai
import { FaArrowRight } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={assets.image1} // 🔹 yahan image1 ayegi
            alt="Event"
            className="w-full md:w-[90%] h-[500px] md:h-[500px] rounded-xl shadow-lg object-cover "
          />
          {/* Decorative Shape */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#053268]/10 rounded-full -z-10"></div>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          {/* Small Heading */}
          <span className="bg-[#F4F4F4] inline-block px-5 py-1 text-sm font-semibold uppercase tracking-wide text-[#053268] rounded-md shadow-sm">
            Who We Are
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            <span className="text-[#053268]">Most</span> Trusted Event Planners in Karachi, Pakistan
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed text-justify">
            MARCEM Event Planner is a creative event planning and management company
            in Karachi that plans, designs, manages and executes your events from
            the start to the final day. We are the leading event planners in Karachi
            city who offer a wide range of services to cover all domains. From
            photography, to decor and placement of the elements, we know how to
            bring your ideas to reality, making the event look even more amazing.{" "}
            We as{" "}
            <span className="text-[#053268] font-medium">
              professional event planners in Karachi
            </span>{" "}
            will make sure you’re getting quality against the time and money
            invested.
          </p>

          {/* Button */}
          <button className="cursor-pointer flex items-center gap-3 bg-[#053268] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#064090] transition duration-300">
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
