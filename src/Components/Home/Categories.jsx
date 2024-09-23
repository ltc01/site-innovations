// src/components/Categories.jsx
import React from "react";

const Categories = () => {
  const categories = [
    "Art and Craft (DIY)",
    "Life skills",
    "English & Public Speaking",
    "Creative Writing",
    "Finance Education",
    "Critical Thinking and Problem Solving",
    "Photography and Editing Skills",
    "Technology Development with AI & Coding",
    "Entrepreneurship and Innovation",
  ];

  return (
    <div className="text-center dark:bg-[#080529] px-2 py-11 mx-auto ">
      <h1 className="text-3xl tracking-tight font-bold mx-auto mb-4">
        Advance Your Career. Learn in
        <span className="text-indigo-600"> Baoiam </span>
      </h1>
      <p className="text-sm mx-auto px-2 md:text-lg mb-4 md:mb-6">
        Expand your career in the area of graphics, data analytics, management
        and beyond.
      </p>
      <div className="flex flex-wrap justify-center mt-8 gap-2 md:gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="dark:bg-indigo-600 px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
