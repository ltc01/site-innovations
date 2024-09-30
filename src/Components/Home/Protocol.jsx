import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdHeadsetMic, MdOutlinePhonelink, MdOutlineSupportAgent } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { BsPersonVideo } from "react-icons/bs";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const itemsRef = useRef([]);

  // useEffect(() => {
  //   itemsRef.current.forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       { opacity: 0, y: 50 }, // Initial state
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 80%", // When the element is 80% in view
  //           toggleActions: "play none none reverse",
  //           markers: false, // Set to true for debugging markers
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className="md:px-16">
      <div className="md:mt-[6rem]">
        <h1 className="text-3xl md:text-4xl my-2 text-center font-extrabold">
          The ethics{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Baoiam
          </span>{" "}
          follows
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-14 px-12">
        <div
          ref={(el) => (itemsRef.current[0] = el)}
          className="flex flex-col items-center"
        >
          <MdHeadsetMic className="text-[4rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2">
              Continuous Support
            </h2>
            <p className="text-sm tracking-tight">
              Our excellent team is ready to serve you full time at every stage of your learning journey. We contribute to half of your success, believing that the right guidance can pave the way to achieving your goals
            </p>
          </div>
        </div>

        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="flex flex-col items-center"
        >
          <BsPersonVideo className="text-[4rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="font-bold lg:text-[1.1rem] sm:text-[1.2rem] my-2">
              Highly Experienced Trainers
            </h2>
            <p className="text-sm tracking-tight">
              The guidance and experience you revive from our top tier mentors will benefit you at every stage of your learning journey. With their extensive expertise, our mentors ensure you're equipped for success.
            </p>
          </div>
        </div>

        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="flex flex-col items-center"
        >
          <MdOutlinePhonelink className="text-[3.6rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2">
              Seamless To Use
            </h2>
            <p className="text-sm tracking-tight">
              Our platform is designed to be easily operated by anyone, with no complex fundamentals. We have implemented simple navigation that is easy for every age group to follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
