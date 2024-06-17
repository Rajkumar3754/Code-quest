import React from "react";
import { MdOutlineLocalOffer, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import bgecom from "../assets/bgecom.png"; // Import the image

const Hero = () => {
  // Style object for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${bgecom})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "calc(100vh - 80px)", // Adjusted minHeight to fill viewport height minus header height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "40px 24px", // Adjusted vertical padding
    textAlign: "center",
  };

  return (
    <section
      className="relative bg-gradient-to-br from-purple-200 to-pink-200 bg-container py-20 mt-20" // Increased py-20
      style={backgroundImageStyle} // Apply background image style
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Fashion Fusion Hub
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8"> {/* Adjusted text size and line height */}
              Step into the world of high fashion at Fashion Fusion Hub! From
              runway-inspired outfits to everyday essentials, we have everything
              you need to express your unique style. Enjoy seamless shopping,
              fast delivery, and exceptional customer service. Fashion Fusion Hub
              - Where Style Meets Elegance!
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-1 mb-6"> {/* Increased margin bottom */}
              <MdStar className="text-yellow-500" />
              <MdStar className="text-yellow-500" />
              <MdStar className="text-yellow-500" />
              <MdStar className="text-yellow-500" />
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8"> {/* Adjusted text size */}
              176K <span className="font-normal">Excellent Reviews</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to={"/shop"}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl"
              >
                Shop Now
              </NavLink>
              <NavLink
                to={"/offers"}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg border border-gray-300 flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl"
              >
                <MdOutlineLocalOffer className="text-3xl" /> {/* Adjusted icon size */}
                <span className="ml-2">View Offers</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
