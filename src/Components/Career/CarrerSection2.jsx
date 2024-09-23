import React, { useEffect, useRef } from "react";
import icon1 from "../../assets/Images/bank.png";
import icon3 from "../../assets/Images/condo.png";
import icon4 from "../../assets/Images/food-serve.png";
import icon6 from "../../assets/Images/learning (2).png";
import icon7 from "../../assets/Images/placeholder.png";
import icon8 from "../../assets/Images/medal.png";
import icon9 from "../../assets/Images/office (1).png";
import icon10 from "../../assets/Images/technical-support.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CarrerSection2 = () => {
  const benefitsRef = useRef([]);

  const benefits = [
    {
      title: "Large Beautiful Office",
      description: "Enjoy a spacious beautiful office.",
      icon: icon3,
    },
    {
      title: "Great Co-Workers",
      description: "Work with supportive colleagues.",
      icon: icon9,
    },
    {
      title: "Easy Location",
      description: "Conveniently located office.",
      icon: icon7,
    },
    {
      title: "Education Opportunities",
      description: "Continuous learning and development.",
      icon: icon6,
    },
    {
      title: "Free Lunch & Snacks",
      description: "Enjoy free meals and snacks every day.",
      icon: icon4,
    },
    {
      title: "Performance Awards",
      description: "Get rewarded.",
      icon: icon8,
    },
    {
      title: "Technical Support",
      description: "You get support.",
      icon: icon10,
    },
    {
      title: "Finance And Banking",
      description: "You get finance support.",
      icon: icon1,
    },
  ];

  useEffect(() => {
    benefitsRef.current.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1, // Stagger the animations
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefit,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white text-black dark:text-white dark:bg-black flex flex-col">
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-15 lg:px-0 xl:px-0 m-4 md:m-8">
        <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Employee{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Benefits and Perks
          </span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:pl-20 lg:pr-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (benefitsRef.current[index] = el)}
              className="p-4 md:p-6 flex flex-col items-center cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-white hover:bg-gray-100 transition border border-gray-300 rounded-lg shadow-sm lg:mt-0"
            >
              {/* Image Icon */}
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 h-12 mb-4"
              />
              {/* Title */}
              <h2 className="text-lg md:text-lg font-bold dark:text-zinc-400 text-gray-900 text-center mb-2">
                {benefit.title}
              </h2>
              {/* Description */}
              <p className="text-sm text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
