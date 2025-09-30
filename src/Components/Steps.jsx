import React from "react";
import { assets } from "../assets/global";

const Steps = () => {
    const steps = [
        {
            img: assets.image16,
            title: "Scope of Work",
            desc: "We will collect essential contact information and event details.",
        },
        {
            img: assets.image17,
            title: "First Contact",
            desc: "An Event Planner is assigned based on your requirements.",
        },
        {
            img: assets.image18,
            title: "Planning",
            desc: "Your project manager will contact you to begin the planning process.",
        },
        {
            img: assets.image19,
            title: "Proposal",
            desc: "A detailed proposal will be prepared and reviewed with you, either virtually or in person.",
        },
        {
            img: assets.image20,
            title: "Contract",
            desc: "Contracts are finalized, deposits are made, and the equipment is secured.",
        },
        {
            img: assets.image21,
            title: "Event Day",
            desc: "You host an unforgettable event that leaves everyone impressed!",
        },
    ];

    return (
        <div className="w-[90%] mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Steps Involving in Planning
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Event planning is a detailed process that requires creativity, precision,
                    and strategy. Each of these steps plays an important role in transforming
                    ideas into perfection.
                </p>
                <button className="bg-[#053268] text-white cursor-pointer font-semibold px-6 py-3 rounded-lg hover:scale-105 transition shadow-md">
                    Book Your Wedding Now
                </button>
            </div>

            {/* Right Grid Banners */}
            <div className="grid grid-cols-1 gap-4">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer h-32 md:h-16 transition-all duration-700 hover:h-28"
                    >
                        {/* Image */}
                        <img
                            src={step.img}
                            alt={step.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

                        {/* Title + Desc */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-10 text-center">
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="opacity-0 max-h-0 overflow-hidden text-xs mt-1 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 ease-in-out">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Steps;
