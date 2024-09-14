import { FaCloud } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { FaLanguage } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import React from 'react'
import { FaBook, FaProjectDiagram, FaGlobe, FaUsers } from 'react-icons/fa';


const Courses = () => {
  const data = [
    {
      title: "12,500+ Hours of Engaging Learning",
      description: "Over 12,500 hours of interactive content designed to boost your growth.",
      icon: <FaBook className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "500+ Real-World Projects",
      description: "Hands-on experience with 500+ real-world projects.",
      icon: <FaProjectDiagram className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "75,000+ Learners Worldwide",
      description: "Join a global community of 75,000+ learners.",
      icon: <FaGlobe className="dark:text-white text-indigo-500 text-4xl" />
    },
    {
      title: "350+ Leading Industry Mentors",
      description: "Guided by over 350 industry experts.",
      icon: <FaUsers className="dark:text-white text-indigo-500 text-4xl" />
    }
  ];

  return (
    <div className="px-10 dark:bg-[#080529] py-8">
      <div className="text-center mt-14 mb-10 md:mb-20">
        <h1 className="text-3xl sm:text-4xl dark:text-white  font-bold text-gray-900 mb-2">Our Key Metrics</h1>
        <p className="text-base dark:text-gray-300 sm:text-lg text-gray-600">Discover the milestones and achievements that set us apart in the industry.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-100 dark:bg-indigo-900 bg-opacity-60 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4"> {/* Centering icon */}
              {stat.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{stat.title}</h2>
            <p className="text-gray-600 dark:text-white">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Courses

