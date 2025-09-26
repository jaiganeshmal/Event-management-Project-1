import React from "react";

const Loader = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-black/90 z-[9999]">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

            {/* Text */}
            <p className="absolute bottom-20 text-white text-lg tracking-widest animate-pulse">
                Loading...
            </p>
        </div>
    );
};

export default Loader;
