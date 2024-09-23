import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Program = ({ title, data }) => {
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for each button
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: button,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: index * 0.1, // Stagger the animations
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-5 mx-auto lg:w-10/12 mt-10 sm:px-4 xs:px-4" id="courses">
      <h1
        ref={titleRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
      >
        {title} Programs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
        {data?.map((category, index) => (
          <button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Program;
