import React, { useState, useEffect } from 'react';
import Lenskart from '../../assets/Partners/Lenskart.png';
import Hirect from '../../assets/Partners/Hirect.png';
import Internshala from '../../assets/Partners/Internshala.png';
import HCLTech from '../../assets/Partners/HCLTech.png';
import HelloIntern from '../../assets/Partners/HelloIntern.png';
import Mentorsity from '../../assets/Partners/Mentorsity.png';

const Partners = () => {
  const images = [Lenskart, Hirect, Internshala, HCLTech, HelloIntern, Mentorsity];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(3);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth >= 812) {
        setImagesPerSlide(3); 
      } else if (window.innerWidth >= 560) {
        setImagesPerSlide(2); 
      } else {
        setImagesPerSlide(1); 
      }
    };

    updateImagesPerSlide(); 
    window.addEventListener('resize', updateImagesPerSlide); 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + imagesPerSlide >= images.length ? 0 : prevIndex + imagesPerSlide
      );
    }, 1500); 

    return () => {
      clearInterval(interval); 
      window.removeEventListener('resize', updateImagesPerSlide); 
    };
  }, [images.length, imagesPerSlide]);

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerSlide);

  return (
    <div className='m-2 dark:bg-[#080529]'>
      <h1 className="text-center text-3xl tracking-tight w-full md:w-[60%] mx-auto font-bold my-9">
        We are associated with businesses and non-profits
        <span className='text-indigo-600'> from startups to MNC's</span>
      </h1>

      <div className="px-5 bg-indigo-50">
        <div className="flex justify-between">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full  px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-contain w-full h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
