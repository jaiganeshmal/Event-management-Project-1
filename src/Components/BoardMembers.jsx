import React from "react";
import { assets } from "../assets/global";
import { FaArrowRight } from "react-icons/fa6";

const members = [
  { img: assets.image57, name: "Muhammad Shariq Afaq", role: "CEO" },
  { img: assets.image58, name: "Muhammad Umaiz Afaq", role: "Director" },
  { img: assets.image59, name: "Faiza Muhammad Shariq", role: "Director" },
  { img: assets.image60, name: "Muhammad Junaid Afaq", role: "Director" },
];

const BoardMembers = () => {
  return (
    <div className="w-[90%] mx-auto py-16">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#053268]">Meet</span> Our Board Members
        </h2>

        <button className="group flex items-center gap-2 bg-[#053268] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#03244d] transition-all duration-300 mt-6 md:mt-0">
          Explore More
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
