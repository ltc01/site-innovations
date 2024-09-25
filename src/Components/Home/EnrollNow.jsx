import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// import ContactFormComponent from '../../Components/Co'
import { ContactFormComponent } from "../../Components/Contact/ContactForm";
const EnrollNow = () => {
  const [showForm, setShowForm] = useState(false);
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
      <div className="hidden sm:block">
        {/* Enroll Now Button */}
        <Link to={"#"} className="relative group">
              <button
                onClick={() =>togglePopup}
                type="button"
                className="hidden z-10 lg:flex group text-black bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-base shadow-amber-500/50 dark:shadow-base dark:shadow-amber-800/80 font-semibold rounded-lg text-sm px-0.5 py-0.5 text-center"
              >
                <span className="flex items-center dark:text-white dark:bg-black/70 group-hover:text-white transition-all group-hover:bg-black/30 text-nowrap justify-center w-full h-full bg-white rounded-md px-4 py-1.5 ">
                  Enroll Now
                </span>
              </button>
            </Link>

        {/* Popup Modal */}
        {showForm && (
          <ContactFormComponent showForm={showForm} setShowForm={setShowForm} />
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
