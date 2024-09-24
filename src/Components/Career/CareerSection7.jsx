import React, { useEffect, useRef } from "react";
import work from "../../assets/Images/work7.jpg";
import work1 from "../../assets/Images/work8.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CareerSection7 = () => {
  const animRefs = useRef([]);

  useEffect(() => {
    animRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2, // Stagger the animations
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="mb-20 pt-0">
      {/* Slide Section */}
      <div className="animediv1 w-full px-4 my-8 lg:my-16">
        <div
          ref={(el) => (animRefs.current[0] = el)}
          className="flex flex-col md:flex-row justify-center items-center w-full"
        >
          <div className="w-[100%] h-[200px] md:w-[20%] px-4 lg:px-0">
            <img
              src={work}
              alt="mission-image"
              className="w-full h-full rounded-tr-[40px] rounded-bl-[40px] object-cover shadow-[10px_-10px_#4338ca] sm:shadow-[15px_-15px_#4338ca] lg:shadow-[20px_-20px_#4338ca]"
            />
          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
            <h2 className="lg:text-3xl text-xl md:text-xl mb-2 pb-2 font-bold text-black">
              Why{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Work With Us{" "}
              </span>
            </h2>
            <p className="text-xs lg:text-base text-slate-600 mt-4 pb-4 mb-4">
              At BAOIAM, we create pathways to success, offering limitless
              opportunities where innovation and creativity thrive. Join our
              dynamic, inclusive team dedicated to making a difference in your
              career and the world.
            </p>
          </div>
        </div>

        <div className="animediv1 w-full mx-auto px-4 mt-10">
          <div
            ref={(el) => (animRefs.current[1] = el)}
            className="flex flex-col mx-auto md:flex-row-reverse justify-center items-center w-full"
          >
            <div className="w-[80%] md:w-[25%]">
              <img
                src={work1}
                alt="vision-image"
                className="w-full h-full rounded-tr-3xl rounded-bl-3xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] lg:shadow-[-20px_-20px_#4338ca]"
              />
            </div>

            <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
              <h2 className="lg:text-3xl text-xl md:text-xl lg:mb-5 font-bold text-black">
                Work{" "}
                <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                  Environment{" "}
                </span>
              </h2>
              <p className="text-xs lg:text-base text-slate-600 mt-4">
                At BAOIAM, we offer an inspiring environment where creativity
                thrives and collaboration drives innovation. Our inclusive
                culture celebrates diverse perspectives, fostering teamwork that
                sparks fresh ideas. With flexible working options, a focus on
                work-life balance, and a commitment to continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
