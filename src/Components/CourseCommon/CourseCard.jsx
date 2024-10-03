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
    <div className="h-[28rem] md:my-4 m-4 mx-auto shadow-md shadow-slate-500 dark:bg-white/10 border rounded-xl flex flex-col" >
  {/* Image */}
  <div className="relative h-[50%] bottom-4  px-4 flex-shrink-0">
    <img
      src={course?.thumbnail_image ? course.thumbnail_image : "https://i.pinimg.com/474x/d4/d3/c0/d4d3c02f855019b7357b6c46da2124da.jpg"}
      alt={course.title}
      className="w-full flex h-full rounded-t-3xl object-cover"
    />
    <div className="absolute bottom-3 left-8 flex">
      <span
        onClick={() => handlePlanSelect(0)}
        className={`rounded-lg px-3 py-1 cursor-pointer text-sm mr-3 flex-1 ${
          !planIndex
            ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white"
            : "bg-slate-200 text-gray-800"
        }`}
      >
        Plus
      </span>

      <span
        onClick={() => handlePlanSelect(1)}
        className={`flex-1 rounded-lg cursor-pointer px-3 py-1 text-sm ${
          !planIndex
            ? " bg-slate-200 text-gray-800"
            : "bg-gradient-to-r from-orange-600 to-amber-600 text-white"
        }`}
      >
        Premium
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="px-4 h-[50%] flex flex-col">
    <h3 className="text-xl font-bold my-2">{course.title}</h3>

    <p className="text-base pr-3 overflow-hidden text-ellipsis line-clamp-3">
      {course.description}
    </p>

    <hr className="my-2" />

    {/* Price and Button */}
    <div className="mt-auto flex justify-between items-center">
      <p className="font-bold text-indigo-800 text-base mb-6 dark:text-amber-500">
        ₹{course.plans[planIndex].price}
      </p>
      <button
        onClick={() => navigate(`/course/${course.title}/${course.id}`)}
        className="bg-gradient-to-r text-base rounded-md from-indigo-700 to-indigo-400 text-white mb-6 px-3 py-1 font-semibold hover:bg-gradient-to-l"
      >
        Read More
      </button>
    </div>
  </div>
</div>

  );
}

export default CourseCard;
