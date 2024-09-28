import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const [planIndex, setPlanIndex] = useState(1);
  const handlePlanSelect = (index) => {
    setPlanIndex(index);
  }
  const navigate = useNavigate();
  return (
    <div className="h-80 w-fit min-w-56 md:my-4 my-0 bg-gradient-to-r from-teal-50  to-indigo-100 shadow-lg overflow-hidden dark:from-indigo-950  dark:to-teal-700  mx-auto dark:border rounded-xl m-2" >
      <div className="relative h-[50%]">
        <img
          src={'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-4 flex">

          <span onClick={() => handlePlanSelect(0)} className={`rounded-lg px-3 py-1 text-xs mr-3 flex-1 ${!planIndex ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white" : "bg-slate-200 text-gray-800"}`}>
            Plus
          </span>

          <span onClick={() => handlePlanSelect(1)} className={`flex-1 rounded-lg px-3 py-1 text-xs ${!planIndex ? " bg-slate-200 text-gray-800" : "bg-gradient-to-r from-orange-600 to-amber-500 text-white"}`}>
            Premium
          </span>
        </div>
      </div>
      <div className="px-4 relative h-[50%]">

        <h3 className="text-xl font-semibold my-2 text-wrap">{course.title} </h3>
        {/* <p className="text-sm pr-3 text-slate-600 text-justify">{course.description}</p> */}

        <div className="flex mb-2 mx-auto px-1 justify-between items-center text-nowrap gap-3 absolute right-0 left-0 w-11/12 bottom-3">
          <button
            // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
            className="text-lg font-bold w-fit rounded-md"
          >
            ₹ {course.plans[planIndex].price}
          </button>
          <button
            onClick={() => navigate(`/course/${course.title}/${course.id}`)}
            className="bg-gradient-to-r text-base from-indigo-700 to-indigo-400 text-white px-3 py-1 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300 flex items-center justify-center w-fit rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
