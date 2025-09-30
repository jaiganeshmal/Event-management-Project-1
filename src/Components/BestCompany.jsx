import React from "react";
import { assets } from "../assets/global";
import { FaArrowRight } from "react-icons/fa6";

const BestCompany = () => {
    return (
        <div className="w-[90%] mx-auto py-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Left Side - Video */}
            <div className="md:col-span-2 relative rounded-xl overflow-hidden h-[450px] md:h-[450px]  ">
                <video
                    src={assets.video1}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain rounded-xl"
                />
                
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-3 flex flex-col space-y-2 md:p-0 p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#053268] leading-snug">
                    Choose The Best Event Management Company In Pakistan
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                    Our company leads event management in Pakistan by producing perfect
                    events in all categories especially corporate functions and weddings.
                    We align every aspect of your business events from conferences to
                    product launches and team activities with your organizational goals.
                    Our wedding planning services build extraordinary celebratory moments
                    through individualized themes, planning, decorations and flawless
                    execution. We design social and private events with unique aesthetics
                    and fun activities from start to finish.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                    From choosing your location, managing all logistics to delivering your
                    branding, we support you in making your event run without any
                    problems. From corporate functions to weddings and parties we deliver
                    memorable events that meet your expectations. Our team manages all
                    planning details so you can focus on experiencing your special events.
                </p>
                <button className="group flex items-center gap-2 w-fit bg-[#053268] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#03244d] transition-all duration-300">
                    Book Your Wedding Now
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>

    );
};

export default BestCompany;
