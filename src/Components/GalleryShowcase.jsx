import React, { useState } from "react";
import { assets } from "../assets/global";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const GalleryShowcase = () => {
  const categories = ["all items", "corporate", "wedding", "catering"];

  const images = {
    corporate: [assets.image22, assets.image23, assets.image24, assets.image25, assets.image26, assets.image27, assets.image28, assets.image29, assets.image30],
    wedding: [assets.image31, assets.image32, assets.image33, assets.image34, assets.image35, assets.image36, assets.image37, assets.image38, assets.image39, assets.image40],
    catering: [assets.image41, assets.image42, assets.image43, assets.image44, assets.image45, assets.image46, assets.image47, assets.image48, assets.image49, assets.image50, assets.image51],
  };

  const allImages = [...images.corporate, ...images.wedding, ...images.catering];
  const [activeCategory, setActiveCategory] = useState("all items");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImages = () => {
    if (activeCategory === "all items") return allImages;
    return images[activeCategory];
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? getImages().length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === getImages().length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-[90%] mx-auto py-8 bg-[#ECF3F7] rounded-xl shadow-sm">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        <span className="text-[#004394]">Our</span> Gallery Showcase
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-lg font-medium shadow-md transition-all duration-300 
              ${
                activeCategory === cat
                  ? "bg-[#004394] text-white"
                  : "bg-white text-black hover:bg-[#004394] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
        {getImages().map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              loading="lazy"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay hover effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-white font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl hover:text-gray-400"
          >
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl hover:text-gray-400"
          >
            <FaArrowLeft />
          </button>

          {/* Current Image */}
          <img
            src={getImages()[currentIndex]}
            alt="preview"
            loading="lazy"
            className="max-h-[80vh] max-w-[90%] rounded-lg shadow-lg object-contain"
          />

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl hover:text-gray-400"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryShowcase;
