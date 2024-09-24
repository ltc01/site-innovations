import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import ContactFormComponent from '../../Components/Co'
import { ContactFormComponent } from "../../Components/Contact/ContactForm";
const EnrollNow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setShowPopup(true);
    setAnimatePing(true);

    // Remove ping animation after a short duration
    setTimeout(() => {
      setAnimatePing(false);
    }, 1000); // Adjust duration as needed
  };
  const location = useLocation();
  if (location.pathname !== "/404")
    return (
      <div className="hidden sm:block">
        {/* Enroll Now Button */}
        {/* <button
        type="button"
        onClick={togglePopup}
        className="hidden sm:flex text-white bg-gradient-to-r from-green-400 via-green-600 to-green-700 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-base shadow-indgo-500/50 dark:shadow-base dark:shadow-indigo-800/80 font-semibold rounded-lg text-sm px-4 py-2 text-center"
      >
        Enroll Now
      </button> */}

        <button
          type="button"
          onClick={togglePopup}
          className="relative w-fit rounded-lg px-5 py-1 md:py-2 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative text-xs md:text-sm"> Enroll Now</span>
        </button>

        {/* Popup Modal */}
        {showPopup && (
          <ContactFormComponent />
          // <div className="fixed inset-0 flex items-center justify-center z-50">
          //   {/* Overlay */}
          //   <div
          //     className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
          //     onClick={() => setShowPopup(false)} // Click outside to close
          //   ></div>

          //   {/* Modal Content */}
          //   <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center">
          //     {/* Success Icon */}
          //     <FaCheckCircle
          //       size={50}
          //       className={`text-green-500 mx-auto mb-4 ${
          //         animatePing ? "animate-ping" : ""
          //       }`}
          //     />

          //     <h2 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
          //       Thank You for Enrolling!
          //     </h2>
          //     <p className="text-gray-700 mb-6">
          //       Your enrollment was successful. We’re excited to have you on
          //       board!
          //     </p>

          //     {/* Decorative Element */}
          //     <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-md"></div>

          //     {/* Close Button */}
          //     <button
          //       onClick={() => setShowPopup(false)}
          //       className="bg-gradient-to-br from-purple-600 via-indigo-500 to-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none transition-all"
          //     >
          //       Close
          //     </button>
          //   </div>
          // </div>
        )}
      </div>
    );
};

export default EnrollNow;
