import React from "react";
import { assets } from "../assets/global";

const Services = () => {
  const cards = [
    {
      img: assets.image13,
      title: "Corporate Event Planning",
      desc: "We are the best corporate event planners in Karachi, organizing all kinds of seminars, product launches, ceremonies & more. We’ve worked with various multinational clients making their events successful.",
    },
    {
      img: assets.image14,
      title: "Wedding Event Planning",
      desc: "As a leading wedding event planner in Karachi, we take care of your big day from start to finish. We take care of wedding photography, catering, decoration and everything possible to make your wedding memorable for your family and friends.",
    },
    {
      img: assets.image15,
      title: "Best Catering Services",
      desc: "Marcem event planners offer the best catering services in Karachi. It’s not just about the food but the taste that lasts for years. Explore our catering menu and choose the best cuisine for your special day.",
    },
  ];

  return (
    <div
      className="relative w-[90%] mx-auto py-20 px-6 rounded-2xl shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${assets.image12})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Being a premier event planning company in Karachi, we cover a wide range
          of services. Whether it’s corporate events, weddings or catering
          services, we guarantee 100% quality-driven outcomes.
        </p>
        <button className="bg-white text-black cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:scale-105 transition">
          Book Your Services
        </button>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay with animation */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/80 transition-all duration-500 p-6">
              {/* Title (always visible at bottom) */}
              <h3 className="text-lg font-semibold text-white transform group-hover:-translate-y-16 transition duration-500">
                {card.title}
              </h3>

              {/* Desc + Btn (appear on hover, gap reduced) */}
              <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-500 ease-in-out">
                <p className="text-sm text-white mt-2 mb-2">{card.desc}</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
