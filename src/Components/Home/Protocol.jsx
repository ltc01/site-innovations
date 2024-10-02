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

  useEffect(() => {
    // itemsRef.current.forEach((el, index) => {
    //   gsap.fromTo(
    //     el,
    //     { opacity: 0, y: 50 }, // Initial state
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 1.2,
    //       ease: "power3.out",
    //       stagger:0.2,
    //       scrollTrigger: {
    //         trigger: el,
    //         start: "top 80%", // When the element is 80% in view
    //         toggleActions: "play none none reverse",
    //         markers: false, // Set to true for debugging markers
    //       },
    //     }
    //   );
    // });



const tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.Protocoldiv',
    start:'top 70%',
  }
})

tl.fromTo('.Protocolanime',{
  opacity:0,
  y:40
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',
  stagger:0.2,
})


tl.fromTo('.protocol-anime1',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',

},'-=0.5')

tl.fromTo('.protocol-anime2',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',

},
'-=0.4')

tl.fromTo('.protocol-anime3',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',
},
'-=0.3'
)




  }, []);

  return (
    <div className="md:px-16 Protocoldiv">
      <div className="md:mt-[6rem]">
        <h1 className="Protocolanime text-3xl md:text-4xl my-2 text-center font-extrabold">
          The ethics{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Baoiam
          </span>{" "}
          follows
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-14 px-12">
        <div
          className="flex flex-col items-center"
        >
          <MdHeadsetMic className="protocol-anime1 text-[4rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="protocol-anime2 font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2">
              Continuous Support
            </h2>
            <p className="protocol-anime3 text-sm tracking-tight">
              Our excellent team is ready to serve you full time at every stage of your learning journey. We contribute to half of your success, believing that the right guidance can pave the way to achieving your goals
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center"
        >
          <BsPersonVideo className="protocol-anime1 text-[4rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="protocol-anime2 font-bold lg:text-[1.1rem] sm:text-[1.2rem] my-2">
              Highly Experienced Trainers
            </h2>
            <p className="protocol-anime3 text-sm tracking-tight">
              The guidance and experience you revive from our top tier mentors will benefit you at every stage of your learning journey. With their extensive expertise, our mentors ensure you're equipped for success.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center"
        >
          <MdOutlinePhonelink className="protocol-anime1 text-[3.6rem] text-indigo-700" />
          <div className="text-center p-3">
            <h2 className="protocol-anime2 font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2">
              Seamless To Use
            </h2>
            <p className="protocol-anime3 text-sm tracking-tight">
              Our platform is designed to be easily operated by anyone, with no complex fundamentals. We have implemented simple navigation that is easy for every age group to follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
