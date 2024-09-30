import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import demo from "../../assets/GSCP/favicon.mp4";

const HeroSection = () => {

  

  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo('.anime1',{opacity:0,y:30},{
      opacity:1,
      duration:1,
      y:0,
      stagger:0.2,
      ease:'back.inOut',
    })

    tl.fromTo('.anime3',{transformOrigin:'center',scaleY:0},{
      opacity:1,
      duration:1,
      scaleY:1,
      stagger:0.2,
      ease:'back.inOut',
    },
    '-=0.5'
  )

    tl.fromTo('.anime2',{opacity:0,y:30},{
      opacity:1,
      duration:1,
      y:0,
      stagger:0.2,
      ease:'back.inOut',
    },
    '-=0.9'
  )

  }, []);

  return (
    <section className="flex flex-col items-center">
       {/* Uncomment and use the video section as needed */}
    <div className="w-full h-[75vh] relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
  
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}

      <div className="absolute top-0 left-0 pointer-events-none z-2 inset-0">
          <div className="w-full h-full bg-black opacity-65"></div>
        </div>
  
      <div className="text-white font-extrabold flex  flex-col items-start md:items-center justify-center w-full h-full relative text-center z-3 inset-0 ">
        <div className="sentence  gap-4 w-full flex flex-col items-start md:flex-row md:items-center text-center absolute md:w-[65%] justify-center h-full mx-auto px-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
          <h2 className="anime1 bg-gradient-to-r from-pink-500  to-violet-600  text-transparent hero md:py-3 p-1">
            <span className="anime1 text-xl px-4 md:text-4xl text-white lg:text-5xl">GCEP</span>
          </h2>
          <span className="anime3 w-[1vw] h-[8vw] hidden md:block bg-white"></span>
          <div className="text-xl  hero-tail text-left md:text-4xl xl:text-5xl ">
            <h2 className="anime2">Global Collabo </h2>  
            <h2 className="text-nowrap anime2 ">Education Partnership </h2> </div> 
      </div>
      </div>
    </div>   
  </section>
  
  );
};

export default HeroSection;
