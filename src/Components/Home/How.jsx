import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoGear, GoProjectRoadmap, GoGlobe } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const How = () => {
  const iconBoxesRef = useRef([]);

  useEffect(() => {
    // Ensure GSAP targets are correctly referenced
    if (iconBoxesRef.current.length > 0) {
      iconBoxesRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el, // Each icon box will be triggered when it comes into view
              start: "top 80%", // When 85% of the element is in view
              end: "bottom 60%", // Animation completes when 60% of the element is in view
              toggleActions: "play none none reverse", // Trigger actions
              markers: false, // Set to true for debugging markers
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <div className="flex justify-center my-4">
        <div className="w-[80%] xl:w-[85%] text-center">
          <h1 className="text-3xl sm:text-4xl my-5 font-bold">
            How we{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Work
            </span>
          </h1>
          <p className="mx-auto w-full lg:w-[80%]">
            We create high-quality courses mentored by experts, offering
            full-time support, live corporate training, placement help, and
            networking opportunities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 w-full px-10 mt-10 mb-[4rem] mx-auto">
        <IconBox
          ref={(el) => (iconBoxesRef.current[0] = el)}
          icon={<GoGear />}
          title="Expert Guidance"
          text="Boost your confidence with guidance from top experts."
        />
        <IconBox
          ref={(el) => (iconBoxesRef.current[1] = el)}
          icon={<IoPeopleOutline />}
          title="Community Support"
          text="Join discussions and share ideas with a supportive community."
        />
        <IconBox
          ref={(el) => (iconBoxesRef.current[2] = el)}
          icon={<GoProjectRoadmap />}
          title="Live Projects"
          text="Gain practical knowledge by working on live corporate projects."
        />
        <IconBox
          ref={(el) => (iconBoxesRef.current[3] = el)}
          icon={<HiOutlineRocketLaunch />}
          title="Placement Help"
          text="Learn interview skills and land top jobs with our guidance."
        />
        <IconBox
          ref={(el) => (iconBoxesRef.current[4] = el)}
          icon={<GoGlobe />}
          title="Networking & Funding"
          text="Enhance networking and secure financial aid for your business."
        />
      </div>
    </>
  );
};

const IconBox = React.forwardRef(({ icon, title, text }, ref) => (
  <div ref={ref} className="text-center my-2">
    <div className="text-[3rem] flex justify-center mb-4">
      <div className="rounded-full p-3 text-indigo-600 border-2 border-indigo-600">
        {icon}
      </div>
    </div>
    <h2 className="text-nowrap text-lg font-bold mb-2">{title}</h2>
    <p className="text-sm tracking-tight">{text}</p>
  </div>
));

export default How;
