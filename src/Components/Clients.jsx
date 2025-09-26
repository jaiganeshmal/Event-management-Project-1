import React from "react";
import { assets } from "../assets/global";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Clients = () => {
  const clientLogos = [
    assets.image2,
    assets.image3,
    assets.image4,
    assets.image5,
    assets.image6,
    assets.image7,
    assets.image8,
    assets.image9,
    assets.image10,
    assets.image11,
  ];

  return (
    <div className="w-full bg-white py-20 px-6 md:px-16">
      {/* Text Section */}
      <div className="text-left mb-16">
        <h3 className="text-2xl font-semibold text-[#053268] mb-2">
          Our Clients
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-[#053268]">Trusted</span> By Many Clients
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-6 border-1 border-gray-400 rounded-xl shadow hover:shadow-md transition">
              <img
                src={logo}
                alt={`Client ${index + 2}`}
                className="h-28 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
