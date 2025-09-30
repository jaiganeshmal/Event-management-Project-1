import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaSnapchatGhost,
    FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { assets } from "../assets/global";
import { Link } from "react-router-dom";


const navLinks = [
    { name: "Best Event Planner", path: "/best-event-planner" },
    { name: "Corporate", path: "/corporate" },
    { name: "Wedding", path: "/wedding" },
    { name: "Catering", path: "/catering" },
    { name: "Giveaway", path: "/giveaway" },
    { name: "Blog Posts", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
];

const Footer = () => {
    return (
        <footer
            className="w-[98%] mx-auto mt-2 border border-red-700 rounded-xl overflow-hidden"
            style={{
                backgroundImage: `url(${assets.image12})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className=" w-full h-full px-6 md:px-10 py-6 space-y-6">
                {/* Top CTA Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left Text */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="h-[1px] w-6 bg-white"></span>
                            <p className="text-white text-sm uppercase tracking-wide">
                                Book an Appointment Today
                            </p>
                            <span className="h-[1px] w-6 bg-white"></span>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-3">
                            Make Your Event Unforgettable with Our Expert Planners
                        </h2>
                    </div>

                    {/* Right Button */}
                    <button className="group flex items-center cursor-pointer gap-2 px-6 py-3 border border-white text-white bg-black rounded-full shadow-[0_0_15px_white] hover:shadow-[0_0_25px_white] transition-all duration-300">
                        Book New
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* White underline */}
                <div className="w-full h-[1px] bg-white opacity-40"></div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
                    {/* 1st Column - Logo + About */}
                    <div className="space-y-4">
                        <img
                            src={assets.logo}
                            alt="UC Logo"
                            className="w-44 object-contain"
                            loading="lazy"
                        />
                        <p className="text-sm leading-relaxed">
                            UC Event Planner Services has the expertise and passion to
                            deliver a truly unforgettable experience.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, link: "#" },
                                { icon: <FaInstagram />, link: "#" },
                                { icon: <FaYoutube />, link: "#" },
                                { icon: <FaLinkedinIn />, link: "#" },
                                { icon: <FaSnapchatGhost />, link: "#" },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#004394] hover:text-white transition-all duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ✅ 2nd Column - NavLinks */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">About Us</h3>
                        <ul className="space-y-2 text-sm">
                            {navLinks.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-[#004394] transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3rd Column - Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="mt-1 text-white" />
                                <span>
                                    Plot # 15-C, mezzanine floor, 4th Zamzama Commercial Lane,
                                    D.H.A. Phase 5, Karachi, Sindh 75500
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="mt-1 text-white" />
                                <span>
                                    Hasan Extension apartment, U-1, Block 13/A Gulshan-e-Iqbal,
                                    Karachi, 75300
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-white" />
                                <span>info.com.pk</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-white" />
                                <span>+92 39 99999999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-white" />
                                <span>+92 21 58978598</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
