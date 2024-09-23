import React from "react";
import { useNavigate } from "react-router-dom"; 
import Error from '../../assets/ITIE&Entre//Error.svg'; 

const Maintenance = () => {
  document.title = 'Baoiam - Maintenace'
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="flex flex-col items-center text-center max-w-lg">
        <img
          src={Error}
          alt="Error Img"
          className="w-64 h-64 md:w-72 md:h-80"
        />
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
          This page is currently down for Maintenance!
        </h1>
        <p className="text-gray-600 mt-2">We’ll be back shortly.</p>
        <button 
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
          onClick={handleGoHome} 
        >
          Take Me Back Home
        </button>
      </div>
    </div>
  );
};

export default Maintenance;


