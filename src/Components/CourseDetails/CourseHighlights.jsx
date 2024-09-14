import React from 'react'
import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import { Highlights } from '../../Data';

const CourseHighlights = () => {

    // For? maping icons dynamically
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
        <div className="py-8 px-8 lg:px-24 w-full h-full">
            <h4 className="text-4xl font-semibold mb-8">
                Course{" "}
                <span className="border-b text-orange-500 border-orange-500">
                    Highlights
                </span>
            </h4>

            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-black">
                {Highlights?.map((h, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-white group hover:scale-105 overflow-hidden lg:h-[230px] justify-center shadow-2xl px-4 py-8 md:h-[210px] rounded-xl flex flex-col gap-4 w-[21rem] lg:w-64"
                        >
                            <span className="text-4xl drop-shadow-2xl group-hover:text-orange-600 group-hover:shadow-orange-600 group-hover:animate-bounce transition-all ease-in-out">
                                {React.createElement(highlightIcons(h.icon))}
                            </span>
                            <p className="tracking-tighter">
                                <span className="text-2xl font-semibold leading-tight tracking-tighter">
                                    {h.head}
                                </span>{" "}
                                <br /> <span>{h.desc}</span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CourseHighlights