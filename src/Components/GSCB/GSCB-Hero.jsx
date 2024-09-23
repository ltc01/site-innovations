import React, { useEffect } from "react";
import gsap from "gsap";
import demo from "../../assets/GSCP/favicon.mp4";

const HeroSection = () => {
  useEffect(() => {
    const sentences = gsap.utils.toArray(".sentence");

    const tl = gsap.timeline({ repeat: -1 });

    sentences.forEach((sentence) => {
      const h1s = sentence.querySelectorAll("h1");
      const h2s = sentence.querySelectorAll("h2");
      const spans = sentence.querySelectorAll(".spn");

      tl.fromTo(sentence, { display: "none" }, { display: "flex", duration: 0 })
        .fromTo(
          spans,
          { scaleY: 0, transformOrigin: "center" },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h1s,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h2s,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          },
          "-=0"
        )

        .to(sentence, { display: "none", duration: 2 });
    });
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
  
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
      <div className="text-white font-extrabold flex  flex-col items-start md:items-center justify-center w-full h-full relative text-center">
        <div className="sentence  gap-4 w-full flex flex-col items-start md:flex-row md:items-center text-center absolute md:w-[65%] justify-center h-full mx-auto px-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
          <h2 className="bg-gradient-to-r from-pink-500  to-violet-600  text-transparent hero py-3">
            <span className="text-4xl px-4 md:text-4xl text-white lg:text-5xl">GCEP</span>
          </h2>
          <span className="w-1 h-36 bg-white hidden md:block max- xs:h-24"></span>
          <p className="text-xl hero-tail text-left md:text-4xl xl:text-5xl">Global Collabo <span className="text-nowrap">Educational Partnership</span></p>
        
        </div>
      </div>
    </div>   
  </section>
  
  );
};

export default HeroSection;
