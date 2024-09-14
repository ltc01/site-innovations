import React from 'react'
import Herobg from '../../assets/Hero.png'
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from 'react-icons/io'

const Hero = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/pap");
  };
  return (
    <div className="bg-white dark:bg-[#080529] dark:text-white flex flex-col-reverse md:flex-row px-8 lg:px-20 lg:-mt-10 items-center">
      {/* Left Side: Heading and Content */}
      <div className="w-full flex gap-y-1 pb-10 md:pb-0 flex-col lg:w-1/2 text-center md:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Boost your<span className="text-indigo-500"> Skillset</span>
        </h1>
        <h1 className="text-3xl lg:text-5xl font-bold">
          Accelerate your <span className="text-orange-500">Career.</span>
        </h1>
        <p className="mt-4 dark:text-white text-black lg:text-lg">
          Gain a competitive edge with exclusive access to top CEOs and industry leaders. Elevate your skills and unlock new opportunities with our expert-led courses.
        </p>
        <div className="mt-8 flex justify-center md:justify-normal lg:justify-start space-x-4">
          <button
            onClick={() => navigate('/courses/college')}
            className="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 md:px-12 py-3 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group">
            <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span class="relative text-sm lg:text-base">Explore Courses</span>
          </button>
        </div>
      </div>



      {/* Right Side:Slider*/}
      <div className='w-full flex justify-center lg:items-center h-72 md:h-full lg:w-1/2'>
        <img className='object-cover' src={Herobg} alt='Right image' />
      </div>
    </div>
  )
}

export default Hero