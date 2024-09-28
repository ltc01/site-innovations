import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const EnrollNow = ({showForm,setShowForm}) => {
  const [animatePing, setAnimatePing] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    console.log(showForm)
    setShowForm(true);
    setAnimatePing(true);

    // Remove ping animation after a short duration
    setTimeout(() => {
      setAnimatePing(false);
    }, 1000); // Adjust duration as needed
  };
  const location = useLocation();
  if (location.pathname !== "/404")
    return (
      <div className="hidden md:block">
        {/* Enroll Now Button */}
        <Link to={"#"} className="relative group">
              <button
                onClick={() =>togglePopup()}
                type="button"
                className="hidden z-10 lg:flex group text-black bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-base shadow-amber-500/50 dark:shadow-base dark:shadow-amber-800/80 font-semibold rounded-lg text-sm px-0.5 py-0.5 text-center"
              >
                <span className="flex items-center dark:text-white dark:bg-black/70 group-hover:text-white transition-all group-hover:bg-black/30 text-nowrap justify-center w-full h-full bg-white rounded-md px-4 py-1.5 ">
                  Enroll Now
                </span>
              </button>
            </Link>
      </div>
    );
};

export default EnrollNow;
