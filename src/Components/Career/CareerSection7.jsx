import { useState, useEffect } from "react";
import image3 from "../../assets/ITIE&Entre/teamwork10.webp";
import image4 from "../../assets/ITIE&Entre/teamwork15.jpg";
import image5 from "../../assets/ITIE&Entre/teamwork0.webp";

export const CareerSection7 = () => {
  const slides = [
    {
      image: image5,
      content:
        "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
    },
    {
      image: image3,
      content:
        "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
    },
    {
      image: image4,
      content:
        "The best part of working at Hubstaff will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here..",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);
  return (
    <>
      {/* Slide Section */}
      <div className=' dark:bg-black relative w-full overflow-hidden    items-center justify-center sm:p-6 md:p-10 m-0'>
        <div
          className='flex transition-transform ease-in-out duration-1000'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className='w-full h-full flex-shrink-0 flex items-center justify-center'
            >
              <div className='flex flex-col sm:flex-row w-full max-w-screen-lg h-full border border-gray-200 shadow-2xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-3xl bg-white m-5'>
                {/* Left side - Content */}
                <div className='flex-1 flex justify-center  m-0 sm:p-4'>
                  <p className='text-base sm:text-sm md:text-lg lg:text-xl text-black text-center sm:text-left'>
                    {slide.content}
                  </p>
                </div>
                {/* Right side - Image */}
                <div className='flex-1 h-full'>
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
