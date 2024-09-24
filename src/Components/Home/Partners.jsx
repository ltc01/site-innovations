import React, { useEffect, useRef } from "react";
import Lenskart from "../../assets/Partners/Lenskart.png";
import Hirect from "../../assets/Partners/Hirect.png";
import Internshala from "../../assets/Partners/Internshala.png";
import HCLTech from "../../assets/Partners/HCLTech.png";
import HelloIntern from "../../assets/Partners/HelloIntern.png";
import Mentorsity from "../../assets/Partners/Mentorsity.png";
import BrandMarquee from "../Marquee/BrandMarquee";
import { universities } from "../../assets/Universities/Universities";
import { brands } from '../../assets/BrandPartners/Brands';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const titleRef = useRef([]);
  const descriptionRef = useRef([]);

  useEffect(() => {
    titleRef.current.forEach((title, index) => {
      gsap.fromTo(title, 
        { opacity: 0, y: -20 }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    descriptionRef.current.forEach((desc, index) => {
      gsap.fromTo(desc, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: desc,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="dark:bg-[#080529]">
      <div className="my-20">
        <h2
          className="text-3xl px-2 text-center sm:text-4xl dark:text-white font-bold text-gray-900"
          ref={(el) => (titleRef.current[0] = el)}
        >
          Our Trusted <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Business Partners</span>
        </h2>
        <p
          className="text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
          ref={(el) => (descriptionRef.current[0] = el)}
        >
          We collaborate with organizations from startups to multinational firms,
          including a diverse range of business and non-profits.
        </p>
        <BrandMarquee array={brands} />
      </div>
      <div className="my-20">
        <h2
          className="text-3xl text-center sm:text-4xl px-2 dark:text-white font-bold text-gray-900"
          ref={(el) => (titleRef.current[1] = el)}
        >
          Shaping Future with <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Leading Universities</span>
        </h2>
        <p
          className="text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
          ref={(el) => (descriptionRef.current[1] = el)}
        >
          Partnering with top universities to provide quality education and access to advanced resources, ensuring students are prepared for future success.
        </p>
        <BrandMarquee array={universities} />
      </div>
    </div>
  );
};

export default Partners;
