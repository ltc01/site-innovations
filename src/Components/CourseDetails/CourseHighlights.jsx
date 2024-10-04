import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import { Highlights } from "../../Data";

gsap.registerPlugin(ScrollTrigger);

const CourseHighlights = () => {


  // Dynamically mapping icons
  const highlightIcons = (icon) => {
    if (icon.startsWith("Md")) {
      return MDIcons[icon];
    } else if (icon.startsWith("Fc")) {
      return FCIcons[icon];
    } else if (icon.startsWith("Gr")) {
      return GRIcons[icon];
    } else if (icon.startsWith("Sl")) {
      return SLIcons[icon];
    } else if (icon.startsWith("Go")) {
      return GOIcons[icon];
    } else if (icon.startsWith("Pi")) {
      return PiIcons[icon];
    } else {
      return "not found";
    }
  };

  return (
    <div className="py-8 px-8 xl:px-24 w-full h-full">
      <h4 className="mb-8 text-2xl md:text-4xl text-center lg:mb-12 font-bold">
        Course{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Highlights
        </span>
      </h4>

      <div className="en6 flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-black">
        {Highlights?.map((h, i) => {
          return (
            <div
              key={i}
              className="bg-white group dark:bg-black/30 hover:scale-105 overflow-hidden lg:h-[230px] justify-center shadow-2xl px-4 py-8 xl:py-0 md:h-[210px] rounded-xl flex flex-col gap-4 w-full sm:w-[21rem] lg:w-[30%] highlight-card"
            >
              <p className="tracking-tighter dark:text-white flex items-center gap-2">
                <span className="text-2xl md:text-4xl drop-shadow-2xl group-hover:text-gradient-to-r from-pink-500 to-violet-600 group-hover:shadow-orange-600 group-hover:animate-bounce transition-all ease-in-out">
                  {React.createElement(highlightIcons(h.icon))}
                </span>
                <span className="text-lg md:text-2xl font-semibold md:leading-tight md:tracking-tighter">
                  {h.head}
                </span>
              </p>
              <p>
                <span className="text-xs md:text-base dark:text-slate-300">{h.desc}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseHighlights;
