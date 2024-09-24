import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  FaArrowRight,
  FaArrowRightArrowLeft,
  FaGraduationCap,
} from "react-icons/fa6";
import {
  MdKeyboardArrowRight,
  MdOutlineAttachMoney,
  MdOutlineMoneyOff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white relative shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden pb-16 mx-auto font-[sans-serif] mt-4">
      <div className="min-h-fit">
        <img
          src="https://readymadeui.com/Imagination.webp"
          className="w-full"
        />
      </div>

      <div className="px-6 pb-12">
        <div className="course-catagory flex justify-between items-center">
          <p className="py-2 px-4 bg-blue-100 text-blue-500 font-semibold w-fit text-xs rounded-md text-nowrap my-4">
            {course.category}
          </p>
          <div className="text-amber-400 rounded-sm px-3 text-sm">
            {course.difficultyLevel}
          </div>
        </div>
        <h3 className="text-gray-800 text-xl font-bold overflow-hidden text-ellipsis line-clamp-2 hover:line-clamp-none">
          {course.title}
        </h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          {course.description.split(".")[0]}.
        </p>
        <div className="absolute bottom-4 w-10/12 flex flex-col items-start gap-4">
          <div className="flex items-center text-gray-500 font-semibold space-x-4">
            <div className="flex items-center">
              <AiOutlineClockCircle className="mr-1" />
              <span className="text-nowrap text-xs">
                {course?.duration}
              </span>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="mr-1" />
              <span className="text-nowrap text-xs">
                {course?.numberOfLearners} learners
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-4 w-full items-center ">
            <button
              type="button"
              className="p-2 rounded-lg text-sm tracking-wider outline-none text-green-600 flex items-center "
            >
              {course.price}
              {/* <MdKeyboardArrowRight className="text-xl " /> */}
            </button>
            <button
              onClick={() => {
                navigate(`/course/college/${course.id}`);
              }}
              type="button"
              className="px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-gradient-to-r from-indigo-800 to-indigo-500 w-fit"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
