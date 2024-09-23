import React, { useEffect, useRef } from "react";
import { FiBarChart2 } from "react-icons/fi";
import image10 from "../../assets/ITIE&Entre/teamwork6.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CareerSection1 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    // Animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="dark:bg-black dark:text-zinc-200 bg-[#fcfdff] px-6 py-12 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden">
      <main className="flex flex-col lg:flex-row items-center gap-4 justify-center w-11/12">
        {/* Text Section */}
        <div ref={textRef} className="text-center p-4 lg:w-1/2 lg:text-left">
          <h3 className="text-4xl dark:text-zinc-100 sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0a0a0a]">
            Career Opportunities at
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text leading-[1.3]">
              {" "}BAOIAM
            </span>
          </h3>
          <p className="text-sm mt-2 sm:text-lg md:text-xl dark:text-gray-600 text-[#0a0a0a] pt-5">
            At BAOIAM, we're dedicated to transforming education through
            innovative solutions. Join our dynamic team and contribute to
            shaping the future of learning.
          </p>
          {/* Search Bar */}
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <div className="max-w-xl mx-auto bg-white flex rounded-full text-left mt-12 border focus-within:border-gray-900 border-gray-500 lg:h-[60px] md:h-[50px]">
              <input
                type="text"
                required
                placeholder="Search for career opportunities..."
                className="w-full outline-none bg-transparent lg:text-lg md:text-sm sm:text-sm text-gray-800 px-4 py-0 text-xs"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-indigo-800 hover:bg-gradient-to-l transition-all text-white tracking-wide text-xs lg:text-xl md:text-sm sm:text-sm rounded-full lg:px-8 sm:px-6 md:px-8 py-3 px-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* Image and Stats Section */}
        <div ref={imageRef} className="relative aspect-square px-4 lg:w-1/2 h-96 flex justify-center">
          {/* Main Image */}
          <div className="relative rounded-md overflow-hidden h-full w-full flex justify-center">
            <img
              src={image10} // Replace with your image source
              alt="Job Finder Illustration"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Stats Box */}
          <div className="absolute z-30 bottom-4 right-1/2 translate-x-1/2 py-2 px-4 transition duration-150 mx-auto bg-white rounded-lg shadow-lg flex items-center hover:scale-105">
            <FiBarChart2 className="text-orange-500 w-8 h-8" />
            <div>
              <p className="lg:text-xl md:text-xl text-lg font-bold text-gray-800">20K+</p>
              <p className="lg:text-sm md:text-sm text-xs text-gray-500">People got hired</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
