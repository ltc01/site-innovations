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

    gsap.fromTo(
      ".effect",
      {
        opacity: 0,
        y: 30,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.inOut",
        stagger: 0.4,
      }
    );
  }, []);

  return (
    <section className="flex flex-col px-[24px] py-[2px] items-center">
      <div className="px-[24px] py-[10px] flex items-center flex-col justify-evenly">
        <h1 className="effect text-[5vw] font-bold leading-[6vw] mb-[4vw] text-center  max-xs:text-[10vw]  max-xs:leading-[12vw] max-md:text-[7vw] max-md:leading-[8vw]">
          Be part of the Make <br />{" "}
          <h1 className="effect">Academic Alliance</h1>
        </h1>
        <p className="effect text-[1.7vw] text-center px-[10rem] mb-[4vw] max-xs:px-[1rem] max-xs:text-[4vw] max-xs:font-[500] max-md:text-[2.5vw] max-md:font-[500] max-md:px-[0rem]">
          We're excited to work with universities and schools worldwide to equip
          students with the no-code and automation skills to thrive in an
          ever-evolving global marketplace.
        </p>
        <a
          href="#4"
          className="effect flex items-center text-center text-[1.5vw] font-[600] gap-3 mb-[3vw] hover:text-slate-600 max-xs:text-[3vw] max-xs:px-[1rem] max-xs:font-[600] max-md:text-[2.3vw] max-md:font-[600]"
        >
          Learn more about the Make Academic Alliance →
        </a>
        <button className="effect enlarge shadow-[inset_0_0_0_1px_#616467] dark:border-[white] text-black px-[30px] py-[9px] rounded-full border-[1px] font-bold bg-black text-white hover:dark:bg-white hover:dark:text-black hover:bg-transparent hover:text-black dark:text-neutral-200 hover:transition duration-200 max-xs:px-[12px] max-xs:py-[4px] max-xs:text-[2.5vw]">
          Click Me
        </button>
      </div>
      <div className="w-full h-[75vh] relative overflow-hidden px-4 max-xs:px-4 rounded-3xl  max-xs:h-[30vh] max-xs:rounded-lg  max-md:h-[40vh]">
        <video
          className="absolute top-0 left-0 w-full h-full opacity-100  object-cover"
          loop
          autoPlay
          muted
        >
          <source src={demo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="absolute top-0 left-0  pointer-events-none">
          <div className="w-full h-full bg-black opacity-35"></div>
        </div>

        <div className="text-white font-extrabold flex flex-col items-center justify-center w-full h-full relative text-center">
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
            <h1 className="bg-red-500 p-2 max-xs:p-1">
              <span className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">
                Responsive
              </span>
            </h1>
            <span className="w-1 h-48 bg-black max-xs:h-24 max-md:h-28 spn"></span>
            <h2 className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">Layout</h2>
            <h2 className=" text-6xl max-xs:text-[6vw] max-md:text-[5vw]">For</h2>
            <h2 className=" text-6xl max-xs:text-[6vw] max-md:text-[5vw]">Us.</h2>
          </div>
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[49%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
            <h1 className="bg-red-500 p-2 max-xs:p-1">
              <span className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">
                Responsive
              </span>
            </h1>
            <span className="w-1 h-48 bg-black max-xs:h-24 max-md:h-28 spn"></span>
            <h2 className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">Better</h2>
            <h2 className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">World.</h2>
          </div>
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[49%] transform -translate-x-[50%] -translate-y-[50%] max-xs:gap-1">
            <h1 className="bg-red-500 p-2 max-xs:p-1">
              <span className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">
                Responsive
              </span>
            </h1>
            <span className="w-1 h-48 bg-black max-xs:h-24 max-md:h-28 spn"></span>
            <h2 className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">For</h2>
            <h2 className="text-6xl max-xs:text-[6vw] max-md:text-[5vw]">Us.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
