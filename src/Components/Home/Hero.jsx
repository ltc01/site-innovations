import React, { useEffect, useRef } from "react";
import Herobg from "../../assets/Hero.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

const Hero = () => {
  const navigate = useNavigate();
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(leftRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
    tl.fromTo(rightRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "<");

    
    return () => {
      tl.kill(); 
    };
  }, []);

  const handleCardClick = () => {
    navigate("/pap");
  };

  return (
    <div className="bg-white dark:bg-[#080529] dark:text-white flex flex-col-reverse md:flex-row px-8 lg:px-20 lg:-mt-16 items-center">
      {/* Left Side: Heading and Content */}
      <div
        ref={leftRef}
        className="w-full flex md:pl-5 gap-y-1 pb-10 md:pb-0 flex-col lg:w-1/2 text-center md:text-left"
      >
        <h1 className="text-3xl lg:text-5xl font-bold">
          Create Your{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            One in a Million
          </span>{" "}
          Journey
        </h1>
        <p className="mt-5 dark:text-white text-black">
          Experience personalized learning designed to equip you with the skills to excel. Unlock new opportunities, grow your expertise, and take your next big step with confidence.
        </p>
        <div className="mt-6 flex justify-center md:justify-normal lg:justify-start space-x-4">
          <button
            onClick={() => navigate("/courses/college")}
            className="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-10 py-2 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span className="relative text-sm lg:text-base">Discover Your Path</span>
          </button>
        </div>
      </div>

      {/* Right Side: Slider */}
      <div
        ref={rightRef}
        className="w-full flex justify-center lg:items-center h-72 md:h-full lg:w-1/2"
      >
        <img className="object-cover" src={Herobg} alt="Right image" />
      </div>
    </div>
  );
};

export default Hero;
