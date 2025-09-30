import React from "react";
import { assets } from "../assets/global";
import { FaArrowRight } from "react-icons/fa6";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Blog Data
const blogs = [
    {
        img: assets.image62,
        title: "What is Pre-Wedding? Complete Details",
        desc: "Joyful celebration marking love, traditions, bonding before the wedding day.",
    },
    {
        img: assets.image63,
        title: "Avari Tower Karachi Complete Details for Wedding and Corporate Events",
        desc: "Avari Tower Karachi Complete Details for Wedding and Corporate Events.",
    },
    {
        img: assets.image64,
        title: "Walima Decor and Setup",
        desc: "Planning your Walima? Let’s create something beautiful together.",
    },
    {
        img: assets.image66,
        title: "10 Nikka Setup Decor Ideas",
        desc: "Your vision, your theme - our expertise. If you come without any clear idea, we offer a wide collection.",
    },
    {
        img: assets.image67,
        title: "Movenpick 5 Star Hotel Karachi-2025 Update Info",
        desc: "Mövenpick Hotel and Resorts is a premium Swiss hotel; it’s well known. It’s not easy to beat.",
    },
    {
        img: assets.image68,
        title: "Marriot Hotel Karachi",
        desc: "Elegant hospitality, premium amenities, central location — your comfort and convenience perfectly.",
    },
    {
        img: assets.image69,
        title: "What is a Dholki Event",
        desc: "Dholki is a joyful pre-wedding event filled with music, dance, laughter, and traditions.",
    },
    {
        img: assets.image70,
        title: "Beach View Club Karachi - Complete Details-Events, Services and More",
        desc: "Beach View Club Karachi is an exclusive seaside club offering dining, sports, and leisure facilities.",
    },
];

const Blogs = () => {
    return (
        <div className="w-[90%] mx-auto py-6 ">
            {/* Highlight Title */}
            <h2 className="text-xl font-bold text-[#C62828] mb-2">Our Blogs</h2>

            {/* Heading Row */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Don&apos;t Miss Our Latest Updates
                </h3>
                <button className="group flex items-center gap-2 bg-[#FBC02D] text-white px-6 py-3 rounded-lg shadow-md  transition-all duration-300 mt-6 md:mt-0">
                    Explore More
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
            >
                {blogs.map((blog, idx) => (
                    <SwiperSlide key={idx} className="h-full">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                            <div className="overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{blog.title}</h4>
                                    <p className="text-sm text-gray-600 mt-2">{blog.desc}</p>
                                </div>
                                <button className="w-fit mt-4 text-black hover:text-white font-semibold border border-[#FBC02D] hover:bg-[#FBC02D] px-4 py-2 rounded-lg  transition-all duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
};

export default Blogs;
