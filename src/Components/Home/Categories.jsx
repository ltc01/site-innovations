import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = [
    "Artificial Intelligence & Machine Learning",
    "Data Science & Analytics",
    "Digital Marketing & SEO",
    "Entrepreneurship & Innovation",
    "UI/UX Design & Product Management",
    "Finance & Investment Strategies",
    "Critical Thinking & Problem Solving",
    "Leadership & Teamwork",
    "Communication & Public Speaking",
    "Emotional Intelligence",
    "Time Management",
    "Adaptability & Flexibility",
    "Creative Writing & Content Creation",
    "Project Management",
    "Strategic Thinking & Planning",
  ];
  const navigate = useNavigate();
  return (
    <div className="text-center dark:bg-black px-4 pt-16 md:pb-10 mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-extrabold px-6 sm:px-20 lg:px-48 mx-auto mb-6">
        Advance Your  <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
        Career</span> with Top  <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
        Leading Skills</span>
      </h1>
      <p className="text-base px-6 sm:px-20 lg:px-48 mb-5 dark:text-gray-300 text-gray-600">
      Empower your professional journey with the skills that matter most in today's evolving job market.</p>
      <div className="flex flex-wrap justify-center pt-6 gap-3 md:gap-5">
        {categories.map((category, index) => (
          <button
            key={index}
            className="dark:bg-white/20 bg-slate-200 font-medium text-[0.6rem] text-black dark:text-white px-2 py-1 md:px-4 md:py-2 rounded-md md:text-sm hover:bg-slate-200 dark:hover:bg-white/50 transition duration-200"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-center md:justify-normal lg:justify-start space-x-4">
          <p
            onClick={() => navigate("/courses")}
            className="relative inline-flex items-center justify-center mx-auto text-black dark:text-amber-400 hover:text-indigo-500 underline font-bold rounded-xl text-sm lg:text-lg"
          >
           
              Explore all courses
            
          </p>
        </div>
    </div>
  );
};

export default Categories;
