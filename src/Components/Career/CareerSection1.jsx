import { FaSlack, FaGoogle, FaDribbble } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import image10 from "../../assets/ITIE&Entre/teamwork6.webp";

export const CareerSection1 = () => {
  return (
    <>
      <div className='dark:bg-black dark:text-zinc-200 min-h-screen bg-[#fcfdff] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden'>
        {/* Main Content Section */}
        <main className='flex flex-col lg:flex-row items-center lg:justify-between w-full lg:px-20 py-8 lg:py-12'>
          {/* Text Section */}
          <div className='text-center lg:text-left  lg:w-1/2 space-y-6'>
            <h1 className='text-4xl dark:text-zinc-100 sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0a0a0a] '>
              Upskills Your{" "}
              <span className='bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-transparent bg-clip-text'>
                Career
              </span>
              <br />
              Journey With Us.
            </h1>
            <p className='text-base sm:text-lg md:text-xl dark:text-gray-600 text-[#0a0a0a] '>
              Amet nulla ornare neque, in diam ultrices et phasellus
              <br /> mattis. Eget eget ut eget nibh.
            </p>

            {/* Search Bar */}
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
              <input
                type='text'
                placeholder='Type'
                className='border border-gray-300 rounded-lg p-3 w-full sm:w-auto flex-grow'
              />
              <button className='bg-black dark:bg-white dark:hover:bg-[#d97706] dark:hover:shadow-lg dark:text-black text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#d97706] hover:shadow-lg mt-2 sm:mt-0'>
                Search
              </button>
            </div>
          </div>

          {/* Image and Icons Section */}
          <div className='relative mt-8 lg:mt-0 lg:w-1/2 flex justify-center '>
            {/* Yellow Circle and Main Image */}
            <div className='relative w-full flex justify-center'>
              <div className='absolute  bg-yellow-300 w-[50vw] h-[50vw]  md:w-[378px] md:h-[378px] lg:w-[400px] lg:h-[400px] rounded-full absolute -top-0 -left-3 md:top-10 md:-left-3 lg:-top-10 lg:-left-1 '></div>
              <img
                src={image10} // Replace with your image source
                alt='Job Finder Illustration'
                className=' relative w-full h-auto  z-10 lg:pl-10 '
              />
            </div>

            {/* Floating Icons */}
            <div className='absolute top-[-20px] left-12 lg:left-20'>
              <FaSlack className='text-blue-600 bg-white p-1 lg:p-2 md:p-2 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12   md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
            </div>
            <div className='absolute top-24 left-[-10px] lg:left-[-20px]'>
              <FaGoogle className='text-red-600 bg-white p-1 lg:p-2 md:p-2 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12   md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
            </div>
            <div className='absolute top-[-10px] right-20 lg:right-40 md:right-40 sm:right-40'>
              <FaDribbble className='text-pink-600 bg-white p-1 lg:p-2 md:p-2 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12   md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
            </div>
            <div className='absolute top-8 right-9 lg:right-10 '>
              <FiBarChart2 className='text-green-600 bg-white p-1 lg:p-2 md:p-2 sm:p-2 rounded-full shadow-lg lg:w-12 lg:h-12   md:w-12 md:h-12 sm:w-10 sm:h-10 w-6 h-6' />
            </div>

            {/* Stats Box */}
            <div className='absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 lg:bottom-[-18px] lg:left-auto lg:right-10 z-20 bg-white rounded-lg shadow-lg p-2 lg:p-4 md:p-4 flex items-center space-x-2 transition-transform  transition-transform duration-200 ease-in-out hover:scale-105'>
              <FiBarChart2 className='text-orange-500 w-8 h-8' />
              <div>
                <p className='lg:text-xl  md:text-xl text-lg font-bold text-gray-800'>
                  20K+
                </p>
                <p className='lg:text-sm  md:text-sm text-xs text-gray-500'>
                  People got hired
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
