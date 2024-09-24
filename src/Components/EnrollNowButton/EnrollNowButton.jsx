import React, { useEffect, useRef } from "react";
import "animate.css";
import { useLocation, useParams } from "react-router-dom";

const EnrollNowButton = () => {
  const buttonRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const triggerAnimation = () => {
      if (buttonRef.current) {
        // Add animation class
        buttonRef.current.classList.add("animate__animated", "animate__wobble");

        // Remove animation class after animation ends (1 second)
        setTimeout(() => {
          buttonRef.current.classList.remove(
            "animate__animated",
            "animate__wobble"
          );
        }, 1000); // Duration of the animation
      }
    };

    // Trigger animation every 20 seconds
    const interval = setInterval(() => {
      triggerAnimation();
    }, 3000);

    // Run animation on component mount
    triggerAnimation();

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
  if (location.pathname != "/404")
    return (
      <div>
        <button
          ref={buttonRef}
          className="sm:hidden fixed bottom-28 right-0 z-[100] inline-flex items-center justify-center text-base font-medium disabled:opacity-50 border  rounded-l-3xl w-35 px-5 py-3 bg-gradient-to-r from-pink-500 to-violet-600 m-0 cursor-pointer border-gray-200 text-white normal-case"
        >
          Enroll Now
        </button>
      </div>
    );
};

export default EnrollNowButton;
